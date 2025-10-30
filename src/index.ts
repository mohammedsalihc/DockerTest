import express from 'express'

const app = express();
const PORT = process.env.PORT 

app.get("/", (_, res) => {
  res.send("🚀 Hello from TypeScript + Docker + EC2!");
});

app.get('/subha',(req,res)=>{
    res.send("Hello from Subha");
})

app.get('/salih',(req,res)=>{
    res.send("hello from  salih")
})

app.get('/amal',(req,res)=>{
    res.send("hello from amal")
})

app.get('/akhil',(req,res)=>{
    res.send('akhil')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
