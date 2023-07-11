import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import deleteA from '../component-admin/img-admin/eliminarUsuario.png';
import actualizarA from '../component-admin/img-admin/actualizarUsuario.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import agregarU from '../component-admin/img-admin/agregar-usuario.png';
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
                <li><a className="link_name" href="/createAdmin">Category</a></li>
              </ul>
            </li>
            <ul/>
            <li>
              <ul/>
              <ul/>
              <li>
                <div className="icon-link">
                  <a href="/viewData-admin">
                    <i className='bx bx-book-alt'></i>
                    <span className="link_name">Ver mis datos</span>
                  </a>
                  <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <center>
                  <img src={viewdata_img} width={50} />
                </center>
              </li>
              <li>
                <a href="/admin/accounts">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Ver lista de usuarios</span>
                </a>
                <center>
                  <img src={viewC} width={50} />
                </center>
              </li>
              <li>
                <a href="/create-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Agregar Usuario</span>
                </a>
                <center>
                  <img src={agregarU} width={50} />
                </center>
              </li>
              <li>
                <a href="/admin/accounts">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Agregar Administrador</span>
                </a>
                <center>
                  <img src={agregarA} width={50} />
                </center>
              </li>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <center>
          <div>
            <h1 style={{fontSize: '120px', color: 'white'}}>BIENVENIDO ADMINISTRDOR<img src={img4} width={200}/></h1>
            <ul />
            <img src={banco} width={450} alt="" />
            <p className="welcome-text" style={{ color: 'white' }}>Bienvenidos este es nuestro proyecto para un sistema Bancario</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className='card'>
              <div className='polaroid'>
                <img src={img1} width={405} />
                <ul />
                <p>Programa citas en linea</p>
              </div>
            </div>
            <div className="card" style={{ marginLeft: '20px' }}>
              <div className='polaroid'>
                <img src={img2} width={380} />
                <ul />
                <p>Atencion al cliente</p>
              </div>
            </div>
            <div className='card' style={{ marginLeft: '20px' }}>
              <div className='polaroid'>
                <img src={img3} width={300} />
                <ul />
                <p>Atencion al cliente</p>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};


export default MenuAdmin;












