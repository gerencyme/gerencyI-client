import { rows } from '../animatedTableUtils';
import { formatPrice, getFirstThreeNames } from '~utils/transformers';
import { VariantProps } from 'tailwind-variants';
import * as tv from '../animatedTableTV';

interface TableProps extends VariantProps<typeof tv.animatedTableTv> {
  isPressable: boolean;
}

export function Table({ isPressable, state }: TableProps) {
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
          {rows.map((content, i) => {
            return (
              <div key={i} className={tv.animatedTableContentRootTv()}>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv({ position: 'first' })}>
                    <div className={tv.animatedTableColorIdentifyRootTv()}>
                      <div className={`w-0.5 sm:w-1 h-2 sm:h-6 rounded-2xl ${content.color}`} />
                    </div>
                    {getFirstThreeNames(content?.name).firstThree}
                  </div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72 relative">
                  <div className={tv.animatedTableContentTv()}>
                    {getFirstThreeNames(content?.brand).firstThree}
                  </div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv()}>
                    {getFirstThreeNames(content?.date).firstThree}
                  </div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv()}>{content?.quantity}</div>
                </div>
                <div className="table-cell py-1 sm:py-4 sm:w-72">
                  <div className={tv.animatedTableContentTv({ position: 'last' })}>
                    {formatPrice(content?.price)}
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
