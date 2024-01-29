import { CompanieRequest } from '../types/requests/CompanieRequest';
import { sessionUserLocalStorage } from '../utils/constants/userLocalStorage';
import { useLocalStorage } from './useLocalStorage';

export const useCompanyInfo = () => {
  const { getLocalStorage } = useLocalStorage();

  const session = sessionUserLocalStorage;

  const company: CompanieRequest = getLocalStorage(session);

  return {
    company
  };
};
