import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import deleteA from '../component-admin/img-admin/eliminarUsuario.png';
import actualizarA from '../component-admin/img-admin/actualizarUsuario.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import agregarU from '../component-admin/img-admin/agregarAdmin.png';
import banco from '../Components-user/img-user/banco.png';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import img4 from '../Components-user/img-user/20944139.jpg';
import '../Components-user/css-User/MenuUser.css';
import 'bootstrap/dist/css/bootstrap.css';


const MenuAdmin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
    <div className='navbar-container'>
      <nav className="horizontal-navbar">
      <img src={banco} alt="Banco" width={200} className="navbar-item" style={{marginLeft:"30px"}}/>
      <h1 style={{color: " #040404  "}}>SISTEMA BANCARIO</h1>
      <ul className="navbar-items">
          <li className="navbar-item">
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/createAdmin" className="navbar-link">
              <div className="menu-item">
                <img className='menu-img' src={agregarA} alt="Button" />
                <h1 className='smaller-text'>Agregar administrador</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/viewData-admin" className="navbar-link">
              <div className="menu-item">
                <img className='menu-img' src={viewdata_img} alt="Button" />
                <h1 className='smaller-text'>Ver mis Datos</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to='/update-admin' className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={actualizarA} alt="Button" />
                <h1 className='smaller-text'>Actualizar mis Datos</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/admin/accounts" className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={viewC} alt="Button" />
                <h1 className='smaller-text'>Ver cuentas</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/create-user" className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={agregarU} alt="Button" />
                <h1 className='smaller-text'>Crear Usuario</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/delete-admin" className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={deleteA} alt="Button" />
                <h1 className='smaller-text'>Eliminar Administrador</h1>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <center>
        <div>
          <ul />
          <img src={banco} width={450} alt="" />
          <p className="welcome-text">Bienvenidos este es nuestro proyecto para un sistema Bancario</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className='card'>
            <div className='polaroid'>
              <img src={img1} width={430} />
              <ul />
              <p>Programa citas en linea</p>
            </div>
          </div>
          <div className='card'>
            <div className='polaroid'>
              <img src={img2} width={407} />
              <ul />
              <p>Atencion al cliente</p>
            </div>
          </div>
          <div className='card'>
            <div className='polaroid'>
              <img src={img3} width={320} />
              <ul />
              <p>Atencion al cliente</p>
            </div>
          </div>
        </div>
      </center>
    </div> 
  );
};


export default MenuAdmin;











