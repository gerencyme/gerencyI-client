import { Table as TableComp } from '~shared/components/Table';
import { TableRowGroupProps } from '../../shared/components/Table/views/TableRowGroup';

interface TableProps extends TableRowGroupProps {
  isPressable?: boolean;
}

export function Table({ isPressable = false, tableRows, tableRef, loading }: TableProps) {
  return (
    <TableComp.root isPressable={isPressable}>
      <TableComp.contentWrapper>
        <TableComp.headerGroup>
          <TableComp.headerRows />
        </TableComp.headerGroup>
        <TableComp.divisor />
        <TableComp.rows tableRows={tableRows} tableRef={tableRef} loading={loading} />
      </TableComp.contentWrapper>
    </TableComp.root>
  );
}
