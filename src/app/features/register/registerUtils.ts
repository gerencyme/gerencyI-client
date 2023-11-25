import { z } from 'zod';
import { capitalizeName, maskCpfOrCnpj } from '~shared/utils/transformers';
import { defaultMessage, minLengthPassword } from '~shared/utils/constants/comumRegisterAndAuth';

export const registerSubmitSchema = z.object({
  CNPJ: z
    .string()
    .nonempty(`${defaultMessage} seu CNPJ`)
    .min(18, 'CNPJ inválido')
    .max(18, 'máximo de 18 caracteres')
    .transform((cnpj: string) => maskCpfOrCnpj(cnpj)),
  Name: z
    .string()
    .nonempty(`${defaultMessage} seu nome`)
    .transform((name: string) => capitalizeName(name)),
  Password: z
    .object({
      Password: z
        .string()
        .nonempty(`${defaultMessage} sua senha`)
        .min(minLengthPassword, `Senhas devem ter pelomenos ${minLengthPassword} caracteres`),
      ConfirmPassword: z
        .string()
        .nonempty(`${defaultMessage} sua confirmação de senha`)
        .min(minLengthPassword, `Senhas devem ter pelomenos ${minLengthPassword} caracteres`)
    })
    .refine((data) => data.Password === data.ConfirmPassword, {
      message: 'As senhas não conferem',
      path: ['confirmPassword']
    }),
  Email: z.string().nonempty(`${defaultMessage} seu email`).toLowerCase(),
  CorporateReason: z
    .string()
    .nonempty(`${defaultMessage} sua Razão Social`)
    .transform((corporateReason: string) => capitalizeName(corporateReason))
});

export type TRegisterSubmitSchema = z.infer<typeof registerSubmitSchema>;
