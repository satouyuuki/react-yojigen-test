'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const DB = require('./mock.js');
const threads = require('./routes/threads');
// const comments = require('./routes/comments');
// const users = require('./routes/users');
// const likes = require('./routes/likes');

// module.exports = {
//   item: item
// }


// middleware  
app.use(express.json());
app.use('/threads', threads);
// app.use('/comments', comments);
// app.use('/users', users);
// app.use('/likes', likes);
// listen port
app.listen(port, () => {
  console.log(`Start server port: ${port}`);
});

app
  .route('/comments')
  .get((req, res) => {})
  .post((req, res) => { })

app
  .route('/comments/:id')
  .put((req, res) => {})
  .delete((req, res) => { })

app
  .route('/likes')
  .post((req, res) => { })

app
  .route('/likes/:id')
  .delete((req, res) => { })

app
  .route('/users')
  .get((req, res) => { })
  .post((req, res) => { })

app
  .route('/login')
  .post((req, res) => { })

