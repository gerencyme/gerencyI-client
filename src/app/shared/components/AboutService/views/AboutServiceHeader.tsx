import { Text } from '../../Text';
import { Title, TitleProps } from '../../Title';
import {
  aboutServiceHeaderSubtitleTv,
  aboutServiceHeaderTitleTv,
  aboutServiceHeaderTv
} from '../AboutServiceTV';

interface AboutServiceHeaderProps extends TitleProps {
  subtitle: string;
}

export function AboutServiceHeader({ subtitle, ...props }: AboutServiceHeaderProps) {
  return (
    <div className={aboutServiceHeaderTv()}>
      <Title
        fontFamily="rosarivo"
        className={aboutServiceHeaderTitleTv()}
        color="white"
        {...props}
      />

      <Text
        text={subtitle}
        color="white"
        fontFamily="rosarivo"
        className={aboutServiceHeaderSubtitleTv()}
      />
    </div>
  );
}
