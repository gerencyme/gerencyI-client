import { useForm } from 'react-hook-form';
import { MyDataSchema, myDataSchema } from '../MyDataUtils';
import { zodResolver } from '@hookform/resolvers/zod';

export const useMyData = () => {
  const allMyDataSchema = useForm<MyDataSchema>({
    resolver: zodResolver(myDataSchema)
  });

  return { allMyDataSchema };
};
