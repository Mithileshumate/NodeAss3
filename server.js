const express = require('express');
const app = express();
const port = 5000;

const middleware1 =((req,res,next)=>{
    console.log(`I am middleware 1 in assignment3`);
    next();
});

const middleware2 =((req,res,next)=>{
    console.log(`I am middleware 2 in assignment3`);
    next();
});

app.use(middleware2);

app.get('/page1',middleware1,(req,res)=>{
    console.log(`Page1`);
    res.end();
})

app.get('/page2',(req,res)=>{
    console.log(`Page2`);
    res.end();
})

app.get('/page3',middleware1,(req,res)=>{
    console.log(`Page3`);
    res.end();
})

app.get('/page4',(req,res)=>{
    console.log(`Page4`);
    res.end();
})

app.get('/page5',(req,res)=>{
    console.log(`Page5`);
    res.end();
})

app.get('/page6',(req,res)=>{
    console.log(`Page6`);
    res.end();
})

app.listen(port,()=>{
    console.log(`Connected to the port ${port}`);
})