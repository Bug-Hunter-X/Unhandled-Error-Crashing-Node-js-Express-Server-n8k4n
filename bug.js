const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate an error (e.g., a database error)
      const error = new Error('Database connection failed');
      // Throwing the error will crash the application if not handled
      throw error; 
    } else {
      res.send('Success!');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});