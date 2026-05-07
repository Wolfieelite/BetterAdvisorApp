import { create } from 'zustand'

type User = {
  id: number
  role: string
  username: string
}

type AuthState = {
  user: User | null
  login: (user: User) => void
  logout: () => void
  hydrate: () => void
  isAuthenticated: () => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,

  login(user) {
    localStorage.setItem('auth', JSON.stringify(user))
    set({ user })
  },

  logout: () => {
    localStorage.removeItem('auth')
    set({ user: null })
  },

  hydrate: () => {
    const saved = localStorage.getItem('auth')

    if (saved) {
      set({ user: JSON.parse(saved) })
    }
  },

  isAuthenticated: () => {
    return !!get().user
  },
}))
