import { z } from 'zod'

export const organizationSchema = z.object({
  __subjectname: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
