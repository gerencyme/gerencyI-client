import { rows } from '../animatedTableUtils';
import { formatPrice, getFirstThreeNames } from '~utils/transformers';
import { VariantProps } from 'tailwind-variants';
import * as tv from '../animatedTableTV';
import { formateDate } from '~/src/app/shared/utils/dates';
import { ProductCard } from '~/src/app/shared/types/ProductCard';

interface TableProps extends VariantProps<typeof tv.animatedTableTv> {
  isPressable: boolean;
  tableRows?: ProductCard[];
}

export function Table({ isPressable, state, tableRows = rows }: TableProps) {
  const isPreeableState: typeof state = isPressable ? 'isPressable' : 'notPressable';

  return (
    <div className={tv.animatedTableTv({ state: isPreeableState })}>
      <div className={tv.animatedTableBasementTv()}>
        <div className={tv.animatedTableHeaderGroupTv()}>
          <div className="table-row">
            <div className={`${tv.animatedTableHeaderCellGroupTv()} sm:pl-16`}>Nome</div>
            <div className={tv.animatedTableHeaderCellGroupTv()}>Marca</div>
            <div className={tv.animatedTableHeaderCellGroupTv()}>Data</div>
            <div className={tv.animatedTableHeaderCellGroupTv()}>Quantidade</div>
            <div className={tv.animatedTableHeaderCellGroupTv()}>Preço</div>
          </div>
        </div>
        <div className={tv.animatedTablePurpleDividerTv()} />
        <div className="table-row-group">
          {tableRows.map((content, i) => {
            return (
              <div key={i} className={tv.animatedTableContentRootTv()}>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv({ position: 'first' })}>
                    <div className={tv.animatedTableColorIdentifyRootTv()}>
                      <div
                        className={`w-0.5 sm:w-1 h-2 sm:h-6 rounded-2xl ${content.orderColorIdentity}`}
                      />
                    </div>
                    {getFirstThreeNames(content?.product.productName).firstThree}
                  </div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72 relative">
                  <div className={tv.animatedTableContentTv()}>
                    {getFirstThreeNames(content?.product.productBrand).firstThree}
                  </div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv()}>
                    {formateDate(content?.orderDate)}
                  </div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv()}>{content?.product.quantity}</div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv({ position: 'last' })}>
                    {formatPrice(content?.product.unitPrice)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
