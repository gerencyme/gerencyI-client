import { TableContentWrapper } from './views/TableContentWrapper';
import { TableDivisor } from './views/TableDivisor';
import { TableFallback } from './views/TableFallback';
import { TableHeaderGroup } from './views/TableHeaderGroup';
import { TableHeaderRow } from './views/TableHeaderRow';
import { TableRoot } from './views/TableRoot';
import { TableRowGroup } from './views/TableRowGroup';

export const Table = {
  root: TableRoot,
  contentWrapper: TableContentWrapper,
  headerGroup: TableHeaderGroup,
  headerRows: TableHeaderRow,
  divisor: TableDivisor,
  rows: TableRowGroup,
  fallback: TableFallback
};
