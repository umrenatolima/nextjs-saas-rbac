type UserPermissions = 'create' | 'delete' | 'invite' | 'manage'

export type UserSubject = [UserPermissions, 'User']
