const express = require("express")

const app = express()


app.listen(2005, ()=>{
  console.log("Server is Running At localhost:2005")
})

app.get('/', (req, res)=>{
  res.send("Hii Anjiiii This is Coooollllll")
  // res.status(200)
})