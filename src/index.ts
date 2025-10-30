import express from 'express'

const app = express();
const PORT = process.env.PORT 

app.get("/", (_, res) => {
  res.send("🚀 Hello from TypeScript + Docker + EC2!");
});

app.get('/subha',(req,res)=>{
    res.send("Hello from Subha");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
