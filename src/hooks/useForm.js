import { useEffect, useState } from "react";
import { useRegisterStudent } from "./useRegisterStudent";

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
      alert("all good");
      handleNewStudent(form);
      setForm(initialValue);
    }
  };

  useEffect(() => {
    checkValues({ ...form });
  }, [form]);

  const checkValues = ({ accountNumber, gradeAndGroup }) => {
    // Validate account number are just numbers
    if (isNaN(Number(accountNumber)) || accountNumber.length < 8) {
      setError("Account number is wrong, remember to use only numbers");
      return;
    }
    // Validate grade is a number and group is a string in uppercase
    const grade = gradeAndGroup.slice(0, 1);
    const group = gradeAndGroup.slice(1);

    if (
      isNaN(Number(grade)) ||
      !isNaN(Number(group)) ||
      group !== group.toUpperCase()
    ) {
      setError(
        "Grade and group is wrong remember to write first a number and then a capitalized letter (2B)"
      );
      return;
    }
    setError("");
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
