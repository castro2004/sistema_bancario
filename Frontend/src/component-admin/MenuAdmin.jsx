import React from 'react';
import { Link } from 'react-router-dom';
import CreateAdmin from '../component-admin/img-admin/agregarAdmin.png';
import EliminarAdmin from '../component-admin/img-admin/eliminarUsuario.png';
import UpadateAdmin  from '../component-admin/img-admin/actualizarUsuario.png';
import OrdenAcount  from '../component-admin/img-admin/verCuentas.png';
import ViewData from '../component-admin/img-admin/view_data.png';
import CreateUser from '../component-admin/img-admin/agregar-usuario.png';
import '../Components-user/MenuUser.css';
import { Home2 } from '../App';


const MenuAdmin = () => {
  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '60px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    color: '#000',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

    const cerrarSeccion=()=>{
      localStorage.removeItem("token");
      window.location.href ="/login-admin";
    }

  return (
    <div>
      <div id="div1">
        <div id="rock1"></div>
        <div id="rock2"></div>
        <div id="rock3"></div>
        <div id="rock4"></div>
        <div id="rock5"></div>
        <div id="rock6"></div>
        <div id="rock7"></div>
        <div id="rock8"></div>
        <div id="diva1">
          <Link to="/create-admin">
            <img className="menu-img" src={ CreateAdmin} alt="Button" />
          </Link>
          <Link to="/delete-admin">
            <img className="menu-img" src={ EliminarAdmin } alt="Button" />
          </Link>
          <Link to="/update-admin">
            <img className="menu-img" src={ UpadateAdmin } alt="Button" />
          </Link>
          <Link to="/accounts-admin">
            <img className="menu-img" src={ OrdenAcount } alt="Button" />
          </Link>
          <Link to="/view-data">
            <img className="menu-img" src={ ViewData } alt="Button" />
          </Link>
          <Link to="/create-user">
            <img className="menu-img" src={ CreateUser } alt="Button" />
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '150px' }}>
        <Home2 className="home-content4" />
        <h2 style={{ textAlign: 'center' }}>MENU DEL ADMINISTRADOR</h2>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-info" onClick={() =>cerrarSeccion()} >Cerrar sesion</button>
        </div>
      </div>
    </div>
    
  );
};

export default MenuAdmin;


