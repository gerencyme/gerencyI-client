import { Text } from '../../Text';
import { tableFallbackTextTv } from '../TableTV';

export function TableFallback() {
  return (
    <div className="absolute w-full left-0">
      <Text
        color="white"
        className={tableFallbackTextTv()}
        weight="bold"
        text="Não encontramos nenhum pedido"
      />
    </div>
  );
}
