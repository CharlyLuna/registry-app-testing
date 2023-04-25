// Variables
export const VALID_GROUPS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
];
export const VALID_GRADES = [1, 2, 3, 4, 5, 6, 7, 8];
export const DOUBLE_ATTENDANCE_GROUPS = ["A", "B", "C"];
export const TRIPLE_ATTENDANCE_GRADES = [4, 5, 6, 7, 8];
export const NO_ATTENDANCE = "7G";
// Functions
export const checkIfStudentExists = (accountNumber, allStudents) => {
  for (let student of allStudents) {
    if (accountNumber === student.accountNumber) return true;
  }
  return false;
};
