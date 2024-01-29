import { z } from 'zod';
import { defaultMessage } from '~shared/utils/constants/comumRegisterAndAuth';

export const recoverySchema = z.object({
  Email: z.string().nonempty(`${defaultMessage} seu email`).toLowerCase()
});

export type TRecoverySchema = z.infer<typeof recoverySchema>;
