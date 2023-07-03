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
  const [Balance, setBalance] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3008/api/create-user',
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
          Balance
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 210) {
        // El usuario se creó con éxito
        console.log(data);
        // Aquí puedes realizar cualquier acción adicional, como redireccionar o mostrar un mensaje al usuario
      } else {
        // Error al crear el usuario
        setErrorMsg(response.data.msg);
      }
    } catch (error) {
      console.error('Error de red:', error);
      // setErrorMsg('Error al crear el usuario', error);
      // console.log('El error es', error)
    }
  };

// Para regresar al menu 
  const regresarMenu=()=>{
    window.location.href="/menu-admin";
  }


  return (

        <div className="row">
          <div className="bg-white">
            <h2>Create Users</h2>
            <button onClick={() => regresarMenu()} className="btn btn-outline-secondary">Regresar</button>
              <div className="row align-items-start">
                <div className="col">
                  <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                </div>

                  <div className="col">
                    <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                  </div>
              </div>

              <div className="row align-items-start">
                  <div className="col">
                    <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <div className="col">
                    <label  htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  </div> 
            </div>

            <div className="row align-items-start">
              <div className="col">
                <label htmlFor="dpi">DPI:</label>
                  <input
                    type="text"
                    id="dpi"
                    className="form-control"
                    value={dpi}
                    onChange={(e) => setDpi(e.target.value)}
                  />
              </div>
              <div className="col">
                <label  htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
              </div>
            </div>
            <div className="row align-items-start">
                <div className="col">
                  <label htmlFor="cellPhone">Cell Phone:</label>
                  <input
                    type="text"
                    id="cellPhone"
                    className="form-control"
                    value={cellPhone}
                    onChange={(e) => setCellPhone(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="nameWork">Name of Work:</label>
                  <input
                    type="text"
                    id="nameWork"
                    className="form-control"
                    value={nameWork}
                    onChange={(e) => setNameWork(e.target.value)}
                  />
                </div>
            </div>

            <div className="row align-items-start">
              <div className="col">
                <label  htmlFor="incomeMonth">Income per Month:</label>
                <input
                  type="number"
                  id="incomeMonth"
                  className="form-control"
                  value={incomeMonth}
                  onChange={(e) => setIncomeMonth(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="balance">Balance:</label>
                  <input
                    type="number"
                    id="balance"
                    className="form-control"
                    value={Balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />  
              </div>
            </div>
             <button className="btn btn-outline-primary my-4 d-grid gap-2 col-4 mx-auto" type="button" onClick={handleCreateUser}>
          Create User
        </button>
          </div>
        </div>
  );
};

export default CreateUser;






