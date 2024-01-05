import { tableHeaderCellGroupTv } from '../TableTV';

export function TableHeaderRow() {
  return (
    <div className="table-row">
      <div className={`${tableHeaderCellGroupTv()} sm:pl-16`}>Nome</div>
      <div className={tableHeaderCellGroupTv()}>Marca</div>
      <div className={tableHeaderCellGroupTv()}>Data</div>
      <div className={tableHeaderCellGroupTv()}>Quantidade</div>
      <div className={tableHeaderCellGroupTv()}>Preço</div>
    </div>
  );
}
