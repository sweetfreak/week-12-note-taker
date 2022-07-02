const fs = require('fs');
const path = require('path');


function createNewNote(body, notesArray, newID) {
    const newNote = body;
    newNote.id = newID;
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

function deleteByID(thisid, notesArray) {

  //take the notes array, use map function
  //if thisid is equal to that specific note's id
  for (let i = 0; i < notesArray.length; i++) {
    
    if (thisid === notesArray[i].id) {
        notesArray.splice(i, 1);
      
        

      fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( {notesArray} , null, 2)
      );
    }
  };

 return notesArray;
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
    findByTitle,
    deleteByID
  }