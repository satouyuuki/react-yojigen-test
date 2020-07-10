'use strict';
const express = require('express');
const users = require('../mock.js').users;
let router = express.Router();
let dbItemNum = users.length;
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

module.exports = router;
