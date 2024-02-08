import { favoriteCardLikeActionTv } from '~shared/components/FavoriteCard/FavoriteCardTV';
import { HeartLike, HeartLikeProps } from '~animations/heartLike';

interface FavoriteCardLikeActionProps extends HeartLikeProps {}

export function FavoriteCardLikeAction({ isLiked, handleLike }: FavoriteCardLikeActionProps) {
  return (
    <div className={favoriteCardLikeActionTv()}>
      <HeartLike isLiked={isLiked} handleLike={handleLike} />
    </div>
  );
}
