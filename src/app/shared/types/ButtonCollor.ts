import { VariantProps } from 'tailwind-variants';
import { buttonRootTv } from '../components/Button/ButtonTV';

export type ButtonCollors = Pick<VariantProps<typeof buttonRootTv>, 'color'>;
export type ButtonCollor = ButtonCollors['color'];
