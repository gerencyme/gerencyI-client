export function Thead() {
  const tableHeaders: string[] = ['Nome', 'Marca', 'Data', 'Quantidade', 'Preço'];

  return (
    <div className="table-header-group ...">
      <div className="table-row">
        {tableHeaders.map((header, i) => (
          <th className="table-cell" key={i}>
            {header}
          </th>
        ))}
      </div>
    </div>
  );
}
