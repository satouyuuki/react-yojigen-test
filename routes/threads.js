'use strict';
const express = require('express');
const threads = require('../mock.js').threads;
let router = express.Router();
let dbItemNum = threads.length;
router
  .route('/')
  .get((req, res) => {
    res.json(threads);
   })
  .post((req, res) => { 
    if (
      typeof req.body.title == 'undefined' ||
      typeof req.body.description == 'undefined'
    ) return res.send({ message: '空白です' });
    const userId = 1;
    dbItemNum++;
    const body = {
      id: dbItemNum,
      title: req.body.title,
      description: req.body.description,
      user_id: userId
    }
    threads.push(body);
    res.json(threads.find(thread => thread.id == dbItemNum));
  })

router
  .route('/:id')
  .get((req, res) => {
    const id = Number(req.params.id);
    const thread = threads.find(thread => thread.id === id);
    res.json(thread);
  })
  .put((req, res) => { 
    if (
      typeof req.body.title == 'undefined' ||
      typeof req.body.description == 'undefined'
    ) return res.send({ message: '空白です' });
    const userId = 1;
    const id = Number(req.params.id);
    const index = threads.findIndex(thread => thread.id === id);
    const body = {
      id: id,
      title: req.body.title,
      description: req.body.description,
      user_id: userId
    }
    const updatedThread = threads.splice(index, 1, body);
    res.json(updatedThread[0]);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = threads.findIndex(thread => thread.id === id);
    const deletedThread = threads.splice(index, 1);
    dbItemNum++;
    res.json(deletedThread[0]);
   })

module.exports = router;
