import { LocalStorageUser } from '../types/LocalStorageUser';
import { sessionUserLocalStorage } from '../utils/constants/userLocalStorage';
import { useLocalStorage } from './useLocalStorage';

export const useUserInfo = () => {
  const { getLocalStorage } = useLocalStorage();

  const session = sessionUserLocalStorage;

  const user: LocalStorageUser = getLocalStorage(session);

  return {
    user
  };
};
