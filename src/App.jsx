import { FormField } from "./components/FormField";
import { useForm } from "./hooks/useForm";

function App() {
  const { form, handleSubmit, handleFieldChange } = useForm();

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className=' bg-gray-400 p-4'>
        <h1 className='text-white text-sm'>Registro de asistencias</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <FormField
            labelName='Nombre'
            type='text'
            id='name'
            name='name'
            value={form.name}
            placeholder='Nombre del alumno'
            maxLength={20}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Primer apellido'
            type='text'
            id='fLastName'
            name='fLastName'
            value={form.fLastName}
            placeholder='Primer apellido'
            maxLength={11}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Segundo apellido'
            type='text'
            id='sLastName'
            name='sLastName'
            value={form.sLastName}
            placeholder='Segundo apellido'
            maxLength={11}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Número de cuenta'
            type='text'
            id='accountNumber'
            name='accountNumber'
            value={form.accountNumber}
            placeholder='Número de cuenta'
            maxLength={8}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Grado y grupo'
            type='text'
            id='gradeAndGroup'
            name='gradeAndGroup'
            value={form.gradeAndGroup}
            placeholder='Grado y grupo'
            maxLength={2}
            handleChange={handleFieldChange}
          />
          <button className='bg-black p-2 text-white' type='submit'>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
