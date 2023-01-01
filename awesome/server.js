const express = require ('express')
const path = require('path')
const app = express()

app.get('/',(req,resp)=>{

    resp.sendFile('public/index.html',{root:__dirname})
    
    
});

app.use(express.static(path.join(__dirname,'public')))

app.listen(8000,'0.0.0.0',()=>{
    console.log('Server started at port 8000')
})
