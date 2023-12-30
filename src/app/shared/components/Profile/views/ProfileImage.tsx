import { Avatar } from '../../Avatar';

interface ProfileImageProps {
  src: string;
  companyName: string;
}

export function ProfileImage({ src, companyName }: ProfileImageProps) {
  return (
    <Avatar.root size="medium">
      {src ? (
        <Avatar.image src={src} alt={`logo referente à empresa ${companyName}`} />
      ) : (
        <Avatar.default textSize="xl" companyName={companyName} />
      )}
    </Avatar.root>
  );
}
