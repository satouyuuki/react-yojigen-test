'use strict';
const express = require('express');
const comments = require('../mock.js').comments;
let router = express.Router();
let dbItemNum = comments.length;
router
  .route('/')
  .post((req, res) => {
    if (
      typeof req.body.comment == 'undefined'
    ) return res.send({ message: '空白です' });
    const userId = 1;
    const threadId = 1;
    dbItemNum++;
    const body = {
      id: dbItemNum,
      comment: req.body.comment,
      thread_id: threadId,
      user_id: userId
    }
    comments.push(body);
    const result = comments.find(item => item.id == dbItemNum)
    res.json(result);
  })

router
  .route('/:id')
  .put((req, res) => {
    if (
      typeof req.body.comment == 'undefined'
    ) return res.send({ message: '空白です' });
    const userId = 1;
    const threadId = 1;
    const id = Number(req.params.id);
    const index = comments.findIndex(item => item.id === id);
    const body = {
      id: id,
      comment: req.body.comment,
      thread_id: threadId,
      user_id: userId,
    }
    const result = comments.splice(index, 1, body);
    res.json(result[0]);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = comments.findIndex(item => item.id === id);
    const result = comments.splice(index, 1);
    dbItemNum++;
    res.json(result[0]);
  })

module.exports = router;
