import { useState } from "react";
import { FormField } from "./components/FormField";
import { useFormValidate } from "./hooks/useFormValidate";
import { useRegisterStudent } from "./hooks/useRegisterStudent";

const initialValue = {
  name: "",
  fLastName: "",
  sLastName: "",
  accountNumber: "",
  gradeAndGroup: "",
};

function App() {
  const [form, setForm] = useState(initialValue);

  const { error, success } = useFormValidate(form);
  const { handleNewStudent } = useRegisterStudent();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!success) {
      alert(error);
    } else {
      alert("all good");
      handleNewStudent(form);
      setForm(initialValue);
    }
  };

  const handleFieldChange = ({ target }) => {
    const { value } = target;
    setForm({
      ...form,
      [target.name]: value,
    });
  };

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
