import React from 'react';
import { Link } from 'react-router-dom';

const MenuAdmin = () => {
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    color: '#000',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Menu Admin</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link to="/viewUserData-user">
              <button style={buttonStyle}>Crear Administrador</button>
            </Link>
          </div>
          <div>
            <Link to="/update-user">
              <button style={buttonStyle}>Mis Datos</button>
            </Link>
          </div>
          <div>
            <Link to="/viewBalance-user">
              <button style={buttonStyle}>Eliminar Administrador</button>
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link to="/historyTransaction-user">
              <button style={buttonStyle}>Cuentas por movimientos</button>
            </Link>
          </div>
          <div>
            <Link to="/create-user">
              <button style={buttonStyle}>Crear usuario</button>
            </Link>
          </div>
          <div>
            <Link to="/read-favorite">
              <button style={buttonStyle}>Eliminar usuario</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAdmin;