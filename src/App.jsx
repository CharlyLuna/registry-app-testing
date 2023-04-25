import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Registry } from "./pages/Registry";
import { Attendance } from "./pages/Attendance";

function App() {
  return (
    <BrowserRouter>
      <header
        className='w-full flex justify-between items-center bg-blue-100 sm:px-8
      px-4 py-4 border-b border-b-[#e6ebf4]'
      >
        <Link to='/' className='text-xl text-blue-800 font-bold hover:text-blue-900 hover:underline'>
          Registro de asistencia
        </Link>
        <Link
          to='/attendance'
          className='font-inter font-medium bg-blue-700 hover:bg-blue-800
        text-white px-4 py-2'
        >
          Revisar asistencias
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Registry />} />
          <Route path='/attendance' element={<Attendance />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
