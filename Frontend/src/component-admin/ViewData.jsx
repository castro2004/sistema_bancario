// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminForm = () => {
//   const [token, setToken] = useState('');
//   const [adminData, setAdminData] = useState(null);

//   const handleTokenChange = (event) => {
//     setToken(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:3007/api/viewData-admin', {
//         headers: {
//           'Content-Type': 'application/json',
//           token: token
//         }
//       });

//       if (response.data.admin) {
//         setAdminData(response.data.admin);
//         console.log('Datos del administrador:', response.data.admin);
//       } else {
//         console.log('Error al obtener los datos del administrador');
//       }
//     } catch (error) {
//       console.error('Error al obtener los datos del administrador:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Formulario de Administrador</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Token:
//           <input type="text" value={token} onChange={handleTokenChange} />
//         </label>
//         <button type="submit">Obtener Datos</button>
//       </form>

//       {adminData && (
//         <div>
//           <h2>Datos del administrador:</h2>
//           <p>User: {adminData.user}</p>
//           <p>Rol: {adminData.rol}</p>
//           <p>Password: {adminData.password}</p>
//           <p>DPI: {adminData.dpi}</p>
//           <p>Email: {adminData.email}</p>
//           <p>Token: {adminData.token}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewDataAdmin = ({ token }) => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3007/api/viewData-admin',
          { token },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          setAdminData(response.data.admin);
          setLoading(false);
        } else {
          console.error('Error al obtener los datos del administrador');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchAdminData();
  }, [token]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!adminData) {
    return <p>No se encontraron datos del administrador</p>;
  }

  return (
    <div>
      <h2>Datos del Administrador</h2>
      <p>Rol: {adminData.rol}</p>
      <p>Nombre: {adminData.name}</p>
      <p>Password: {adminData.password}</p>
      <p>Dpi: {adminData.dpi}</p>
      <p>CellPhone: {adminData.cellPhone}</p>
      <p>Email: {adminData.email}</p>
      <p>Token: {adminData.token}</p>
    </div>
  );
};

export default ViewDataAdmin;





