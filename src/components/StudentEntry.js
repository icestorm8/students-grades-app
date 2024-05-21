import React, { useContext, useState } from "react";
import { AppContext } from "../context/Context";

export default function StudentEntry({ student }) {
  const { removeStudent } = useContext(AppContext);
  const [hidden, setHidden] = useState(true);
  return (
    <div
      className="input-group rounded-pill"
      style={{ width: "49%", boxSizing: "border-box" }}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <span className="btn btn-success overflow-hidden col-4 ">
        {student.name}
      </span>
      <span className="form-control text-center col-8">{student.grade}</span>

      <span
        className="text-danger btn btn-link text-decoration-none "
        style={hidden ? { opacity: 0 } : { opacity: 1 }}
        onClick={() => removeStudent(student.id)}
      >
        X
      </span>
    </div>
  );
}
