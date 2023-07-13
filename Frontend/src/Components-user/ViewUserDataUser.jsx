import React, { useEffect, useState } from 'react';
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

const ViewUserDataUser = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('Acceso no autorizado');
        }

        const response = await fetch('http://localhost:3007/api/viewUserData-user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': token
          }
        });

        if (!response.ok) {
          throw new Error('Usuario no encontrado');
        }

        const data = await response.json();
        setUserData(data.user);
        console.log(data.user)
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
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
                <Link to="/login-admin">
                  <img src={transaccion_img} width={70}/>
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
                <a href="/login-user">
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
      <div  className='card'>
      <center>
      <h2>Datos del usuario:</h2>
      <p><strong>Nombre: </strong> {userData.name}</p>
      <p><strong>Nombre de usuario: </strong> {userData.username}</p>
      <p><strong>Rol: </strong> {userData.rol}</p>
      <p><strong>Número de cuenta: </strong> {userData.accountNumber}</p>
      <p><strong>Tipo de cuenta: </strong> {userData.typeAccount}</p>
      <p><strong>DPI: </strong> {userData.dpi}</p>
      <p><strong>Dirección: </strong> {userData.address}</p>
      <p><strong>Teléfono celular: </strong> {userData.cellPhone}</p>
      <p><strong>Email: </strong> {userData.email}</p>
      <p><strong>Nombre del trabajo: </strong> {userData.nameWork}</p>
      <p><strong>Ingreso mensual: </strong> {userData.incomeMonth}</p>
      <p><strong>Saldo: </strong> {userData.balance}</p>
      </center>
    </div>
    </div>
  );
};

export default ViewUserDataUser
  ;


