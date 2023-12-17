import { z } from 'zod';
import { defaultMessage } from '~utils/constants/comumRegisterAndAuth';
import { maskCpfOrCnpj } from '~utils/transformers';

export const myDataSchema = z.object({
  supplier: z.string().nonempty(`${defaultMessage} seu fornecedor`),
  CNPJ: z
    .string()
    .nonempty(`${defaultMessage} o CNPJ do fornecedor`)
    .min(18, 'CNPJ inválido')
    .max(18, 'máximo de 18 caracteres')
    .transform((cnpj: string) => maskCpfOrCnpj(cnpj)),
  contactNumber: z
    .string()
    .nonempty(`${defaultMessage} o número do fornecedor`)
    .min(15, 'Número inválido')
    .max(15, 'máximo de 18 caracteres'),
  email: z.string().nonempty(`${defaultMessage} o email do fornecedor`).toLowerCase()
});

export type MyDataSchema = z.infer<typeof myDataSchema>;
