interface TbodyProps {
  bodyContent: string[];
}

export function Tbody({ bodyContent = [] }: TbodyProps) {
  return (
    <tbody>
      <tr>
        {bodyContent.map((content, i) => (
          <td className="text-white" key={i}>
            {content}
          </td>
        ))}
      </tr>
    </tbody>
  );
}
