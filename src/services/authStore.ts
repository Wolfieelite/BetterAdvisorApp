type User = {
  id: number
  role: string
  username: string
}

class AuthStore {
  user: User | null = null

  login() {
    this.user = null
  }
}
