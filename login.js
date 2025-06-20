// login.js
const express = require('express');
const app = express();

app.use(express.json());  // Needed to parse JSON body payloads

app.post('/login', (req, res) => {
  // Intentional defect: uses unsanitized template query
  const sql = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
  // In a real app you'd connect to a database and run this query
  console.log('Running query:', sql);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
