import { useForm } from 'react-hook-form';
import { MyDataSchema, myDataSchema } from '../MyDataUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { MyDataActions } from '~/src/app/shared/types/MyDataActions';
import { updateMyData } from '../services';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { CompanieRequest } from '~/src/app/shared/types/requests/CompanieRequest';
import * as transformer from '~/src/app/shared/utils/transformers';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { sessionUserLocalStorage } from '~/src/app/shared/utils/constants/userLocalStorage';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';

const session = sessionUserLocalStorage;

export const useMyDataController = () => {
  const { setLocalStorage } = useLocalStorage();
  const { push } = useRouter();
  const { maskCpfOrCnpj, formatPhoneNumber, formatCep, onlyLetters } = transformer;
  const { company } = useCompanyInfo();

  const defaultValues: MyDataSchema = {
    personalCNPJ: company.cnpj,
    city: company.zipCode.city ?? '',
    zipCode: company.zipCode.code,
    adress: company.zipCode.street ?? '',
    companieNumber: company.zipCode.number ?? '',
    complement: company.zipCode.complement ?? '',
    supplierTelephone: company.supplier.telephone ?? '',
    supplierEmail: company.supplier.email ?? '',
    UF: company.zipCode.state ?? '',
    supplier: company.supplier.nome ?? '',
    supplierCNPJ: company.supplier.cnpj || '',
    personalEmail: company.email,
    personalName: company.name,
    personalTelephone: company.telephone
  };

  const allMyDataSchema = useForm<MyDataSchema>({
    resolver: zodResolver(myDataSchema),
    defaultValues
  });

  const { watch, setValue, handleSubmit } = allMyDataSchema;

  const supplierCNPJ = watch('supplierCNPJ');
  const personalCNPJ = watch('personalCNPJ');
  const supplierTelephone = watch('supplierTelephone');
  const personalTelephone = watch('personalTelephone');
  const CEP = watch('zipCode');
  const UF = watch('UF');

  useEffect(() => {
    setValue('supplierCNPJ', maskCpfOrCnpj(supplierCNPJ));
    setValue('personalCNPJ', maskCpfOrCnpj(personalCNPJ));
  }, [supplierCNPJ, personalCNPJ, setValue, maskCpfOrCnpj]);

  useEffect(() => {
    setValue('supplierTelephone', formatPhoneNumber(supplierTelephone ?? ''));
    setValue('personalTelephone', formatPhoneNumber(personalTelephone ?? ''));
  }, [supplierTelephone, personalTelephone, formatPhoneNumber, setValue]);

  useEffect(() => {
    setValue('zipCode', formatCep(CEP));
  }, [CEP, formatCep, setValue]);

  useEffect(() => {
    setValue('UF', onlyLetters(UF));
  }, [UF, onlyLetters, setValue]);

  const onSubmit = (data: MyDataSchema) => {
    const formattedData: CompanieRequest = {
      cnpj: company.cnpj,
      corporateReason: company.corporateReason,
      email: data.personalEmail,
      id: company.id,
      telephone: data.personalTelephone,
      name: data.personalName,
      supplier: {
        nome: data.supplier,
        cnpj: data.supplierCNPJ,
        email: data.supplierEmail,
        telephone: data.supplierTelephone,
        endereco: '',
        supplierId: company.supplier.supplierId
      },
      token: company.token,
      updateDate: new Date(),
      zipCode: {
        city: data.city,
        code: data.zipCode.replace('-', ''),
        complement: data.complement,
        country: 'Brasil',
        fullAddress: '',
        neighborhood: '',
        number: data.companieNumber,
        state: data.UF,
        street: data.adress,
        streetType: ''
      }
    };

    setLocalStorage(session, formattedData);
    const resolver = () => push(APP_ROUTES.private['inventory-control'].name);
    return updateMyData(formattedData, resolver);
  };

  const actions: MyDataActions[] = [
    {
      id: 0,
      color: 'error',
      label: 'Limpar',
      type: 'reset'
    },
    {
      id: 1,
      color: 'primary',
      label: 'Atualizar',
      type: 'submit'
    }
  ];

  return { allMyDataSchema, actions, handleSubmit, onSubmit };
};
