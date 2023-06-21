import React from 'react';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import deleteA from '../component-admin/img-admin/eliminarUsuario.png';
import actualizarA from '../component-admin/img-admin/actualizarUsuario.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import agregarU from '../component-admin/img-admin/agregar-usuario.png';
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
            <img className='menu-img' src={agregarA} alt="Button" />
          </Link>
          <Link to="/viewData-admin">
            <img className='menu-img' src={viewdata_img} alt="Button" />
          </Link>
          <Link to="/delete-admin">
            <img className="menu-img" src={deleteA} alt="Button" />
          </Link>
          <Link to='/update-admin'>
            <img className="menu-img" src={actualizarA} alt="Button" />
          </Link>
          <Link to="/admin/accounts">
            <img className="menu-img" src={viewC} alt="Button" />
          </Link>
          <Link to="/create-user">
            <img className="menu-img" src={agregarU} alt="Button" />
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '150px' }}>
        <Home2 className="home-content4" />
        <h2 style={{ textAlign: 'center' }}>MENU DEL ADMINISTRADOR</h2>
      </div>
    </div>
    
  );
};

export default MenuAdmin;


