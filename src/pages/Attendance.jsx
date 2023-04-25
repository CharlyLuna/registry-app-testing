import { useAttendanceValidator } from "../hooks/useAttendanceValidator";
import { useRegisterStudent } from "../hooks/useRegisterStudent";

export const Attendance = () => {
  const { registeredStudents } = useRegisterStudent();
  const { attendances } = useAttendanceValidator(registeredStudents);

  return (
    <div>
      <h1 className='text-lg text-center font-bold mb-2'>
        Alumnos registrados
      </h1>
      <hr />
      <table className='table-auto'>
        <thead>
          <tr className='flex gap-10 justify-between mt-2 mb-2'>
            <th>Nombre</th>
            <th>Apellido paterno</th>
            <th>Apellido materno</th>
            <th>Grado y grupo</th>
            <th>Asistencias</th>
          </tr>
        </thead>
        <tbody>
          {registeredStudents.map((student, index) => (
            <tr
              key={`${student.accountNumber}_${index}`}
              className='flex mt-2 mb-2'
            >
              <td className='w-8 m-auto'>{student.name}</td>
              <td className='w-8 m-auto'>{student.fLastName}</td>
              <td className='w-8 m-auto'>{student.sLastName}</td>
              <td className='w-8 m-auto'>{student.gradeAndGroup}</td>
              <td className='w-8 m-auto'>{attendances[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
