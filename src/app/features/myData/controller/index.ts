import { useForm } from 'react-hook-form';
import { MyDataSchema, myDataSchema } from '../MyDataUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { MyDataActions } from '~/src/app/shared/types/MyDataActions';
import { updateMyData } from '../services';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { CompanieRequest } from '~/src/app/shared/types/requests/CompanieRequest';
import * as transformer from '~/src/app/shared/utils/transformers';

export const useMyDataController = () => {
  const { maskCpfOrCnpj, formatPhoneNumber, formatCep, onlyLetters } = transformer;
  const { company } = useCompanyInfo();

  const defaultValues: MyDataSchema = {
    personalCNPJ: company.cnpj,
    city: company.zipCode.city ?? '',
    zipCode: company.zipCode.code,
    adress: company.zipCode.street ?? '',
    companieNumber: company.zipCode.number ?? '',
    complement: company.zipCode.complement ?? '',
    contactNumber: company.supplier.telephone ?? '',
    email: company.supplier.email ?? '',
    UF: company.zipCode.state ?? '',
    supplier: company.supplier.nome ?? '',
    supplierCNPJ: company.supplier.cnpj || '',
    personalEmail: company.email,
    personalName: company.name,
    personalContactNumber: company.supplier.telephone ?? '' // isso deve ser alterado para contato pessoal
  };

  const allMyDataSchema = useForm<MyDataSchema>({
    resolver: zodResolver(myDataSchema),
    defaultValues
  });

  const { watch, setValue, handleSubmit } = allMyDataSchema;

  const supplierCNPJ = watch('supplierCNPJ');
  const personalCNPJ = watch('personalCNPJ');
  const contactNumber = watch('contactNumber');
  const personalContactNumber = watch('personalContactNumber');
  const CEP = watch('zipCode');
  const UF = watch('UF');

  useEffect(() => {
    setValue('supplierCNPJ', maskCpfOrCnpj(supplierCNPJ));
    setValue('personalCNPJ', maskCpfOrCnpj(personalCNPJ));
  }, [supplierCNPJ, personalCNPJ, setValue, maskCpfOrCnpj]);

  useEffect(() => {
    setValue('contactNumber', formatPhoneNumber(contactNumber ?? ''));
    setValue('personalContactNumber', formatPhoneNumber(personalContactNumber ?? ''));
  }, [contactNumber, formatPhoneNumber, personalContactNumber, setValue]);

  useEffect(() => {
    setValue('zipCode', formatCep(CEP));
  }, [CEP, formatCep, setValue]);

  useEffect(() => {
    setValue('UF', onlyLetters(UF));
  }, [UF, onlyLetters, setValue]);

  const onSubmit = (data: MyDataSchema) => {
    const formattedData: CompanieRequest = {
      cnpj: data.personalCNPJ,
      corporateReason: company.corporateReason,
      email: data.personalEmail,
      id: company.id,
      name: data.personalName,
      supplier: {
        nome: data.supplier,
        cnpj: data.supplierCNPJ,
        email: data.email,
        telephone: data.contactNumber,
        endereco: '',
        supplierId: ''
      },
      token: company.token,
      updateDate: new Date(),
      zipCode: {
        city: data.city,
        code: data.zipCode,
        complement: data.complement,
        country: 'Brasil',
        fullAddress: '',
        neighborhood: '',
        number: data.contactNumber,
        state: data.UF,
        street: data.adress,
        streetType: ''
      }
    };

    return updateMyData(formattedData);
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
