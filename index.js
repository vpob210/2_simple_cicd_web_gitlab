const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! gitlab cicd 88 final test');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
