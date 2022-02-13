import { Client } from "yuuko";
import path, { dirname } from "path";
import 'dotenv/config'
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = new Client({
    token: process.env.token,
    prefix: process.env.prefix,
    ignoreBots: true,
})

client
    console.log(__dirname)
    .connect();