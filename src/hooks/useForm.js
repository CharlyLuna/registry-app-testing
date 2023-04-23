import { useEffect, useState } from "react";
import { useRegisterStudent } from "./useRegisterStudent";
import { VALID_GROUPS, VALID_GRADES } from "../utils/constants";

const initialValue = {
  name: "",
  fLastName: "",
  sLastName: "",
  accountNumber: "",
  gradeAndGroup: "",
};

export const useForm = () => {
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState("");
  const { handleNewStudent } = useRegisterStudent();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      alert(error);
    } else {
      alert("Attendance was registered");
      handleNewStudent(form);
      setForm(initialValue);
    }
  };

  useEffect(() => {
    setError("");
    checkValues({ ...form });
  }, [form]);

  const checkValues = ({ accountNumber, gradeAndGroup }) => {
    // Validate account number are just numbers
    if (isNaN(Number(accountNumber)) || accountNumber.length < 8) {
      setError("The account number is not valid, remember to use only numbers");
      return;
    }
    // Validate grade is a number and group is a string in uppercase
    const grade = gradeAndGroup.slice(0, 1);
    const group = gradeAndGroup.slice(1);

    if (
      isNaN(Number(grade)) ||
      !isNaN(Number(group)) ||
      group !== group.toUpperCase() ||
      !VALID_GRADES.includes(Number(grade)) ||
      !VALID_GROUPS.includes(group)
    ) {
      setError(
        "Grade and group is not valid remember to write first a number and then a capitalized letter (2B)"
      );
      return;
    }
  };

  const handleFieldChange = ({ target }) => {
    const { value } = target;
    setForm({
      ...form,
      [target.name]: value,
    });
  };

  return {
    form,
    handleSubmit,
    handleFieldChange,
  };
};
