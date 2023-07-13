import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import deleteA from '../component-admin/img-admin/eliminarUsuario.png';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import menu from '../component-admin/img-admin/menu.png';
import agregarU from '../component-admin/img-admin/agregar-usuario.png';
import CU from '../component-admin/img-admin/agregar-usuario.png';
import banco from '../Components-user/img-user/banco.png';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import img4 from '../Components-user/img-user/20944139.jpg';
import '../component-admin/css/createAdmin.css';
import 'bootstrap/dist/css/bootstrap.css';
import AA from '../component-admin/img-admin/agregarAdmin.png'


// Resto del código del componente ViewDataAdmin


const ViewDataAdmin = () => {
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('Acceso no autorizado');
        }

        const response = await fetch('http://localhost:3007/api/viewData-admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': token
          }
        });

        if (!response.ok) {
          throw new Error('Administrador no encontrado');
        }

        const data = await response.json();
        setAdminData(data.admin);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!adminData) {
    return <div>Loading...</div>;
  }

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
                  <img src={agregarA} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/menu-admin">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Regresar al menu</span>
                </a>
                <Link to="/menu-admin">
                  <img src={menu} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/login-admin">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Cerrar Sesion</span>
                </a>
                <Link to="/login-admin">
                  <img src={CS} width={70}/>
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
    <div className='card'>
      <h2>Datos del administrador:</h2>
      <p><strong className="font-weight-bold">Rol:</strong> {adminData.rol}</p>
      <p><strong className="font-weight-bold">Nombre:</strong> {adminData.name}</p>
      <p><strong className="font-weight-bold">Password:</strong> {adminData.password}</p>
      <p><strong className="font-weight-bold">Dpi:</strong> {adminData.dpi}</p>
      <p><strong className="font-weight-bold">CellPhone:</strong> {adminData.cellPhone}</p>
      <p><strong className="font-weight-bold">Email:</strong> {adminData.email}</p>
      <p><strong className="font-weight-bold">Token:</strong> {adminData.token}</p>
    </div>
    </div>
  );
};

export default ViewDataAdmin;












