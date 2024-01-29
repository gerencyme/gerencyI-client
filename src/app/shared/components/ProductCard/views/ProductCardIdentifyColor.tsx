import { productCardIdentifyColorRootTv, productCardIdentifyColorTv } from '../ProductCardTV';

interface ProductCardIdentifyColorProps {
  color: string;
}

export function ProductCardIdentifyColor({ color }: ProductCardIdentifyColorProps) {
  return (
    <div className={productCardIdentifyColorRootTv()}>
      <div style={{ backgroundColor: color }} className={productCardIdentifyColorTv()} />
    </div>
  );
}
