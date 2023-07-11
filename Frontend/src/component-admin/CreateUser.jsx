import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <label style={labelStyle}>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Account Number:
        <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} style={inputStyle} required />
        <button type="button" onClick={generateAccountNumber} style={buttonStyle}>Generate</button>
      </label>
      <label style={labelStyle}>
        Account Type:
        <select name="typeAccount" value={formData.typeAccount} onChange={handleChange} style={inputStyle} required>
          <option value="Monetaria">Monetaria</option>
          <option value="Corriente">Corriente</option>
          <option value="Ahorros">Ahorros</option>
          <option value="Cheques">Cheques</option>
        </select>
      </label>
      <label style={labelStyle}>
        DPI:
        <input type="text" name="dpi" value={formData.dpi} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Cell Phone:
        <input type="text" name="cellPhone" value={formData.cellPhone} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Work Name:
        <input type="text" name="nameWork" value={formData.nameWork} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Monthly Income:
        <input type="number" name="incomeMonth" value={formData.incomeMonth} onChange={handleChange} style={inputStyle} required />
      </label>
      <label style={labelStyle}>
        Balance:
        <input type="number" name="balance" value={formData.balance} onChange={handleChange} style={inputStyle} required />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;












