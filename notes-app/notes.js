const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = _loadNotes();

  const duplicate = notes.find((note) => note.title === title);

  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });
    _saveNotes(notes);
    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.red.inverse("Note title already exists"));
  }
};

const removeNote = (title) => {
  const notes = _loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    _saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const listNotes = () => {
  const notes = _loadNotes();
  console.log(chalk.inverse("Your notes"));
  if(notes){
    console.log(chalk.green('Note list is empty'));
  }
  notes.forEach((note) => {
    console.log(`Title: ${note.title}`);
  });
};

const readNote = (title) => {
  const notes = _loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log("note not found");
  }
};

const _saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const _loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
