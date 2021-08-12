import { bot } from "./helpers/bot"

bot.on('text', (ctx) => ctx.reply(ctx.message.text))
bot.launch()