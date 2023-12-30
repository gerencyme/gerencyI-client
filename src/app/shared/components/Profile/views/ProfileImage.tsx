import { Avatar } from '../../Avatar';
import { UploadAvatar } from '~features/uploadAvatar';
import { useUploadImage } from '~hooks/contexts/useUploadImage';

interface ProfileImageProps {
  src: string;
  companyName: string;
}

export function ProfileImage({ src, companyName }: ProfileImageProps) {
  const { isEditing, editToggle } = useUploadImage();

  const avatarUser = (
    <Avatar.root size="medium" onClick={editToggle} className="cursor-pointer">
      {src ? (
        <Avatar.image
          className={isEditing ? 'z-[999]' : 'z-auto'}
          src={src}
          alt={`logo referente à empresa ${companyName}`}
        />
      ) : (
        <Avatar.default textSize="xl" companyName={companyName} />
      )}
    </Avatar.root>
  );

  return (
    <>
      {avatarUser}
      {isEditing && <UploadAvatar />}
    </>
  );
}
