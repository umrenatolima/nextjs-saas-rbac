import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function sendPasswordResetEmail(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/password/reset/email',
    {
      schema: {
        tags: ['auth'],
        summary: 'Request email to recover password',
        body: z.object({
          email: z.string().email(),
        }),
        response: {
          201: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { email } = request.body

      const findUserByEmail = await prisma.user.findUnique({
        where: { email },
      })

      if (!findUserByEmail) return reply.status(201).send() // we don't want people to know if user exists or not

      await prisma.token.create({
        data: {
          type: 'PASSWORD_RECOVER',
          userId: findUserByEmail.id,
        },
      })

      // TODO: Send e-mail with password recover link

      return reply.status(201).send()
    },
  )
}
