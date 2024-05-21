import React from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

export default function Students() {
  return (
    <div className="container vh-100 overflow-hidden">
      <h1 className="lead bg-success p-2 position-absolute start-0  mt-4 rounded-end text-light">
        Students
      </h1>
      <div className="d-flex flex-row" style={{ height: "90%" }}>
        <StudentForm />
        <StudentList />
      </div>
    </div>
  );
}
