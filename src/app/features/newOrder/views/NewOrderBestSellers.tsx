import { Graphics } from '~/src/app/shared/components/Graphics';
import { Title } from '~/src/app/shared/components/Title';
import { Text } from '~/src/app/shared/components/Text';
import { BestSellersProps } from '~/src/app/shared/components/Graphics/views/BestSellers';
import {
  newOrderBestSellersTextTv,
  newOrderBestSellersTitleTv,
  newOrderBestSellersWrapperTv
} from '../NewOrderTV';

interface NewOrderBestSellersProps extends BestSellersProps {}

export function NewOrderBestSellers({ handleSetToDraft }: NewOrderBestSellersProps) {
  return (
    <div className={newOrderBestSellersWrapperTv()}>
      <Title
        as="h4"
        title="Os mais pedidos no seu segmento"
        weight="light"
        color="white"
        className={newOrderBestSellersTitleTv()}
      />
      <Graphics.bestSellers
        handleSetToDraft={handleSetToDraft}
        cursor="pointer"
        hasFunction
        bgColor="easydark"
      />

      <Text
        text="Basta clicar em um produto, selecionar marca, quantidade e enviar para análise"
        color="white"
        weight="light"
        className={newOrderBestSellersTextTv()}
      />
    </div>
  );
}
