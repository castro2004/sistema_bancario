import React from 'react';
import { Link } from 'react-router-dom';

const MenuUser = () => {
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
      <h1>Menu User</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link to="/viewUserData-user">
              <button style={buttonStyle}>Ver datos de usuario</button>
            </Link>
          </div>
          <div>
            <Link to="/update-user">
              <button style={buttonStyle}>Actualizar usuario</button>
            </Link>
          </div>
          <div>
            <Link to="/viewBalance-user">
              <button style={buttonStyle}>Ver saldo</button>
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link to="/historyTransaction-user">
              <button style={buttonStyle}>Historial de transacciones</button>
            </Link>
          </div>
          <div>
            <Link to="/create-favorite">
              <button style={buttonStyle}>Crear favorito</button>
            </Link>
          </div>
          <div>
            <Link to="/read-favorite">
              <button style={buttonStyle}>Leer favorito</button>
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link to="/update-favorite">
              <button style={buttonStyle}>Actualizar favorito</button>
            </Link>
          </div>
          <div>
            <Link to="/delete-favorite">
              <button style={buttonStyle}>Eliminar favorito</button>
            </Link>
          </div>
          <div>
            <Link to="/create-transfencias">
              <button style={buttonStyle}>Crear transferencia</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuUser;



