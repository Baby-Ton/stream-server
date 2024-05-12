import dotenv from 'dotenv'
dotenv.config()

let {
    WEBHOOK_URL,
    WEBHOOK_SECRET,
    WEBHOOK_MAX_RETRIES,
    WEBHOOK_BACKOFF,
    WEBSOCKET_ENDPOINT,
} = process.env

WEBHOOK_MAX_RETRIES = WEBHOOK_MAX_RETRIES || '3'
WEBHOOK_BACKOFF = WEBHOOK_BACKOFF || '300' // in milliseconds - 0.3s
WEBHOOK_SECRET = WEBHOOK_SECRET || 'SUPER_SECRET_STUFF'

WEBSOCKET_ENDPOINT =
    WEBSOCKET_ENDPOINT || 'wss://testnet.tonapi.io/v2/websocket' // wss://tonapi.io/v2/websocket - for mainnet

WEBHOOK_URL = WEBHOOK_URL || 'http://localhost:3000/stream' // endpoint request will be sent to

export default {
    WEBHOOK_URL,
    WEBHOOK_SECRET,
    WEBHOOK_MAX_RETRIES,
    WEBSOCKET_ENDPOINT,
    WEBHOOK_BACKOFF,
}
