import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import viewdata_img from '../Components-user/img-user/view_data.png';
import viewSaldo_img from '../Components-user/img-user/view_saldo.png';
import historia_img from '../Components-user/img-user/historial_transacciones.png';
import favoritos_img from '../Components-user/img-user/favoritos.png';
import bank_img from '../Components-user/img-user/banco.png';
import transaccion_img from '../Components-user/img-user/transaccion-monetaria.png';
import '../Components-user/css-User/menuUser.css';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import banco from './img-user/banco.png';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import menu from '../component-admin/img-admin/menu.png';
import img4 from '../Components-user/img-user/20944139.jpg';


const ViewBalance = () => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetchBalance(token);
    }
  }, []);

  const fetchBalance = async (token) => {
    try {
      const response = await fetch('http://localhost:3007/api/viewBalance-user', {
        headers: {
          'token': token
        }
      });

      if (response.ok) {
        const data = await response.json();
        setBalance(data.balance);
      } else if (response.status === 401) {
        console.log('Acceso no autorizado');
      } else if (response.status === 404) {
        console.log('Usuario no encontrado');
      } else {
        console.log('Error en la solicitud');
      }
    } catch (error) {
      console.log(error);
    }
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
                <span className="link_name">Usuario</span>
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
      <center>
        <div className="container">
          <div className="decorative-title" style={{ marginTop: '-300px' }}>
            <div className="decorative-bar left vertical thick" ></div>
            <div className="decorative-bar left horizontal thick" style={{ marginTop: '-300px' }}></div>
            <div className="decorative-bar left horizontal thin"></div>

            <span> <img src={viewdata_img} width={60} />MÍ BALANCE</span>

            <div className="decorative-bar right vertical thick" style={{ marginTop: '-300px' }}></div>
            <div className="decorative-bar right horizontal thick"></div>
            <div className="decorative-bar right horizontal thin"></div>
          </div>
        </div>
      </center>
    <div className='card' style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Balance</h2>
      <p style={{ fontSize: '18px' }}>Su balance es: {balance}</p>
    </div>
    </div>
  );
};

export default ViewBalance;


