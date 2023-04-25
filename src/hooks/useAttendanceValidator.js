import { useEffect, useState } from "react";
import {
  DOUBLE_ATTENDANCE_GROUPS,
  NO_ATTENDANCE,
  TRIPLE_ATTENDANCE_GRADES,
} from "../utils/constants";

export const useAttendanceValidator = (students) => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    // todo: check if theres a better way to do this (surely there is xd)
    let rawAttendance = [];
    for (const student of students) {
      rawAttendance.push(calculateAttendance(student));
    }
    setAttendances([...attendances, ...rawAttendance]);
  }, [students]);

  const calculateAttendance = (student) => {
    let attendance = 1;
    const grade = student.gradeAndGroup.slice(0, 1);
    const group = student.gradeAndGroup.slice(1);

    if (DOUBLE_ATTENDANCE_GROUPS.includes(group)) {
      attendance = 2;
    }

    if (TRIPLE_ATTENDANCE_GRADES.includes(Number(grade))) {
      attendance = 3;
    }

    if (NO_ATTENDANCE === student.gradeAndGroup) {
      attendance = 0;
    }

    return attendance;
  };

  return {
    attendances,
  };
};
