import { FormField } from "./components/FormField";
import { useForm } from "./hooks/useForm";

function App() {
  const { form, handleSubmit, handleFieldChange } = useForm();

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='bg-gradient-to-r from-neutral-400 to-neutral-500 w-96 p-10'>
        <h1 className='font-bold text-white text-xl text-center pb-7'>Registro de asistencias</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <FormField
            labelName='Nombre'
            type='text'
            id='name'
            name='name'
            value={form.name}
            placeholder='Elena'
            maxLength={20}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Primer apellido'
            type='text'
            id='fLastName'
            name='fLastName'
            value={form.fLastName}
            placeholder='González'
            maxLength={11}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Segundo apellido'
            type='text'
            id='sLastName'
            name='sLastName'
            value={form.sLastName}
            placeholder='Pérez'
            maxLength={11}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Número de cuenta'
            type='text'
            id='accountNumber'
            name='accountNumber'
            value={form.accountNumber}
            placeholder='20201231'
            maxLength={8}
            handleChange={handleFieldChange}
          />
          <FormField
            labelName='Grado y grupo'
            type='text'
            id='gradeAndGroup'
            name='gradeAndGroup'
            value={form.gradeAndGroup}
            placeholder='2B'
            maxLength={2}
            handleChange={handleFieldChange}
          />
          <button className='bg-blue-700 p-4 mt-6 text-white font-bold hover:bg-blue-800' type='submit'>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
