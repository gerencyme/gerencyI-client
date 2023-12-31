import { coloredBannerTv } from './ColoredBannerTV';

interface ColoredBannerProps {
  color: string;
}

export function ColoredBanner({ color }: ColoredBannerProps) {
  const gradient = `linear-gradient(180deg, ${color} 0%, rgba(8, 15, 37, 0) 85%)`;

  return (
    <div id="ColoredBanner" style={{ backgroundImage: gradient }} className={coloredBannerTv()} />
  );
}
