import { Title } from '~/src/app/shared/components/Title';
import { authHeaderTv } from '../AuthTV';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className={authHeaderTv()}>
      <Title
        title={title}
        weight="semi-bold"
        color="white"
        className="text-xl min-[1520px]:text-2xl"
      />
      <Title
        title={subtitle}
        as="h2"
        weight="semi-bold"
        className="text-white/75 text-lg min-[1520px]:text-2xl"
      />
    </div>
  );
}
