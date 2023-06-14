export interface UserStoreInterface {
    user: string | unknown | string[]
    setUser: () => void
}

interface CoreSysInterface {
    metadata?: {
        code?: number,
        message?: string,
        status?: string
    } | null
    totalFiltered: number,
    isLoading: boolean,
    isError: string | unknown,
}

export interface BrandStoreInterface extends CoreSysInterface {
    brands: {
        nama_brand: string,
        slug: string,
        logo_brand: string,
        is_active: number,
        created_by: number,
        updated_by: number | string,
        created_at: string,
        updated_at: string,
        user_created: string | null,
        user_updated: string | null
    }[] | null
    getBrands: () => void,
}

export interface CategoryStoreInterface extends CoreSysInterface {
    category: {
        nama_kategori: string,
        slug: string,
        icon_kategori: string,
        is_active: number | string,
        created_by: number | string,
        updated_by: number | string,
        created_at: string,
        updated_at: string,
        user_created: string | null,
        user_updated: string | null
    }[] | null
    totalFiltered: number,
    isLoading: boolean,
    isError: string | unknown,
    getCategory: () => void,
}

export interface LoginInterface {
    user: any,
    isError: null | unknown
    isLoading: boolean
    login: (username: string, password: string) => any
}