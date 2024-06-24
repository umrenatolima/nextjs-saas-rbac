import { defineAbilityFor } from '@next-saas-rbac/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeone = ability.can('invite', 'User')
const userCanDeleteSomeone = ability.can('delete', 'User')

console.log('userCanInviteSomeone', userCanInviteSomeone)
console.log('userCanDeleteSomeone', userCanDeleteSomeone)
