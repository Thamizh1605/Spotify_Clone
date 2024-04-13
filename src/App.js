import './App.css';
import Login from './Login/Login';
import {Routes, Route } from 'react-router-dom';
import Signup from './sign-up/Signup';
import Loginform from './Login_form/Loginform';

function App() {
  return (
    <div>
    <Routes>
      < Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Loginform/>}/>
    </Routes>
    </div>
  );
}

export default App;
