import { z } from 'zod';
import { capitalizeName, maskCpfOrCnpj } from '~shared/utils/transformers';
import { defaultMessage, minLengthPassword } from '~shared/utils/constants/comumRegisterAndAuth';

export const registerSubmitSchema = z.object({
  cnpj: z
    .string()
    .nonempty(`${defaultMessage} seu CNPJ`)
    .max(18, 'máximo de 18 caracteres')
    .transform((cnpj: string) => maskCpfOrCnpj(cnpj)),
  name: z
    .string()
    .nonempty(`${defaultMessage} seu nome`)
    .transform((name: string) => capitalizeName(name)),
  password: z
    .object({
      password: z
        .string()
        .nonempty(`${defaultMessage} sua senha`)
        .min(minLengthPassword, `Senhas devem ter pelomenos ${minLengthPassword} caracteres`),
      confirmPassword: z
        .string()
        .nonempty(`${defaultMessage} sua confirmação de senha`)
        .min(minLengthPassword, `Senhas devem ter pelomenos ${minLengthPassword} caracteres`)
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não conferem',
      path: ['confirmPassword']
    }),
  email: z.string().nonempty(`${defaultMessage} seu email`).toLowerCase(),
  corporateReason: z
    .string()
    .nonempty(`${defaultMessage} sua Razão Social`)
    .transform((corporateReason: string) => capitalizeName(corporateReason))
});

export type TRegisterSubmitSchema = z.infer<typeof registerSubmitSchema>;
