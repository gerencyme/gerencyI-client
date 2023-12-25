import { Text } from '../../Text';

interface AvatarDefaultProps {
  companyName: string;
}

export function AvatarDefault({ companyName }: AvatarDefaultProps) {
  const firstLetter = companyName.split(' ')[0].charAt(0);
  const secondLetter = companyName.split(' ')[1]?.charAt(0) || '';
  const firstBusinessLetters = firstLetter + secondLetter;

  return (
    <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
      {secondLetter ? (
        <Text
          text={firstBusinessLetters.toUpperCase()}
          weight="bold"
          color="white"
          size="sm"
          fontFamily="rosarivo"
        />
      ) : (
        <Text
          text={firstLetter.toUpperCase()}
          weight="bold"
          color="white"
          size="sm"
          fontFamily="rosarivo"
        />
      )}
    </div>
  );
}
