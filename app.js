const express = require('express');
const jokeRouter = require('./routes/joke');

const app = express();

app.use('/joke', jokeRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled rejection', error);
    process.exit(1);
  });