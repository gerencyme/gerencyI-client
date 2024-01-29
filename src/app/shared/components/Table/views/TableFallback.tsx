import { Text } from '../../Text';
import { tableFallbackTextTv, tableFallbackWrapperTv } from '../TableTV';

export function TableFallback() {
  return (
    <div className={tableFallbackWrapperTv()}>
      <Text className={tableFallbackTextTv()} weight="bold" text="Não encontramos nenhum pedido" />
    </div>
  );
}
