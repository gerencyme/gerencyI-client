import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTimeout } from '~/src/app/shared/hooks/useTimeout';
import { useUserInfo } from '~/src/app/shared/hooks/useUserInfo';
import { capitalizeName } from '~/src/app/shared/utils/transformers';

export const useNavbarController = () => {
  const [helloUser, setHelloUser] = useState('');
  const { user } = useUserInfo();
  const pathName = usePathname();

  const firstUserName = user?.name.split(' ')[0];
  const capitalizedUserName = (firstUserName && capitalizeName(firstUserName)) || '';

  const situation = helloUser.includes('Bem vindo');
  const updateSituation = () => setHelloUser(`Olá, ${capitalizedUserName}`);
  const { resetSituation } = useTimeout(situation, updateSituation, 60000);

  useEffect(() => {
    const greetingValidation = () =>
      user?.isFirstLogin
        ? setHelloUser(`Bem vindo, ${capitalizedUserName}`)
        : setHelloUser(`Bem vindo de volta, ${capitalizedUserName}`);

    greetingValidation();
  }, [capitalizedUserName, user?.isFirstLogin]);

  useEffect(() => {
    resetSituation();
  }, [resetSituation]);

  return {
    pathName,
    helloUser,
    user
  };
};
