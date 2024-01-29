import { ProductCardActions as ProductCardActionsType } from '~types/ProductCardActions';
import { Button } from '../../Button';
import { productCardActionsTv } from '../ProductCardTV';
import { ProductCard } from '~types/ProductCard';

type CardStatus = ProductCard['orderStatus'];

interface ProductCardActionsProps {
  actions: () => ProductCardActionsType[];
  status: CardStatus;
}

export function ProductCardActions({ actions, status }: ProductCardActionsProps) {
  if (status === 'underAnalysis') return null;

  if (status === 'canceled') {
    const cancelAction = actions()[1];

    return (
      <div className="flex text-white">
        <Button.root
          onClick={cancelAction.onClick}
          key={cancelAction.id}
          size="small"
          color={cancelAction.color}
        >
          <Button.contentWrapper>
            <Button.label color="white" text={cancelAction.label} size="xxs" weight="bold" />
          </Button.contentWrapper>
        </Button.root>
      </div>
    );
  }

  return (
    <div className={productCardActionsTv({})}>
      {actions().map((action) => (
        <Button.root onClick={action.onClick} key={action.id} size="small" color={action.color}>
          <Button.contentWrapper>
            <Button.label color={action.textColor} text={action.label} size="xxs" weight="bold" />
          </Button.contentWrapper>
        </Button.root>
      ))}
    </div>
  );
}
