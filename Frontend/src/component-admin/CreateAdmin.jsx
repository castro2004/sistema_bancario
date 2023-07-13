import React, { useState } from 'react';
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
import '../Components-user/css-User/MenuUser.css';
import 'bootstrap/dist/css/bootstrap.css';
import AA from '../component-admin/img-admin/agregarAdmin.png'
import Swal from 'sweetalert'

const mostrarAlerta=()=>{
  Swal({
    title: "Excelente",
    text: "Transferencia creada exitosamente",
    icon: "success",
    button: "Aceptar"
  })
}

const CreateAdmin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [dpi, setDpi] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDpiChange = (e) => {
    setDpi(e.target.value);
  };

  const handleCellPhoneChange = (e) => {
    setCellPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3007/api/create-admin', {
        user,
        password,
        dpi,
        cellPhone,
        email,
      });

      const { msg, ok, admin } = response.data;

      if (ok) {
        // La creación del administrador fue exitosa
        console.log(msg);
        console.log(admin);
        // Realizar las acciones necesarias después de crear el administrador exitosamente
      } else {
        // La creación del administrador falló
        setErrorMsg(msg);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('No se pudo crear el administrador');
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
      <ul/>
    <div style={{ backgroundColor: '#3f6cb6', padding: '10px', borderRadius: '7px', color: '#ffffff' }}>
      <div style={{ backgroundColor: '#2c3c5c', padding: '10px', borderRadius: '7px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#ffffff' }}>Sistema de Administración</h2>
      </div>
      <center>
        <h2 style={{ marginBottom: '10px', color: '#c0a57d' }}>
          <img src={CU} width={120} alt="Agregar Usuario" /> CREAR ADMINISTRADOR
        </h2>
        {errorMsg && <p>{errorMsg}</p>}
        <div
          className="card-body"
          style={{ backgroundColor: '#839192', width: '420px', height: '475px', marginTop: '30px', paddingTop: "20px", borderRadius: "7px"}}
        >
          <form onSubmit={handleSubmit}>
            <div className="create-admin-input-group">
              <label htmlFor="user" style={{ color: ' ' }}>
                Usuario:
              </label>
              <input
                type="text"
                id="user"
                value={user}
                onChange={handleUserChange}
                required
                className="form-control"
                style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }}
              />
            </div>
            <ul />
            <div className="create-admin-input-group">
              <label htmlFor="password" style={{ color: ' ' }}>
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="form-control"
                style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }}
              />
            </div>
            <ul />
            <div className="create-admin-input-group">
              <label htmlFor="dpi" style={{ color: ' ' }}>
                DPI:
              </label>
              <input
                type="text"
                id="dpi"
                value={dpi}
                onChange={handleDpiChange}
                required
                className="form-control"
                style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }}
              />
            </div>
            <ul />
            <div className="create-admin-input-group">
              <label htmlFor="cellPhone" style={{ color: ' ' }}>
                Número de teléfono:
              </label>
              <input
                type="text"
                id="cellPhone"
                value={cellPhone}
                onChange={handleCellPhoneChange}
                required
                className="form-control"
                style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }}
              />
            </div>
            <ul />
            <div className="create-admin-input-group">
              <label htmlFor="email" style={{ color: '' }}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="form-control"
                style={{ backgroundColor: '', color: 'black', borderRadius: '5px', width: '250px' }}
              />
            </div>
            <ul />
            <button
            onClick={()=>mostrarAlerta()}
              type="submit"
              style={{
                backgroundColor: '#c0a57d',
                color: '#ffffff',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                marginTop: '0px',
              }}
            >
              Crear Administrador
            </button>
          </form>
        </div>
      </center>
    </div>
    </div>
  );
};

export default CreateAdmin;














