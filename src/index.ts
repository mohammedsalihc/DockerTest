import express from 'express'

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (_, res) => {
  res.send("🚀 Hello from TypeScript + Docker + EC2!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
