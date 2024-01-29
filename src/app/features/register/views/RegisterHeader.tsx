import { Title } from '~/src/app/shared/components/Title';
import { registerHeaderSubtitleTv, registerHeaderTitleTv, registerHeaderTv } from '../RegisterTV';

interface RegisterHeaderProps {
  title: string;
  subtitle: string;
}

export function RegisterHeader({ title, subtitle }: RegisterHeaderProps) {
  return (
    <div className={registerHeaderTv()}>
      <Title title={title} weight="semi-bold" className={registerHeaderTitleTv()} />
      <Title title={subtitle} as="h2" weight="semi-bold" className={registerHeaderSubtitleTv()} />
    </div>
  );
}
