import { useEffect, useReducer } from "react";
import { studentReducer } from "../utils/studentReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("alumnos")) ?? [];
};

export const useRegisterStudent = () => {
  const [registeredStudents, dispatch] = useReducer(studentReducer, [], init);

  const handleNewStudent = (student) => {
    const action = {
      type: "Add Student",
      payload: student,
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("alumnos", JSON.stringify(registeredStudents));
  }, [registeredStudents]);

  return {
    registeredStudents,
    handleNewStudent,
  };
};
