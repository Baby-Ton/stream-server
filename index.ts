import WebSocket from 'ws'
import config from './config'
import { Console } from './utils/console'
import { send } from './utils/helper'
import SubscribeDto from './utils/subscribe.dto'

const ws = new WebSocket(config.WEBSOCKET_ENDPOINT)

// refer to streaming documentation to know how to construct dto
// https://docs.tonconsole.com/tonapi/streaming-api
const params = ['']

const message = SubscribeDto.build({
    id: 1,
    jsonrpc: '2.0',
    method: 'subscribe_account',
    params,
})

ws.on('open', () => {
    Console.green(JSON.stringify(message, null, 2))
    ws.send(JSON.stringify(message))
})

ws.on('message', async (data) => {
    const body = JSON.parse(data.toString())
    Console.yellow(JSON.stringify(body, null, 2))

    if (body.method != message.method) {
        send(body).then(() => console.log('-------finalized-------'))
    }
})
