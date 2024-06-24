import { z } from 'zod'

import { rolesSchema } from '../roles'

export const userSchema = z.object({
  __subjectname: z.literal('User').default('User'),
  id: z.string(),
  role: rolesSchema,
})

export type User = z.infer<typeof userSchema>
