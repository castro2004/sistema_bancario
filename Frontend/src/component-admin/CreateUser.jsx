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
import AA from '../component-admin/img-admin/agregarAdmin.png';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    rol: 'USER',
    accountNumber: '',
    typeAccount: 'Monetaria',
    dpi: '',
    address: '',
    cellPhone: '',
    email: '',
    password: '',
    nameWork: '',
    incomeMonth: '',
    balance: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateAccountNumber = () => {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    setFormData({ ...formData, accountNumber: randomNumber });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3007/api/create-user', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.ok) {
        console.log(response.data.msg);
      } else {
        console.error('Error al crear el usuario:', response.data.msg);
      }

      // Hacer algo con la respuesta, como redireccionar a otra página o mostrar un mensaje de éxito.
    } catch (error) {
      console.error(error);
      // Manejar el error, mostrar un mensaje de error, etc.
    }
  };

  // Estilos CSS inline
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    // Añade otros estilos según tus preferencias
  };

  const inputStyle = {
    marginBottom: '16px',
    // Añade otros estilos según tus preferencias
  };

  const buttonStyle = {
    marginLeft: '8px',
    // Añade otros estilos según tus preferencias
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
      <div style={{backgroundColor: '#3f6cb6', padding: '10px', borderRadius: '7px', color: '#fffff'}}>
        <div style={{ backgroundColor: '#2c3c5c', padding: '10px', borderRadius: '7px', marginBottom: '20px' }}>
          <h2 style={{margin: 0, color: 'white'}}>SISTEMA DE ADMINISTRACION</h2>
        </div>
        <center>
          <h2 style={{marginBottom: '10px', color: '#c0a57d'}}>
            <img src={AA} width={120} alt='Agregar Usuario'/>AGREGAR USUARIO
          </h2>
          <div className='card-body'
            style={{ backgroundColor: '#838192', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '600px', height: '550px', marginTop: '30px', paddingTop: '20px', borderRadius: '7px' }}>
            <form onSubmit={handleSubmit}>
              <div className='create-admin-input-group'>
                <label htmlFor='name' style={{color: ''}}>
                  Nombre:
                  <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
                </label>
              </div>
              <ul/>
              <div className='create-admin-input-group'>
                <label htmlFor="Username">
                  Username:
                  <input className="form-control" type="text" name="username" value={formData.username} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
                </label>
              </div>
              <ul/>
              <div className='create-admin-input-group'>
              Numero de Cuenta:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  
                  <label htmlFor="AccountNumber" style={{ marginRight: '10px' }}>
                    
                  </label>
                  <input className="form-control" type="Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '127px' }} required />
                  <button className="form-control" type="button" onClick={generateAccountNumber} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '120px', marginLeft: '10px' }}>Generate</button>
                </div>
              </div>
              <ul/>
              
              <ul/>
              <div className="create-admin-input-group">
                <label htmlFor="address" style={{ color: ' ' }}>
                  Direccion:
                </label>
                <input className="form-control" type="text" name="address" value={formData.address} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
              <ul/>
              <div className="create-admin-input-group">
                <label htmlFor="cellPhone" style={{ color: ' ' }}>
                  Numero Telefonico:
                </label>
                <input className="form-control" type="text" name="cellPhone" value={formData.cellPhone} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
            </form>
            <form onSubmit={handleSubmit}>
            <div className="create-admin-input-group">
                <label htmlFor="dpi" style={{ color: ' ' }}>
                  DPI:
                  <input className="form-control" type="Number" name="dpi" value={formData.dpi} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
                </label>
                
              </div>
              <div className="create-admin-input-group">
                <label htmlFor="email" style={{ color: ' ' }}>
                  Email:
                </label>
                <input className="form-control" type="text" name="email" value={formData.email} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
              <ul/>
              <div className="create-admin-input-group">
                <label htmlFor="password" style={{ color: ' ' }}>
                  Contraseña:
                </label>
                <input className="form-control" type="Password" name="password" value={formData.password} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
              <ul/>
              <div className="create-admin-input-group">
                <label htmlFor="nameWork" style={{ color: ' ' }}>
                  Nombre del trabajo:
                </label>
                <input className="form-control" type="text" name="nameWork" value={formData.nameWork} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
              <ul/>
              <div className="create-admin-input-group">
                <label htmlFor="incomeMonth" style={{ color: ' ' }}>
                  Monto por mes:
                </label>
                <input className="form-control" type="text" name="incomeMonth" value={formData.incomeMonth} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
              <ul/>
              <div className="create-admin-input-group">
                <label htmlFor="balance" style={{ color: ' ' }}>
                  Saldo Actual:
                </label>
                <input className="form-control" type="Number" name="balance" value={formData.balance} onChange={handleChange} style={{ backgroundColor: ' ', color: 'black', borderRadius: '5px', width: '250px' }} required />
              </div>
              <ul/>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#c0a57d',
                    color: '#ffffff',
                    padding: '5px',
                    border: 'none',
                    borderRadius: '5px',
                    width: '150px'
                  }}
                >
                  CREAR USUARIO
                </button>
              </div>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
};

export default CreateUser;

















