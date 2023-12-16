import { ProductCardActions as ProductCardActionsType } from '~types/ProductCardActions';
import { Button } from '../../Button';
import { productCardActionsTv } from '../ProductCardTV';
import { ProductCard } from '~types/ProductCard';

type CardStatus = ProductCard['status'];

interface ProductCardActionsProps {
  actions: () => ProductCardActionsType[];
  status: CardStatus;
}

export function ProductCardActions({ actions, status }: ProductCardActionsProps) {
  if (status === 'underAnalisis') return null;

  return (
    <div className={productCardActionsTv()}>
      {actions().map((action) => (
        <Button.root onClick={action.onClick} key={action.id} size="small" color={action.color}>
          <Button.contentWrapper>
            <Button.label text={action.label} size="xxs" weight="bold" />
          </Button.contentWrapper>
        </Button.root>
      ))}
    </div>
  );
}
