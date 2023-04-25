import { useAttendanceValidator } from "../hooks/useAttendanceValidator";
import { useRegisterStudent } from "../hooks/useRegisterStudent";

export const Attendance = () => {
  const { registeredStudents } = useRegisterStudent();
  const { attendances } = useAttendanceValidator(registeredStudents);

  return (
    <div>
      <h1 className='text-xl text-center font-bold mb-2'>
        Alumnos registrados
      </h1>
      <hr />
      <table className='table-auto m-auto w-[80%] justify-center self-center items-center'>
        <thead>
          <tr className='flex justify-center mt-2 mb-2'>
            <th className='w-full mx-2 text-sm md:text-base'>Nombre</th>
            <th className='w-full mx-2 text-sm md:text-base'>
              Apellido paterno
            </th>
            <th className='w-full mx-2 text-sm md:text-base'>
              Apellido materno
            </th>
            <th className='w-full mx-2 text-sm md:text-base'>Grado y grupo</th>
            <th className='w-full mx-2 text-sm md:text-base'>Asistencias</th>
          </tr>
        </thead>
        <tbody>
          {registeredStudents.map((student, index) => (
            <tr
              key={`${student.accountNumber}_${index}`}
              className='flex justify-center mt-2 mb-2'
            >
              <td className='w-full text-center mx-2 text-xs md:text-base'>
                {student.name}
              </td>
              <td className='w-full text-center mx-2 text-xs md:text-base'>
                {student.fLastName}
              </td>
              <td className='w-full text-center mx-2 text-xs md:text-base'>
                {student.sLastName}
              </td>
              <td className='w-full text-center mx-2 text-xs md:text-base'>
                {student.gradeAndGroup}
              </td>
              <td className='w-full text-center mx-2 text-xs md:text-base'>
                {attendances[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
