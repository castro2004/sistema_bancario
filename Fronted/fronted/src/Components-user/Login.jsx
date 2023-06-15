import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <div>
        <Link to="/login-user">
          <button>Ingresar como usuario</button>
        </Link>
      </div>
      <div>
        <button>Ingresar como administrador</button>
      </div>
    </div>
  );
};

export default Login;