import React, { useEffect, useState } from 'react';
import "../../src/component-admin/css/viewData.css";
import Swal from 'sweetalert2';

const ViewDataAdmin = () => {
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('Acceso no autorizado');
        }

        const response = await fetch('http://localhost:3007/api/viewData-admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': token
          }
        });

        if (!response.ok) {
          throw new Error('Administrador no encontrado');
        }

        const data = await response.json();
        setAdminData(data.admin);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const DeleteAdmin = async (token) => {
    try {
      const response = await fetch('http://localhost:3007/api/delete-admin', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el administrador');
      }

      setAdminData(null); // Eliminar el admin del estado
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el usuario correctamente!",
      }).then(() =>{
        window.location.href = "/";
      });
    } catch (error) {
      console.error('Error al eliminar el administrador:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el usuario!",
      });
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!adminData) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="card-user"> 
      <div className="profile1"> <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="100"/> </div>
      <h2>Datos del administrador:</h2><hr />
      <p>Rol: {adminData.rol}</p>
      <p>Nombre: {adminData.user}</p>
      {/* <p>Password: {adminData.password}</p> */}
      <p>Dpi: {adminData.dpi}</p>
      <p>CellPhone: {adminData.cellPhone}</p>
      <p>Email: {adminData.email}</p>
      {/* <p>Token: {adminData.token}</p> */}    
      <hr />
      <div>
      {/* Boton de editar cuenta  */}
      <button className="btn btn-warning btn-sm follow mx-2" 
                      onClick={() => handleOpenModal(u)}>
                Editar
      </button>
      {/* Boton de eliminar cuenta */}
      <button className="btn btn-danger btn-sm follow mx-2"
              onClick={() => DeleteAdmin(adminData.token)}>
              Delete
      </button>
      {/* Boton de regresar a menu  */}
      <button className="btn btn-primary btn-sm follow mx-2"
              onClick={() => (window.location.href = '/menu-admin')}>
                Return
      </button>
      </div>
    </div>
    </>
  );
};

export default ViewDataAdmin;