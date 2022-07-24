export type Profile = {
  id: number
  firstName: string | null
  secondName: string | null
  patronymic: string | null
  gender?: number | null
  email: string | null
  phone: string | null
  phoneCountry: string | null
  dateOfBirth: string | null
  createdAt: string | null
  updatedAt: string | null
  hasPassword: boolean
}

export type AuthUser = {
  token: string | undefined
  client: Profile | null
}
