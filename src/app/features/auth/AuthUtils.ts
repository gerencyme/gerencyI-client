import { z } from 'zod';
import { maskCpfOrCnpj } from '../../shared/components/Input/InputUtils';

const defaultMessage = 'Por favor, confira';
const minLengthPassword = 6;

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
    .min(minLengthPassword, `Nome deve ter pelomenos ${minLengthPassword} caracteres`)
});

export type TAuthSubmitSchema = z.infer<typeof authSubmitSchema>;
export type TRecoverySchema = z.infer<typeof recoverySchema>;
