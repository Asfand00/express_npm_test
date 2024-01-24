const express = require('express');
const app = express();

// Route handler for the root path (/)
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route handler for the /about path
app.get('/about', (req, res) => {
  res.send('About page');
});

// 404 error handler for undefined routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




