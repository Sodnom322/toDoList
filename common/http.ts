

type ResponseType = (url: string, method?: string, body?: null|any, headers?: any) => Promise<any>

export const request: ResponseType = async (url, method = 'GET', body = null, headers = {}) => {
    try {
        if (body) {
            if (!headers['Content-Type']) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
        }
        const response = await fetch(url, { method, credentials: 'include', body, headers })
        const data = await response.json() 
        return data
    } catch (e) {
        throw e
    }
}