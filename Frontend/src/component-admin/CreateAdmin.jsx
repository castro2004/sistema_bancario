import React, { useState } from 'react';
import axios from 'axios';

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
      <h2>Crear Administrador</h2>
      {errorMsg && <p>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario:</label>
        <input type="text" id="user" value={user} onChange={handleUserChange} required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />

        <label htmlFor="dpi">DPI:</label>
        <input type="text" id="dpi" value={dpi} onChange={handleDpiChange} required />

        <label htmlFor="cellPhone">Número de teléfono:</label>
        <input type="text" id="cellPhone" value={cellPhone} onChange={handleCellPhoneChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <button type="submit">Crear Administrador</button>
      </form>
    </div>
  );
};

export default CreateAdmin;

