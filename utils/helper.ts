import crypto from 'crypto'
import config from '../config'
import StreamClient from './stream.client'
import { Console } from './console'

const client = new StreamClient().getInstance()
const url = config.WEBHOOK_URL

export async function send(
    data: Object,
    retries = Number(config.WEBHOOK_MAX_RETRIES),
    backoff = Number(config.WEBHOOK_BACKOFF)
) {
    const signature = crypto
        .createHmac('sha256', config.WEBHOOK_SECRET)
        .update(JSON.stringify(data))
        .digest('hex')

    const { error } = await client.post(url, data, {
        headers: { 'x-stream-signature': signature },
    })

    if (!error) return
    if (retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, backoff))
        return send(data, retries - 1, backoff * 2)
    } else {
        Console.red(`Unable to send request to: ${url}`)
    }
}
