export default function useToken() {
    return {
        setToken: (key: string) => {
            console.log(key)
            localStorage.setItem('key', key)
        },
        getToken: () => {
            return localStorage.getItem('key')
        }
    }
}