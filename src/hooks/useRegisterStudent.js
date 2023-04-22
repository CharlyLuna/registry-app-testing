import { useEffect, useState } from "react";

export const useRegisterStudent = () => {
  const [registeredStudents, setRegisteredStudents] = useState([]);

  useEffect(() => {
    localStorage.setItem("alumno", JSON.stringify(registeredStudents));
  }, [registeredStudents]);

  const handleRegisterStudent = (student) => {
    setRegisteredStudents([...registeredStudents, student]);
  };

  return {
    registeredStudents,
    handleRegisterStudent,
  };
};
