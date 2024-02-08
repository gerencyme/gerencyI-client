import { PurchasesInfo } from '~/src/app/shared/types/PurchasesInfo';
import { favoritePurchaseInfoTv } from '../FavoriteCardTV';
import { Template } from '~shared/components/Template';
import { Text } from '~shared/components/Text';

export function FavoriteCardPurchasesInfo({
  canceledPurchases,
  donePurchases,
  underAnalysisPurchases
}: PurchasesInfo) {
  return (
    <Template responsive="locked" direction="locked-col" className="justify-center">
      <div className={favoritePurchaseInfoTv()}>
        <Text text="Compras em análise" />
        <Text text={underAnalysisPurchases} weight="bold" />
      </div>
      <div className={favoritePurchaseInfoTv()}>
        <Text text="Compras concluídas" />
        <Text text={donePurchases} weight="bold" />
      </div>
      <div className={favoritePurchaseInfoTv()}>
        <Text text="Compras canceladas" />
        <Text text={canceledPurchases} weight="bold" />
      </div>
    </Template>
  );
}
