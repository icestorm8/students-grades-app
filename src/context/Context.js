import { createContext, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);
// this will wrap the whole app and provide global storage for all its components
export default function ContextProvider({ children }) {
  const [students, setStudents] = useState([]);

  const resetAll = () => {
    if (
      window.confirm(
        "this will delete all saved data. do you wish to continue?"
      )
    ) {
      localStorage.clear();
      localStorage.setItem("students", JSON.stringify([]));
      setStudents([]);
    }
  };
  const addStudent = (newStudent) => {
    localStorage.setItem("students", JSON.stringify([...students, newStudent]));
    setStudents([...students, newStudent]);
  };
  const removeStudent = (id) => {
    if (window.confirm("are you sure?")) {
      var filtered = students.filter((student) => {
        return student.id !== id;
      });
      localStorage.setItem("students", JSON.stringify(filtered));
      setStudents(filtered);
    }
  };
  const globalVal = {
    students,
    addStudent,
    removeStudent,
    resetAll,
  };
  // happens before rendering
  useLayoutEffect(() => {
    if (localStorage.getItem("students")) {
      setStudents(JSON.parse(localStorage.getItem("students")));
    }
  }, []);
  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}
