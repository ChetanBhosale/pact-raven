import express from 'express'
import secrets from '@repo/secrets/backend'


const app = express()
const PORT = secrets.PORT || 4000

app.listen(PORT,() => {
    console.log(`Server started on PORT ${PORT}`)
})

// http://localhost:3000/api/auth/callback/google