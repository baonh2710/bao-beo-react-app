import React, { useState } from "react";

const StudentManagement = () => {
  const [classStudents, setClassStudents] = useState([]);
  const [newStudent, setNewStudent] = useState("");
  const [search, setSearch] = useState("");
  const handleAddStudent = () => {
    if (newStudent !== "") {
      setClassStudents((prev) => [...prev, newStudent]);
      setNewStudent("");
    }
  };
  const studentList = classStudents.map((student, index) => (
    <li>
      {student}
      <button
        onClick={() =>
          setClassStudents((prev) => prev.filter((_, i) => i !== index))
        }
      >
        Remove student
      </button>
    </li>
  ));
  const sameNameStudent = classStudents.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase()),
  );
  const searchStudentList = sameNameStudent.map((student) => <li>{student}</li>);

  return (
    <div>
      <h2>Student Management</h2>

      <input
        placeholder="Search student name..."
        value={search}
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      ></input>

      <p></p>

      <input
        type="text"
        placeholder="Enter student name..."
        value={newStudent}
        onChange={(event) => setNewStudent(event.target.value)}
      ></input>
      <button onClick={handleAddStudent}>Add Student</button>

      {search === "" ? <ol>{studentList}</ol> : <ol>{searchStudentList}</ol>}
    </div>
  );
};

export default StudentManagement;
