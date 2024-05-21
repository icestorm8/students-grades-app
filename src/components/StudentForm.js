import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/Context";

export default function StudentForm() {
  const nameRef = useRef();
  const gradeRef = useRef();
  const [msg, showMsg] = useState(false);
  const { addStudent } = useContext(AppContext);
  const sub = (e) => {
    e.preventDefault();
    var name = nameRef.current.value;
    var grade = gradeRef.current.value;
    if (name.length >= 1 && grade !== "") {
      const newStudent = {
        name: name,
        grade: Number(grade),
        id: Date.now(),
      };
      addStudent(newStudent);
      //   alert(`student [${name}, ${grade}] was added!`);
      showMsg(false);
    } else {
      showMsg(true);
    }
  };
  return (
    <div className="d-flex flex-column col-6 justify-content-center">
      <h1>create new student</h1>
      {msg && <h6 className="text-danger">must write a name and a grade!</h6>}
      <form
        onSubmit={(e) => sub(e)}
        className="d-flex gap-2 flex-column col-10"
      >
        <label className="">Name:</label>
        <input
          ref={nameRef}
          type="text"
          placeholder="student name here"
          className="form-control"
        />
        <label className="">Grade:</label>
        <input
          ref={gradeRef}
          type="number"
          min={0}
          max={100}
          placeholder="student grade here (0-100)"
          className="form-control"
        />
        <button className="btn btn-success">submit</button>
      </form>
    </div>
  );
}
