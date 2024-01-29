import { brightnessTv } from './BrightnessTV';

interface BrightnessProps {
  gradient: string;
}

export function Brightness({ gradient }: BrightnessProps) {
  return <div className={`${brightnessTv()} ${gradient}`} />;
}
