import { useState } from "react";
import "./App.css";
import { FormField } from "./components/FormField";

function App() {
  const [form, setForm] = useState({
    name: "",
    fLastName: "",
    sLastName: "",
    accountNumber: "",
    gradeAndGroup: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello from form");
  };

  const handleFieldChange = ({ target }) => {
    const { value } = target;
    setForm({
      ...form,
      [target.name]: value,
    });
  };

  console.log(form);

  return (
    <div className='bg-gray-400 p-4'>
      <h1 className='text-white text-sm'>Registro de asistencias</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <FormField
          labelName='Nombre'
          type='text'
          id='name'
          name='name'
          placeholder='Nombre del alumno'
          handleChange={handleFieldChange}
        />
        <FormField
          labelName='Primer apellido'
          type='text'
          id='fLastName'
          name='fLastName'
          placeholder='Primer apellido'
          handleChange={handleFieldChange}
        />
        <FormField
          labelName='Segundo apellido'
          type='text'
          id='sLastName'
          name='sLastName'
          placeholder='Segundo apellido'
          handleChange={handleFieldChange}
        />
        <FormField
          labelName='Número de cuenta'
          type='text'
          id='sLastName'
          name='sLastName'
          placeholder='Segundo apellido'
          handleChange={handleFieldChange}
        />
        <button className='bg-black' type='submit'></button>
      </form>
    </div>
  );
}

export default App;
