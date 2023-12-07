import { Text } from '../../Text';
import { Title, TitleProps } from '../../Title';

interface AboutServiceHeaderProps extends TitleProps {
  subtitle: string;
}

export function AboutServiceHeader({ subtitle, ...props }: AboutServiceHeaderProps) {
  return (
    <div className="w-full h-fit pt-32 min-[540px]:pt-52 md:pt-44">
      <Title
        fontFamily="rosarivo"
        className="text-lg md:text-xl lg:text-2xl font-rosarivo text-center"
        color="white"
        {...props}
      />

      <Text
        text={subtitle}
        color="white"
        fontFamily="rosarivo"
        className="text-sm lg:text-md text-white/75 text-center pt-4"
      />
    </div>
  );
}
