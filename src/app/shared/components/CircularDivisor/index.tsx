import { VariantProps } from 'tailwind-variants';
import { circularDivisorTv } from './CircularDivisorTv';

interface CircularDivisorProps extends VariantProps<typeof circularDivisorTv> {}

export function CircularDivisor({ color }: CircularDivisorProps) {
  return <div className={circularDivisorTv({ color })} />;
}
