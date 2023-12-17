import { z } from 'zod';
import { defaultMessage, minLengthPassword } from '~shared/utils/constants/comumRegisterAndAuth';
import { maskCpfOrCnpj } from '../../shared/utils/transformers';

export const authSubmitSchema = z.object({
  CNPJ: z
    .string()
    .nonempty(`${defaultMessage} seu CNPJ`)
    .min(18, 'CNPJ inválido')
    .max(18, 'máximo de 18 caracteres')
    .transform((cnpj: string) => maskCpfOrCnpj(cnpj)),
  Password: z
    .string()
    .nonempty(`${defaultMessage} sua senha`)
    .min(minLengthPassword, `Senhas devem ter pelomenos ${minLengthPassword} caracteres`)
});

export type TAuthSubmitSchema = z.infer<typeof authSubmitSchema>;
