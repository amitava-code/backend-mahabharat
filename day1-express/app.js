const express = require('express')

const app = express()

app.use(express.json())


app.post("/create", (req,res)=>{
    console.log(req.body)

    res.send("ho gya data send")
})


app.listen(3000,()=>{
    console.log("app chal raha h")
})