import React, { useContext, useEffect, useState } from "react";
import StudentEntry from "./StudentEntry";
import { AppContext } from "../context/Context";

export default function StudentList() {
  const [isEmpty, setIsEmpty] = useState(true);
  const { students, resetAll } = useContext(AppContext);
  useEffect(() => {
    if (students.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [students.length]);
  return (
    <div
      className="d-flex flex-column col-6 m-2 justify-content-center border p-1"
      style={{
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* <div> */}
      {isEmpty && <h1 className="text-center lead">no students entered yet</h1>}
      <div
        className="d-flex flex-wrap gap-1 "
        style={{ overflowY: "auto", overflowX: "hidden", width: "100%" }}
      >
        {students.map((student) => {
          return <StudentEntry key={student.id} student={student} />;
        })}
      </div>
      {/* </div> */}
      <button
        className="btn btn-danger position-absolute rounded-pill end-0 bottom-0 m-2 p-2"
        onClick={resetAll}
      >
        clean all
      </button>
    </div>
  );
}
