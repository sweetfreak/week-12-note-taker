const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify( {notesArray} , null, 2)
    );
    return newNote;
  }

//try this
function findByTitle(title, notesArray) {
  const result = notesArray.filter(note => note.title ===title)[0];
  return result;
}



  function validateNote(note, notesArray) {
        if (!note.title) {
            return false;
        }
        //if there's already an item in the array with that title, say there is already a title
        // if (note.title === notesArray.filter(entry => entry.title)) {
        //   return false;
        // }
        if (!note.text) {
            return false;
        }

        return true;
  }

  module.exports = {
    createNewNote,
    validateNote,
    findByTitle
  }