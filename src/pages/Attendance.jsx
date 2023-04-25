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
      <table className='table-auto m-auto w-1/2 justify-center self-center items-center'>
        <thead>
          <tr className='flex gap-10 justify-center mt-2 mb-2'>
            <th className='w-full m-auto'>Nombre</th>
            <th className='w-full m-auto'>Apellido paterno</th>
            <th className='w-full m-auto'>Apellido materno</th>
            <th className='w-full m-auto'>Grado y grupo</th>
            <th className='w-full m-auto'>Asistencias</th>
          </tr>
        </thead>
        <tbody>
          {registeredStudents.map((student, index) => (
            <tr
              key={`${student.accountNumber}_${index}`}
              className='flex justify-center mt-2 mb-2 gap-10'
            >
              <td className='w-full text-center'>{student.name}</td>
              <td className='w-full text-center'>{student.fLastName}</td>
              <td className='w-full text-center'>{student.sLastName}</td>
              <td className='w-full text-center'>{student.gradeAndGroup}</td>
              <td className='w-full text-center'>{attendances[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
