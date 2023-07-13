import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import axios from 'axios';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import menu from '../component-admin/img-admin/menu.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import agregarU from '../component-admin/img-admin/agregar-usuario.png';
import banco from '../Components-user/img-user/banco.png';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import img4 from '../Components-user/img-user/20944139.jpg';
import '../Components-user/css-User/MenuUser.css';
import '../component-admin/css/OrderAcount.css'
import 'bootstrap/dist/css/bootstrap.css';

const OrderAcount = () => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAccounts('asc');
  }, []);

  const fetchAccounts = async (order) => {
    try {
      const response = await axios.get(`http://localhost:3007/api/admin/accounts?order=${order}`);
      setAccounts(response.data.accounts);
    } catch (error) {
      setError('Error al obtener las cuentas');
    }
  };

  return (
    <div>
      <center>
        <div className="container">
          <div className="decorative-title" style={{ marginTop: '-300px' }}>
            <div className="decorative-bar left vertical thick" ></div>
            <div className="decorative-bar left horizontal thick" style={{ marginTop: '-300px' }}></div>
            <div className="decorative-bar left horizontal thin"></div>

            <span> <img src={viewC} width={50} /> Lista de cuentas</span>

            <div className="decorative-bar right vertical thick" style={{ marginTop: '-300px' }}></div>
            <div className="decorative-bar right horizontal thick"></div>
            <div className="decorative-bar right horizontal thin"></div>
          </div>
        </div>
      </center>
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
      <div className="btn-group" role="group">
        <center>
          <button type="submit"
            style={{
              backgroundColor: '#c0a57d',
              color: '#ffffff',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              width: '175px',
              marginRight: '10px'
            }} onClick={() => fetchAccounts('asc')}>
            Orden Ascendente
          </button>
        </center>
        <button type="submit"
          style={{
            backgroundColor: '#c0a57d',
            color: '#ffffff',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            width: '200px'
          }} onClick={() => fetchAccounts('desc')}>
          Orden Descendente
        </button>
      </div>
      <div>
        <div className="row mt-4">
          {accounts.map((account) => (
            <div className="col-md-4 mb-4" key={account._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Name:</strong> {account.name}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Usuario:</strong> {account.username}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Rol:</strong> {account.rol}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Número de cuenta:</strong> {account.accountNumber}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Tipo de cuenta:</strong> {account.typeAccount}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>DPI:</strong> {account.dpi}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Dirección:</strong> {account.address}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Teléfono:</strong> {account.cellPhone}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Email:</strong> {account.email}
                  </h5>
                  <ul/>
                  <h5 className="card-text">
                    <strong>Saldo:</strong> {account.balance}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderAcount;




