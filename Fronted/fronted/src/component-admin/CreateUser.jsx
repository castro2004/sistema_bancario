import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dpi, setDpi] = useState('');
  const [address, setAddress] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [nameWork, setNameWork] = useState('');
  const [incomeMonth, setIncomeMonth] = useState('');
  const [balance, setBalance] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3007/api/create-user',
        {
          name,
          username,
          email,
          password,
          dpi,
          address,
          cellPhone,
          nameWork,
          incomeMonth,
          balance
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 210) {
        // El usuario se creó con éxito
        console.log(response.data.msg);
        // Aquí puedes realizar cualquier acción adicional, como redireccionar o mostrar un mensaje al usuario
      } else {
        // Error al crear el usuario
        setErrorMsg(response.data.msg);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setErrorMsg('Error al crear el usuario');
    }
  };

  return (
    <div className="container">
      <h1>Create User</h1>
      {errorMsg && <p>{errorMsg}</p>}
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>DPI:</label>
          <input type="text" className="form-control" value={dpi} onChange={(e) => setDpi(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Cell Phone:</label>
          <input type="text" className="form-control" value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Name Work:</label>
          <input type="text" className="form-control" value={nameWork} onChange={(e) => setNameWork(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Income per Month:</label>
          <input type="number" className="form-control" value={incomeMonth} onChange={(e) => setIncomeMonth(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Balance:</label>
          <input type="number" className="form-control" value={balance} onChange={(e) => setBalance(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="button" onClick={handleCreateUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;


