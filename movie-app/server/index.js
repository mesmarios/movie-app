require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/api/cast/:id', async (req, res) => {
  const url = `https://imdb236.p.rapidapi.com/api/imdb/cast/${req.params.id}/titles`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/search', async (req, res) => {
  const { title } = req.query;
  const url = `https://imdb236.p.rapidapi.com/imdb/search?originalTitle=${encodeURIComponent(title)}&type=movie`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));