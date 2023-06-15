import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        // Redirigir a la ruta /menu-user
        navigate('/menu-admin');
        console.log(response.data)
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
    <div>
      <h1>Admin Login</h1>
      <div className="form-group">
        <label>Nombre de administrador:</label>
        <input
          type="text"
          className="form-control"
          value={user}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <form>
        <ul />
        <button className="btn btn-primary btn-lg" type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;