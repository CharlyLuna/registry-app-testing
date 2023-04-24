import { useRegisterStudent } from "../hooks/useRegisterStudent";

export const Attendance = () => {
  const { registeredStudents } = useRegisterStudent();
  return (
    <div>
      <h1 className='text-lg font-semibold mb-2'>Alumnos registrados</h1>
      <hr />
      <ul className='mt-4'>
        {registeredStudents.map((student, index) => (
          <li
            key={`${student.accountNumber}_${index}`}
            className='flex gap-4 mt-2'
          >
            <p>
              {student.name} {student.fLastName}
            </p>
            <p>{student.gradeAndGroup}</p>
            <p>Asistencias: {0}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
