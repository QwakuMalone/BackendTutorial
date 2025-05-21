const http = require('http')

const server = http.createServer((req,res)=>{
   if (req.url === '/') {
     res.end('Welcome to our HomePage')
   }
   if (req.url === '/about') {
     res.end('Welcome to our AboutPage')
   }
   else{
    res.end(`Oop!
        we cant find the page you're looking for`)
   }
    
   
    
})

server.listen(4000)