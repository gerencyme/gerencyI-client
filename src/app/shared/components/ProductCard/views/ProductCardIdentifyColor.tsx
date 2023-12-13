import { productCardIdentifyColorTv } from '../ProductCardTV';

interface ProductCardIdentifyColorProps {
  color: string;
}

export function ProductCardIdentifyColor({ color }: ProductCardIdentifyColorProps) {
  return (
    <div className={productCardIdentifyColorTv()}>
      <div className={`${color} rounded-lg h-1 w-52 m-auto`} />
    </div>
  );
}
