export const api = (
    method?: string,
    endpoint?: string,
    data?: string | any,
) => {
    const baseUrl: string = import.meta.env.VITE_BASE_URL

    return (
        fetch(`${baseUrl}/${endpoint}`, {
            method,
            headers: {
                Authorization: "Bearer 10|kR4BOdULifoNrE7UEg9KPiFVlXlEQ1TAZPYxCh3z",

            },
            redirect: 'follow',
            body: JSON.stringify(data)
        })
    )
}