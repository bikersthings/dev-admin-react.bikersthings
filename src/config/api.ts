export const api = (
    method?: string,
    endpoint?: string,
    data?: Record<string, unknown>
): Promise<Response> => {

    const baseUrl: string = import.meta.env.VITE_BASE_URL

    return fetch(`${baseUrl}/${endpoint}`, {
        method,
        headers: {
            Authorization: "Bearer 10|kR4BOdULifoNrE7UEg9KPiFVlXlEQ1TAZPYxCh3z",

        },
        redirect: 'follow',
        body: data && JSON.stringify(data)
    })

}