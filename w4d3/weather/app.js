const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const searchHistory = []


app.post('/history', (req, res) => {
  searchHistory.push(req.body.city)
  console.log(searchHistory)
  // res.send('ok')
  res.json(searchHistory)
})

app.get('/history', (req, res) => {
  let HTMLString = "<section>"
  for (const city of searchHistory) {
    HTMLString += `<p>${city}</p>`
  }
  HTMLString += "</section>"

  res.send(HTMLString)
})

module.exports = app;
