import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import deleteA from '../component-admin/img-admin/eliminarUsuario.png';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import menu from '../component-admin/img-admin/menu.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import agregarU from '../component-admin/img-admin/agregar-usuario.png';
import banco from '../Components-user/img-user/banco.png';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import img4 from '../Components-user/img-user/20944139.jpg';
import img_menu from '../component-admin/img-admin/img_menu.jpg';
import '../component-admin/css/menuAdmin.css';
import 'bootstrap/dist/css/bootstrap.css';

const MenuAdmin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div>
        <div className="sidebar">
          <div className="logo-details">
            <i className='bx bxs-pyramid'></i>
          </div>
          <img src={banco} width={250} />
          <ul className='nav-links'>
            <li>
              <a>
                <i className='bx bx-grid-alt'></i>
                <span className="link_name" style={{ fontSize: '21px' }}>ADMINSTRADOR</span>
              </a>
              <ul className='sub-menu blank'>
                <li><a className="link_name" href="/createAdmin">Category</a></li>
              </ul>
            </li>
            <li>
              <div className="icon-link">
                <a href="/viewData-admin">
                  <i className='bx bx-book-alt'></i>
                  <span className="link_name">Ver mis datos</span>
                </a>
                <i className='bx bxs-chevron-down arrow'></i>
              </div>
              <Link to="/viewData-admin">
                <img src={viewdata_img} width={70} />
              </Link>
            </li>
            <li>
              <a href="/admin/accounts">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Ver lista de usuarios</span>
              </a>
              <Link to="/admin/accounts">
                <img src={viewC} width={70} />
              </Link>
            </li>
            <li>
              <a href="/create-user">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Agregar Usuario</span>
              </a>
              <Link to="/create-user">
                <img src={agregarU} width={70} />
              </Link>
            </li>
            <li>
              <a href="/createAdmin">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Agregar Administrador</span>
              </a>
              <Link to="/createAdmin">
                <img src={agregarA} width={70} />
              </Link>
            </li>
            <li>
              <a href="/menu-admin">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Regresar al menu</span>
              </a>
              <Link to="/menu-admin">
                <img src={menu} width={70} />
              </Link>
            </li>
            <li>
              <a href="/login-admin">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Cerrar Sesion</span>
              </a>
              <Link to="/login-admin">
                <img src={CS} width={70} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={img_menu} style={{ marginLeft: '-400px', width: '2200px', height: '700px', marginTop: '-300px' }} />
        <center>
          <div className="content-container"> {/* Contenedor adicional para centrar */}
            <div className="container">
              <div className="decorative-title" style={{ marginTop: '-300px' }}>
                <div className="decorative-bar left vertical thick" style={{ marginTop: '20px' }}></div>
                <div className="decorative-bar left horizontal thick" style={{ marginTop: '-455px' }}></div>
                <div className="decorative-bar left horizontal thin" style={{ marginTop: '2px' }}></div>

                <span>BIENVENIDO ADMINISTRADOR</span>

                <div className="decorative-bar right vertical thick" style={{ marginTop: '-600px' }}></div>
                <div className="decorative-bar right horizontal thick"></div>
                <div className="decorative-bar right horizontal thin"></div>
              </div>
            </div>
            <p className="welcome-text" style={{ fontSize: '40px', color: 'black', marginTop: '100px' }}>Bienvenidos este es nuestro proyecto para un sistema Bancario</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ marginTop: '100px' }}> {/* Agregamos "align-items-center" y "flex-wrap" */}
              <div className='card mx-2 my-2 text-center'>
                <div className='polaroid'>
                  <img src={img1} width={405} />
                  <ul />
                  <p>Programa citas en linea</p>
                </div>
              </div>
              <div className="card mx-2 my-2 text-center">
                <div className='polaroid'>
                  <img src={img2} width={380} />
                  <ul />
                  <p>Atencion al cliente</p>
                </div>
              </div>
              <div className='card mx-2 my-2 text-center'>
                <div className='polaroid'>
                  <img src={img3} width={300} />
                  <ul />
                  <p>Atencion al cliente</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default MenuAdmin;

















