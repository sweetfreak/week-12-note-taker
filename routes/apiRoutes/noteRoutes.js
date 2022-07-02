const router = require('express').Router();
const {
    createNewNote,
    validateNote,
    findByTitle
} = require('../../lib/notes');
const { notesArray } = require('../../db/db');

router.get('/notes', (req, res) => {
    
    let results = notesArray;
    res.json(results);
  });


router.get('/notes/:title', (req, res) => {
    const result = findByTitle(req.params.title, notesArray);
    console.log(req.params.title);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});


router.post('/notes', (req, res) => {
    console.info(req.body)


    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted (must be a string, with value');
    } else {
        const note = createNewNote(req.body, notesArray);

        res.json(note);
    }
})


module.exports = router;