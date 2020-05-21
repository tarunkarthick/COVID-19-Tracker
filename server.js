const express=require('express')

const app=express()

const cors=require('cors')
const path=require('path')

app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front-end/build')); // serve the static react app
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'front-end','build','index.html'))
    })
  };


  const port=process.env.PORT||3001

  app.listen(port,()=>{
      console.log(`A node js API is listening on port:${port}`)
  })