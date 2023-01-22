import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

const Login = React.lazy(()=>import('./Pages/Login'));

function App() {
  return (
    <Suspense fallback="Cargando...">
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
