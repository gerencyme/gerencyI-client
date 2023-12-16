import { Title } from '~/src/app/shared/components/Title';
import { registerHeaderTv } from '../RegisterTV';

interface RegisterHeaderProps {
  title: string;
  subtitle: string;
}

export function RegisterHeader({ title, subtitle }: RegisterHeaderProps) {
  return (
    <div className={registerHeaderTv()}>
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
