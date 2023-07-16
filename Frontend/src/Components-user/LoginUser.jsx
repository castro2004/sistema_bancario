import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EP from '../Components-user/img-User/EP.jpg'
import '../Components-user/css-User/cssLogin.css';

import iconUser from '../Components-user/img-user/login.jpg';
import '../Components-user/css-User/cssLogin.css';

const LoginUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3007/api/login-user',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Verificar si el inicio de sesión fue exitoso
      if (response) {
        // Almacenar el token en el localStorage
        localStorage.setItem('token', response.data.token);

        // Redirigir a la ruta /menu-user
        navigate('/menu-user');
        console.log(response.data);
      } else {
        // Mostrar un mensaje de error en caso de inicio de sesión fallido
        console.error('Error de inicio de sesión:', response.data);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='body'>
      <img src={EP} style={{marginLeft: '-640px', width: '1090px', height: '1240px', marginTop: '-50px'}}/>
      <div className="container" style={{marginLeft: '500px'}}>
        <div className="backbox">
          <div className="loginMsg">
            <div className="textcontent">
              <p className="title">BIEVENIDO USUARIO</p>
              {/* <p>Este es nuestro proyecto Sistema Bancario</p> */}
              <img className="img-bank" src={iconUser} width={160} height={155} 
              style={{marginLeft:'120px'}} />
            </div>
          </div>
          <div className="signupMsg visibility">
            <div className="textcontent">
              {/* <p className="title">Este es nuestro proyecto Bancario</p> */}
              <button id="switch2">INGRESAR</button>
            </div>
          </div>
        </div>
        <div className="frontbox">
          <div className="login">
            <h2>INICIAR SESION</h2>
            <div className="inputbox">
              <ul/>
              <input type="text" name="email" placeholder="  NOMBRE DE USUARIO" value={username} onChange={handleUsernameChange}/>
              <ul/>
              <input type="password" name="password" placeholder="CONTRASEÑA" value={password} onChange={handlePasswordChange}/>
            </div>
            {/* <p>FORGET PASSWORD?</p> */}
            <button type='button' onClick={handleLogin}>INGRESAR</button>
            <Link to="/login">
            <button type='button' style={{marginRight: '110px'}} >REGRESAR</button>
            </Link>
          </div>
          <div className="signup hide">
            <h2>SIGN UP</h2>
            <div className="inputbox">
              <input type="text" name="fullname" placeholder="  FULLNAME" />
              <input type="text" name="email" placeholder="NOMBRE DE USUARIO" />
              <input type="password" name="password" placeholder="  CONTRASEÑA" />
            </div>import AuthProvider from "./context/AuthContext";
            <button>Hola</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…EyM30.8UAG4EMA8FNNPLsqzQ8hzq3TnnSU3LLC0lg-k-gfaoA