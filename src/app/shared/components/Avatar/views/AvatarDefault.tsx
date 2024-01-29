import { Text } from '../../Text';
import { avatarDefaultWrapperTv } from '../AvatarTV';

interface AvatarDefaultProps {
  companyName: string;
  textSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xs' | 'xxs';
}

export function AvatarDefault({ companyName, textSize = 'sm' }: AvatarDefaultProps) {
  const firstLetter = companyName.split(' ')[0].charAt(0);
  const secondLetter = companyName.split(' ')[1]?.charAt(0) || '';
  const firstBusinessLetters = firstLetter + secondLetter;

  return (
    <div className={avatarDefaultWrapperTv()}>
      {secondLetter ? (
        <Text
          text={firstBusinessLetters.toUpperCase()}
          weight="bold"
          color="white"
          size={textSize}
          fontFamily="rosarivo"
        />
      ) : (
        <Text
          text={firstLetter.toUpperCase()}
          weight="bold"
          color="white"
          size={textSize}
          fontFamily="rosarivo"
        />
      )}
    </div>
  );
}
