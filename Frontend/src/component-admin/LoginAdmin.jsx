import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import iconUser from '../Components-user/img-user/login.jpg';
import '../Components-user/css-User/cssLogin.css';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [user, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3007/api/login-admin',
        { user, password },
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

        // Redirigir a la ruta /menu-admin
        navigate('/menu-admin');
      } else {
        // Mostrar un mensaje de error en caso de inicio de sesión fallido
        console.error('Error de inicio de sesión:', response.data);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='body'>
      <div className="container">
        <div className="backbox">
          <div className="loginMsg">
            <div className="textcontent">
              <p className="title">BIENVENIDO ADMINISTRADOR</p> 
              <img className="img-bank" src={iconUser} width={160} height={155} 
              style={{marginLeft:'120px'}} />
            </div>
          </div>
          <div className="signupMsg visibility">
            <div className="textcontent">
              <button id="switch2">INGRESAR</button>
            </div>
          </div>
        </div>
        <div className="frontbox">
          <div className="login">
            <h2>INICIAR SESION COMO ADMINISTRADOR</h2>
            <div className="inputbox">
              <ul/>
              <input type="text" name="email" placeholder="  NOMBRE DE USUARIO" value={user} onChange={handleUsernameChange}/>
              <ul/>
              <input type="password" name="password" placeholder="CONTRASEÑA" value={password} onChange={handlePasswordChange}/>
            </div>
            <button type='button' onClick={handleLogin}>INGRESAR</button>
          </div>
          <div className="signup hide">
            <h2>SIGN UP</h2>
            <div className="inputbox">
              <input type="text" name="fullname" placeholder="  FULLNAME" />
              <input type="text" name="email" placeholder="NOMBRE DE USUARIO" />
              <input type="password" name="password" placeholder="  CONTRASEÑA" />
            </div>
            <button>Hola</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
