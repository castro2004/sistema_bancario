import React from 'react';
import { Link } from 'react-router-dom';
import viewdata_img from '../Components-user/img-user/view_data.png';
import viewSaldo_img from '../Components-user/img-user/view_saldo.png';
import historia_img from '../Components-user/img-user/historial_transacciones.png';
import favoritos_img from '../Components-user/img-user/favoritos.png';
import transaccion_img from '../Components-user/img-user/transaccion-monetaria.png';
import '../Components-user/css-User/menuUser.css';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import banco from './img-user/banco.png';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import menu from '../component-admin/img-admin/menu.png';
import img4 from '../Components-user/img-user/20944139.jpg';
import img_menu from '../component-admin/img-admin/img_menu.jpg'
import '../component-admin/css/menuAdmin.css'


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
                <span className="link_name">ADMINSTRADOR</span>
              </a>
              <ul className='sub-menu blank'>
                <li><a className="link_name" href="/view-favorite">Category</a></li>
              </ul>
            </li>
            <ul/>
            <li>
              <ul/>
              <ul/>
              <li>
                <div className="icon-link">
                  <a href="/viewUserData-user">
                    <i className='bx bx-book-alt'></i>
                    <span className="link_name">Ver mis datos</span>
                  </a>
                  <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <Link to="/viewUserData-user">
                  <img src={viewdata_img} width={70} />
                </Link>
              </li>
              <li>
                <a href="/viewBalance-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Saldo Actual</span>
                </a>
                <Link to="/viewBalance-user">
                  <img src={viewSaldo_img} width={70} />
                </Link>
              </li>
              <li>
                <a href="/historyTransaction-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Historial de transacciones</span>
                </a>
                <Link to="/historyTransaction-user">
                  <img src={historia_img} width={70} />
                </Link>
              </li>
              <li>
                <a href="/view-favorite">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Favoritos</span>
                </a>
                <Link to="/view-favorite">
                  <img src={favoritos_img} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/create-transfencias">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Crear transfencia</span>
                </a>
                <Link to="/create-transfencias">
                  <img src={transaccion_img} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/menu-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Regresar al menu</span>
                </a>
                <Link to="/menu-user">
                  <img src={menu} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/login-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Cerrar Sesion</span>
                </a>
                <Link to="/login-user">
                  <img src={CS} width={70}/>
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <img src={img_menu} style={{ marginLeft: '-400px',width: '2200px', height: '700px', marginTop: '-300px'}}/>
        <center>
          <div className="content-container"> {/* Contenedor adicional para centrar */}
          <div className="container">
          <div className="decorative-title"style={{ marginTop: '-300px' }}>
            <div className="decorative-bar left vertical thick" style={{ marginTop: '20px' }}></div>
            <div className="decorative-bar left horizontal thick" style={{ marginTop: '-455px' }}></div>
            <div className="decorative-bar left horizontal thin" style={{ marginTop: '2px' }}></div>

            <span>BIENVENIDO USUARIO</span>

            <div className="decorative-bar right vertical thick" style={{ marginTop: '-600px' }}></div>
            <div className="decorative-bar right horizontal thick"></div>
            <div className="decorative-bar right horizontal thin"></div>
          </div>
          </div>
          <p className="welcome-text" style={{ fontSize: '40px' ,color: 'black', marginTop: '100px' }}>Bienvenidos este es nuestro proyecto para un sistema Bancario</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap"> {/* Agregamos "align-items-center" y "flex-wrap" */}
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

export default MenuUser;



