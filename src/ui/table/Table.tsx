interface ColProps {
  key: string;
  name: string;
}

interface TableProps<T> {
  columns: ColProps[];
  rows: T[];
}

const Table = <T,>({ rows, columns }: TableProps<T>): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`}>
            {columns.map((col, i2) => (
              <td key={`cell-${i2}`}>
                {row[col.key as keyof typeof row] as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      <tfoot></tfoot>
    </table>
  );
};

export { Table };
