/* eslint-disable no-console */
const Reset = '\x1b[0m'
const FgRed = '\x1b[31m'
const FgGreen = '\x1b[32m'
const FgYellow = '\x1b[33m'

export class Console {
    private static say(color: string, msg: string): void {
        console.log(color + msg + Reset)
    }

    static yellow(msg: string): void {
        Console.say(FgYellow, msg)
    }

    static green(msg: string): void {
        Console.say(FgGreen, msg)
    }

    static red(msg: string): void {
        Console.say(FgRed, msg)
    }
}
