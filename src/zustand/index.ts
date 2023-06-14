import { create } from 'zustand'
import { api } from '../config/api'
import {
    UserStoreInterface,
    BrandStoreInterface,
    CategoryStoreInterface,
    LoginInterface
} from '../types/interface'


export const useUserStore = create<UserStoreInterface>()((set) => ({
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

export const useBrandStore = create<BrandStoreInterface>()((set) => ({
    metadata: null,
    totalFiltered: 0,
    brands: null,
    isLoading: false,
    isError: '',
    getBrands: async () => {
        try {
            const brandResponse = await api('GET', 'admin/brand')
            const resp = await brandResponse.json()
            set({
                brands: resp.response.result,
                metadata: resp.metadata,
                totalFiltered: resp.response.totalFilterd
            })
        } catch (error) {
            set({ isError: error })
        }
    }
}))

export const useCategoryStore = create<CategoryStoreInterface>()((set) => ({
    metadata: null,
    totalFiltered: 0,
    category: null,
    isLoading: false,
    isError: '',
    getCategory: async () => {
        try {
            const brandResponse = await api('GET', 'admin/kategori')
            const resp = await brandResponse.json()
            set({
                category: resp.response.result,
                metadata: resp.metadata,
                totalFiltered: resp.response.totalFiltered
            })
        } catch (error) {
            set({ isError: error })
        }
    }
}))

export const useLoginStore = create<LoginInterface>()((set) => ({
    user: '',
    isError: null,
    isLoading: false,
    login: async (username: string, password: string) => {
        set({ isLoading: true })
        try {
            const login = await api('POST', 'auth/login', {
                email: username,
                password: password
            })
            console.log(login)
            const resp = await login.json()
            console.log(resp, 'respo sus')
            set({ user: resp })
            return resp
        } catch (error) {
            set({ isError: error })
        }
    }
}))