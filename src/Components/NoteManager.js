import { useState } from "react";

function NoteManager() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  function handleAddNote() {
    if (newNote !== "") {
      setNotes((prev) => [...prev, newNote]);
      setNewNote("");
    }
  }

  function handleDeleteNote(indexToDelete) {
    const temp = notes.filter((_, index) => index !== indexToDelete);
    setNotes(temp);
  }

  return (
    <div>
      <h2>Note Manager</h2>
      <input
        placeholder="Add a new note..."
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      ></input>
      <button onClick={handleAddNote}>Add Note</button>
      {notes.map((note, index) => (
        <div>
          <p>
            Note {index + 1}: {note}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default NoteManager;
