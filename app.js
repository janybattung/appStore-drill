const express = require('express');
const morgan = require('morgan');
const playStore = require('./playStore');
const app = express();


app.use(morgan("common"))
const getApps = (req, res)=> {
    const { genre = "", sort } = req.query;
    let results = playStore
    if (sort) {
        if (!['App', 'Rating'].includes(sort)) {
          return res
            .status(400)
            .send('Sort must be one of app or rating');
        }
      }
    if (genre) {
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)) {
            return res
            .status(400)
            .send('Genre must be one of Action, Puzzle, Startegy or Arcade');
    } 
    results = results
        .filter(app => {
          return  app.Genres.toLowerCase().includes(genre.toLowerCase())
        }) //filtered array
    }

        if (sort) {
            results
                .sort((a, b) => {
                return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
            });
            }
res.json(results)
}
app.get('/apps', getApps)


app.listen(8000, () => {
    console.log("listening to port 8000");
});

exports.getApps = getApps
module.exports = app;