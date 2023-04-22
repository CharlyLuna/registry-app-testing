import { useEffect, useState } from "react";

export const useFormValidate = (form) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const { accountNumber, gradeAndGroup } = form;

    checkValues(accountNumber, gradeAndGroup);
  }, [form]);

  const checkValues = (accountNumber, gradeAndGroup) => {
    // Validate account number are just numbers
    if (isNaN(Number(accountNumber)) || accountNumber.length < 8) {
      setError("Account number is wrong, remember to use only numbers");
      setSuccess(false);
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
      setSuccess(false);
      return;
    }

    setSuccess(true);
  };

  return {
    error,
    success,
  };
};
