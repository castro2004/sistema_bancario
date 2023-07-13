import React, { useEffect, useState } from 'react';

const ViewUserData = () => {
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
    <>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Datos</th>
      <th scope="col">Información</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td> Nombre </td>
      <td>{userData.name}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Nombre de usuario:</td>
      <td>{userData.username}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Rol</td>
      <td>{userData.rol}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Número de cuenta:</td>
      <td>{userData.accountNumber}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Tipo de cuenta:</td>
      <td>{userData.typeAccount}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>DPI:</td>
      <td>{userData.dpi}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Dirección:</td>
      <td>{userData.address}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Teléfono celular:</td>
      <td>{userData.cellPhone}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Email:</td>
      <td>{userData.email}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Nombre del trabajo:</td>
      <td>{userData.nameWork}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Ingreso mensual:</td>
      <td>{userData.incomeMonth}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Saldo:</td>
      <td>{userData.balance}</td>
      <td></td>
    </tr>
    
  </tbody>
</table>
  </>
  
  );
};

export default ViewUserData;