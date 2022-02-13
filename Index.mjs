import { Client, Command } from "yuuko";
import path from "path";
import 'dotenv/config'
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* function importAll(dir) {
    return importAll(imports.join(import.meta.url, dir));
  }
importAll("./events")*/

const client = new Client({
    token: process.env.token,
    prefix: process.env.prefix,
    ignoreBots: true,
})

client.editStatus('dnd'); // edits bot status


client.on('error', (err) => {
    console.error(err);
});

console.log(`The dir name is ${__dirname}`);

/* (async function() {
await importAll("./events")
await client.connect();
})().catch(log.error) */

//var event = path.join(__filename, '../events');
var commands = path.join(__filename, '../commands/mainC.mjs');
console.log(commands)



client
    .addDir(path.join(__filename, '../events'))
    .addDir(path.join(__filename, '../commands'))
    .connect();