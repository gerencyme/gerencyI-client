import { HeartLike, HeartLikeProps } from '~animations/heartLike';
import { productCardLikeActionTv } from '../ProductCardTV';

interface ProductCardLikeActionProps extends HeartLikeProps {}

export function ProductCardLikeAction({ isLiked, handleLike }: ProductCardLikeActionProps) {
  return (
    <div className={productCardLikeActionTv()}>
      <HeartLike isLiked={isLiked} handleLike={handleLike} />
    </div>
  );
}
