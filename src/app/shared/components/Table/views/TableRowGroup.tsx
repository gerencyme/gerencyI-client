import * as tv from '../TableTV';
import { MutableRefObject } from 'react';
import { Icon } from '../../Icon';
import { AiOutlineLoading } from 'react-icons/ai';
import { formateDate } from '~shared/utils/dates';
import { ProductCard } from '~shared/types/ProductCard';
import { formatPrice, getFirstThreeNames } from '~shared/utils/transformers';
import { TableObserver } from './TableObserver';

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
            <div className="table-cell py-1 sm:py-4 sm:w-72">
              <div className={tv.tableContentTv({ position: 'first' })}>
                <div className={tv.tableColorIdentifyRootTv()}>
                  <div
                    style={{ backgroundColor: content.orderColorIdentity }}
                    className="w-0.5 sm:w-1 h-2 sm:h-6 rounded-2xl"
                  />
                </div>
                {getFirstThreeNames(content?.product.productName).firstThree}
              </div>
            </div>
            <div className="table-cell py-1 sm:py-4 sm:w-72 relative">
              <div className={tv.tableContentTv()}>
                {getFirstThreeNames(content?.product.productBrand).firstThree}
              </div>
            </div>
            <div className="table-cell py-1 sm:py-4 sm:w-72">
              <div className={tv.tableContentTv()}>{formateDate(content?.orderDate)}</div>
            </div>
            <div className="table-cell py-1 sm:py-4 sm:w-72">
              <div className={tv.tableContentTv()}>{content?.product.quantity}</div>
            </div>
            <div className="table-cell py-1 sm:py-4 sm:w-72">
              <div className={tv.tableContentTv({ position: 'last' })}>
                {formatPrice(content?.product.unitPrice)}
              </div>
            </div>
          </div>
        );
      })}
      {loading && (
        <Icon
          icon={AiOutlineLoading}
          color="white"
          size="small"
          className="animate-spin absolute left-1/2"
        />
      )}
      <TableObserver ref={tableRef} />
    </div>
  );
}
