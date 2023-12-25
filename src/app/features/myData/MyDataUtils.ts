import { z } from 'zod';
import { defaultMessage } from '~utils/constants/comumRegisterAndAuth';
import { capitalizeName, formatCep, maskCpfOrCnpj } from '~utils/transformers';

export const myDataSchema = z.object({
  supplier: z
    .string()
    .nonempty(`${defaultMessage} seu fornecedor`)
    .min(10, 'Preencha ao menos dois nomes')
    .max(100, 'Nome não deve passar de 100 caracteres'),
  supplierCNPJ: z
    .string()
    .nonempty(`${defaultMessage} o CNPJ do fornecedor`)
    .min(18, 'CNPJ inválido')
    .max(18, 'máximo de 18 caracteres')
    .transform((cnpj: string) => maskCpfOrCnpj(cnpj)),
  supplierTelephone: z
    .string()
    .nonempty(`${defaultMessage} o número do fornecedor`)
    .min(15, 'Número inválido')
    .max(15, 'máximo de 15 caracteres'),
  supplierEmail: z.string().nonempty(`${defaultMessage} o email do fornecedor`).toLowerCase(),
  personalName: z
    .string()
    .min(10, 'Preencha o nome completo')
    .max(100, 'Nome não deve passar de 100 caracteres')
    .nonempty(`${defaultMessage} seu nome`)
    .transform((name: string) => capitalizeName(name)),
  personalCNPJ: z
    .string()
    .nonempty(`${defaultMessage} o seu CNPJ`)
    .min(18, 'CNPJ inválido')
    .max(18, 'máximo de 18 caracteres'),
  personalTelephone: z
    .string()
    .nonempty(`${defaultMessage} seu número`)
    .min(15, 'Número inválido')
    .max(15, 'máximo de 15 caracteres'),
  zipCode: z
    .string()
    .nonempty(`${defaultMessage} seu CEP`)
    .min(9, 'CEP inválido')
    .max(9, 'máximo de 18 caracteres')
    .transform((CEP: string) => formatCep(CEP)),
  UF: z.string().nonempty(`Confira o UF`).max(2, 'máximo de 2 caracteres'),
  city: z.string().nonempty(`${defaultMessage} sua cidade`).toLowerCase(),
  adress: z.string().nonempty(`${defaultMessage} seu endereço`).toLowerCase(),
  companieNumber: z.string().nonempty(`${defaultMessage} o número`),
  complement: z.string(),
  personalEmail: z.string().nonempty(`${defaultMessage} seu email`).toLowerCase()
});

export type MyDataSchema = z.infer<typeof myDataSchema>;
