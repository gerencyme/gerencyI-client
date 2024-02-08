import { ReactNode } from 'react';
import { favoriteCardRootTv } from '~shared/components/FavoriteCard/FavoriteCardTV';

interface FavoriteCardRootProps {
  children: ReactNode;
}

export function FavoriteCardRoot({ children }: FavoriteCardRootProps) {
  return <div className={favoriteCardRootTv()}>{children}</div>;
}
