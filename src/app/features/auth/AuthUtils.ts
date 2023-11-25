import { z } from 'zod';
import { defaultMessage, minLengthPassword } from '~shared/utils/constants/comumRegisterAndAuth';
import { maskCpfOrCnpj } from '../../shared/utils/transformers';

export const recoverySchema = z.object({
  email: z.string().nonempty(`${defaultMessage} seu email`).toLowerCase()
});

export const authSubmitSchema = z.object({
  cnpj: z
    .string()
    .nonempty(`${defaultMessage} seu CNPJ`)
    .refine((cnpj: string) => maskCpfOrCnpj(cnpj)),
  password: z
    .string()
    .nonempty(`${defaultMessage} sua senha`)
    .min(minLengthPassword, `Senha deve ter pelomenos ${minLengthPassword} caracteres`)
});

export type TAuthSubmitSchema = z.infer<typeof authSubmitSchema>;
export type TRecoverySchema = z.infer<typeof recoverySchema>;
