'use strict';
const express = require('express');
const likes = require('../mock.js').likes;
let router = express.Router();
let dbItemNum = likes.length;
router
  .route('/')
  .post((req, res) => {
    if (
      typeof req.body.threadId == 'undefined'
    ) return res.send({ message: '記事が不明です' });
    const userId = 1;
    dbItemNum++;
    const body = {
      id: dbItemNum,
      thread_id: req.body.threadId,
      user_id: userId
    }
    likes.push(body);
    const result = likes.find(item => item.id == dbItemNum)
    res.json(result);
  })

router
  .route('/:id')
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = likes.findIndex(item => item.id === id);
    const result = likes.splice(index, 1);
    dbItemNum++;
    res.json(result[0]);
  })

module.exports = router;
