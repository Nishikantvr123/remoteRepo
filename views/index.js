const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (optional, for CSS/images)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Dynamic user route
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.render('user', { name: userName });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
