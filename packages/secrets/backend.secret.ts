import dotenv from 'dotenv'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// Resolve the repo-root .env relative to THIS file so it loads no matter
// which package/cwd the process (e.g. the Prisma CLI) is started from.
const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config({
    path: resolve(__dirname, '../../.env')
})

const secret = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_REDIRECT_PATH: process.env.GOOGLE_CLIENT_REDIRECT_PATH
}

export default secret
