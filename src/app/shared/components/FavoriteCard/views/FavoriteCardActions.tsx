import { Button } from '../../Button';
import { favoriteCardActionsTv } from '../FavoriteCardTV';

interface FavoriteCardActionsProps {
  onClick: () => void;
}

export function FavoriteCardActions({ onClick }: FavoriteCardActionsProps) {
  return (
    <div className={favoriteCardActionsTv({})}>
      <Button.root onClick={onClick} size="small" color="primary">
        <Button.contentWrapper>
          <Button.label color="white" text="Repetir Compra" size="xxs" weight="bold" />
        </Button.contentWrapper>
      </Button.root>
    </div>
  );
}
