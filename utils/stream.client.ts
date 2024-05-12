import { AxiosError, AxiosResponse } from 'axios'
import { HttpClient } from './axios.http.client'
import config from '../config'
import { Console } from './console'

export default class StreamClient extends HttpClient {
    constructor() {
        super({
            baseURL: config.WEBHOOK_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    _handleResponse({ data, status: statusCode }: AxiosResponse<any>) {
        let response = { error: true, statusCode, data }

        if (`${statusCode}`.startsWith('20')) {
            response = { ...response, error: false }
        }

        Console.green(JSON.stringify(response, null, 2))
        return response
    }

    _handleError(error: AxiosError<any>) {
        const response = {
            error: true,
            statusCode: error.response?.status,
            data: error.response?.data,
        }

        Console.red(JSON.stringify(response, null, 2))
        return response
    }

    getInstance() {
        return this.instance
    }

    getInstanceWithoutAuth() {
        return this.instanceWithoutAuth
    }
}
