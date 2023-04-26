const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
      headers: {
        'x-rapidapi-key': '1b0f556e19msha7cad6d03961febp15b538jsn540391f501f4',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the joke' });
  }
});

module.exports = router;