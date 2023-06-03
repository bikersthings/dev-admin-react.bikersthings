export const api = (
    method?: string,
    endpoint?: string,
    data?: string | any,
) => {
    const baseUrl: string = import.meta.env.VITE_BASE_URL
    return (
        fetch(`${baseUrl}/${endpoint}/`, {
            method,
            mode: 'cors',
            headers: {
                authorization: 'Bearer 9|tjHDK3wEiX9FN4ibOEBTcSCVqnvAtsJHRu5XtUgl',
                'Content-Type': 'application/json',
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
    )
}