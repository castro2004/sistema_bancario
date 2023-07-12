import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import agregarA from '../component-admin/img-admin/agregarAdmin.png';
import viewdata_img from '../Components-user/img-user/view_data.png';
import deleteA from '../component-admin/img-admin/eliminarUsuario.png';
import actualizarA from '../component-admin/img-admin/actualizarUsuario.png';
import viewC from '../component-admin/img-admin/verCuentas.png';
import agregarU from '../component-admin/img-admin/agregar-usuario.png';
import banco from '../Components-user/img-user/banco.png';
import CU from '../component-admin/img-admin/agregar-usuario.png';

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







