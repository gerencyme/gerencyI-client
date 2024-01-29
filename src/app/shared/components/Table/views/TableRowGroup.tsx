import * as tv from '../TableTV';
import { MutableRefObject } from 'react';
import { formateDate } from '~shared/utils/dates';
import { ProductCard } from '~shared/types/ProductCard';
import { formatPrice, getFirstThreeNames } from '~shared/utils/transformers';
import { DivObserver } from '../../DivObserver';
import { Spinner } from '../../Spinner';

export interface TableRowGroupProps {
  tableRows?: ProductCard[];
  tableRef?: MutableRefObject<null>;
  loading?: boolean;
}

export function TableRowGroup({ tableRows = [], tableRef, loading = false }: TableRowGroupProps) {
  return (
    <div className="table-row-group">
      {tableRows?.map((content, i) => {
        return (
          <div key={i} className={tv.tableContentRootTv()}>
            <div className={tv.tableCellTv()}>
              <div className={tv.tableContentTv({ position: 'first' })}>
                <div className={tv.tableColorIdentifyRootTv()}>
                  <div
                    style={{ backgroundColor: content.orderColorIdentity }}
                    className={tv.tableColorIdentityTv()}
                  />
                </div>
                {getFirstThreeNames(content?.product.productName).firstThree}
              </div>
            </div>
            <div className={`${tv.tableCellTv()} relative`}>
              <div className={tv.tableContentTv()}>
                {getFirstThreeNames(content?.product.productBrand).firstThree}
              </div>
            </div>
            <div className={tv.tableCellTv()}>
              <div className={tv.tableContentTv()}>{formateDate(content?.orderDate)}</div>
            </div>
            <div className={tv.tableCellTv()}>
              <div className={tv.tableContentTv()}>{content?.product.quantity}</div>
            </div>
            <div className={tv.tableCellTv()}>
              <div className={tv.tableContentTv({ position: 'last' })}>
                {formatPrice(content?.product.unitPrice)}
              </div>
            </div>
          </div>
        );
      })}
      {loading && <Spinner />}
      <DivObserver ref={tableRef} />
    </div>
  );
}
