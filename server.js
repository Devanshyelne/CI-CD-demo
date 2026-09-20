import express from 'express';

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/home',async (req, res) => {
  res.send('Hello, World!');
});

app.get('/sum/:a/:b', async (req, res) => {
  const { a, b } = req.params;;
  res.json({ sum: parseInt(a) + parseInt(b) })
});