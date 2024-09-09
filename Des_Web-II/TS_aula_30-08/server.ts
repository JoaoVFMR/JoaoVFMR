// npm i express
// npm i -D @types/nodes @types/express

import express from "express"
import { Request, Response } from "express"

const app = express()
const port = 3000

app.get('/',(req: Request, res: Response)=>{
    res.send('Olá!')    
})

app.get('/tabuada/:numero',(req: Request, res: Response)=>{
    const numero = Number(req.params.numero)
    res.send(`${numero.toFixed(2)}`)
})

app.listen(port, ()=>{
    console.log(`Server rodando em http://localhost:${port}`)
})