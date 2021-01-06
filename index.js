import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const PORT = 8005

app.use(cors('*'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    console.log("[TEST]")
    res.send('Welcome on your Node Server')
})

app.listen(PORT, () => { console.log(`Server is Running on address: http://localhost:${PORT}`)})