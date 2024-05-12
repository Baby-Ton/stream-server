export default class SubscribeDto {
    public id?: number
    public jsonrpc?: string
    public method?: string
    public params?: string[]

    static build(data: Required<SubscribeDto>) {
        const subscribeDto = new SubscribeDto()
        const { id, jsonrpc, method, params } = data

        subscribeDto.id = id
        subscribeDto.jsonrpc = jsonrpc
        subscribeDto.method = method
        subscribeDto.params = params

        return { id, jsonrpc, method, params }
    }
}
