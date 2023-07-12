import React, { useState, useEffect } from 'react';
// import { Admin } from "../component-admin/models/ModelAdmin";
import { listAdmin , DeleteAdmin } from './api/Admin';
import { UpdateAdmin } from './UpdateAdmin';
import Swal from "sweetalert2";

const ViewData = () => {
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModalho] = useState(false);
  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleOpenModal = (u) => {
    setShowModalho(true);
    setAdmins(u);
  };
  const fetchAdmins = async () => {
    try {
      const result = await listAdmin();
      setAdmins(result);
    } catch (error) {
      console.error('Error al obtener la lista de administradores:', error);
    }
  };

  // Eliminar el admin 
  const eliminarAdmin = async (id) => {
    let result = await DeleteAdmin(id);
    if (result) {
      setAdmins(admins.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el usuario correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el usuario!",
      });
    }
  };


  return (
    <>
      <div
        style={{ paddingTop: '3%' }}
        className="container d-flex justify-content-center align-items-center"
      >
        {admins.map((u) => (
          <div key={u._id} className="card">
            <div className="upper">
              <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" alt="" />
            </div>
            <div className="user text-center">
              <div className="profile">
                <img
                  src="https://i.imgur.com/JgYD2nQ.jpg"
                  className="rounded-circle"
                  width="80"
                  alt=""
                />
              </div>
            </div>
            <div className="mt5 text-center">
              <div>
                <h4>ID: {u._id}</h4>
                <h3>Admin Details</h3>
                <h4>User: {u._id}</h4>
                <h4>Rol: {u.rol}</h4>
                <h4>DPI: {u.dpi}</h4>
                <h4>Telefóno: {u.cellPhone}</h4>
                <h4>Email: {u.email}</h4>
              </div>
              <button className="btn btn-warning btn-sm follow mx-2" 
                      onClick={() => handleOpenModal(u)}>
                Editar</button>
              <button
                className="btn btn-danger"
                onClick={() => {eliminarAdmin(u._id);}}>
              Delete
            </button>
              <button
                className="btn btn-primary btn-sm follow mx-2"
                onClick={() => (window.location.href = '/menu-admin')}
              >
                Return
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewData;