import { Text } from '../../Text';
import { Title, TitleProps } from '../../Title';

interface AboutServiceHeaderProps extends TitleProps {
  subtitle: string;
}

export function AboutServiceHeader({ subtitle, ...props }: AboutServiceHeaderProps) {
  return (
    <>
      <Title
        fontFamily="rosarivo"
        className="text-lg lg:text-2xl font-rosarivo text-center"
        color="white"
        {...props}
      />

      <Text
        text={subtitle}
        color="white"
        fontFamily="rosarivo"
        className="text-sm lg:text-md text-white/75 text-center pt-4"
      />
    </>
  );
}
