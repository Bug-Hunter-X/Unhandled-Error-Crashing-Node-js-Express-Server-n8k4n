const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use async/await and try...catch to handle errors
  (async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const randomNumber = Math.random();
          if (randomNumber < 0.5) {
            reject(new Error('Database connection failed'));
          } else {
            resolve();
          }
        }, 1000);
      });
      res.send('Success!');
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
    }
  })();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});