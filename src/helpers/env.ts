import { resolve } from "path"
import { config } from "dotenv"

config({ path: resolve(__dirname, "../../config/.env") })

export const BOT_TOKEN: string = process.env["BOT_TOKEN"] || ""