const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const uuid = require('../helper/uuid');

notes.get('/', (req, res) => {
    console.info(`${req.method} request received`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });


notes.post('/', (req, res) => {
  console.info(`${req.method} add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added`);
  } else {
    res.error('Error adding note');
  }
});

notes.delete('/:id', (req, res) => {
  delete('./db/db.js.{id}')
  res.json(`DELETE route`)
});

  module.exports = notes;