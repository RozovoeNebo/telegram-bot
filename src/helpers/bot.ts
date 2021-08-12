import { Telegraf } from "telegraf"
import { BOT_TOKEN } from "./env"

export const bot = new Telegraf(BOT_TOKEN)