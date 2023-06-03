import { create } from 'zustand'
import { api } from '../config/api'

interface StoreInterface {
    user: string | unknown | string[]
    setUser: () => void
}

export const useUserStore = create<StoreInterface>()((set) => ({
    user: 'fahmi',
    setUser: async () => {
        try {
            const resp = api('GET', 'admin/user')
            set({ user: resp })
        } catch (error) {
            return (error);
        }
    }
}))

