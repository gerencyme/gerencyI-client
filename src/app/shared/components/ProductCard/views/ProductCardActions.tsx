import { ProductCardActions as ProductCardActionsType } from '~types/ProductCardActions';
import { Button } from '../../Button';

interface ProductCardActionsProps {
  actions: ProductCardActionsType[];
}

export function ProductCardActions({ actions = [] }: ProductCardActionsProps) {
  return (
    <div className="flex items-center justify-between px-1 w-full">
      {actions.map((action) => (
        <Button.root onClick={action.onClick} key={action.id} size="small" color={action.color}>
          <Button.contentWrapper>
            <Button.label text={action.label} size="xxs" weight="bold" />
          </Button.contentWrapper>
        </Button.root>
      ))}
    </div>
  );
}
