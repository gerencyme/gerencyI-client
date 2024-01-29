import { Title } from '~/src/app/shared/components/Title';
import { authHeaderSubtitleTv, authHeaderTitleTv, authHeaderTv } from '../AuthTV';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className={authHeaderTv()}>
      <Title title={title} weight="semi-bold" className={authHeaderTitleTv()} />
      <Title title={subtitle} as="h2" weight="semi-bold" className={authHeaderSubtitleTv()} />
    </div>
  );
}
