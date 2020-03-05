/**
 * Client service layer
 * @module service
 * @author Mark Colquhoun <mark.colquhoun@origin.com.au>
 */

import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { getAccessToken } from './token'

/**
 * Create an instance of Axios with global settings to use as an API client. Note
 * that the environment variables are injected by Webpack during the build process.
 */
export const client = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: Number(process.env.TIMEOUT),
})

/**
 * Inject an authorisation header into every API request
 */
client.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${getAccessToken()}`
    return request
})

/**
 * Function that will be called to refresh authorization token
 */
const refreshAuthLogic = failedRequest =>
    axios
        .get(`${window.location.origin}/oauth2/refresh`, {
            withCredentials: true,
            timeout: 20000,
        })
        .then(value => {
            failedRequest.response.config.headers[
                'Authorization'
            ] = `Bearer ${getAccessToken()}`
            return Promise.resolve()
        })

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(client, refreshAuthLogic)

export const getErrorMessage = error => {
    var message = error.message

    if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
    ) {
        message = error.response.data.errorMessage
    }

    return message
}
