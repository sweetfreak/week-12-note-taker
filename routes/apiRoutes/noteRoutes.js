const router = require('express').Router();
const { v4: uuidv4} = require('uuid');
const {
    createNewNote,
    validateNote,
    findByTitle,
    deleteByID
} = require('../../lib/notes');
const { notesArray } = require('../../db/db');

router.get('/notes', (req, res) => {
    
    let results = notesArray;
    res.json(results);
  });

router.delete('/notes/:id', (req, res) => {
    let result = deleteByID(req.params.id, notesArray);

    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
     
});


router.get('/notes/:title', (req, res) => {
    const result = findByTitle(req.params.title, notesArray);
    
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});


router.post('/notes', (req, res) => {
    console.info(req.body)

    newID = uuidv4();

    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted (must be a string, with value');
    } else {
        const note = createNewNote(req.body, notesArray, newID);

        res.json(note);
    }
})


module.exports = router;