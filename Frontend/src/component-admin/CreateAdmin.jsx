import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { listAdmin } from './api/Admin';
import { Admins } from './models/ModelAdmis';

export const CreateAdmin = () => {
  const [data, setUserAdmin] = useState([ ]);
  const [admins, setAdmis] = useState(Admins);
  const navigate = useNavigate();
  const [showModel, setShowModal] = useState(false);

  const regresarMenu=() =>{
        window.location.href ="/menu-admin";
    }

// Para traer el listar los datos 
const reload = async () => {   
    const result = await listAdmin();
    setUserAdmin(result);
}

const hadleOpen = (u)=>{
  setShowModal(true);
  setAdmis(u);
}

const closeModal = ()=>{
  setShowModal(false);
}

useEffect(() =>{
  reload();
},[showModel]);

  return (
    <>
    
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
          <h2>Listado de Admins</h2>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Indentificador</th>
                <th>Rol</th>
                <th>User</th>
                <th>DPI</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>
              {data.map((u) =>{
                return(
                  <tr key={u._id}>
                    <td>{u._id}</td>
                    <td>{u.rol}</td>
                    <td>{u.user}</td>
                    <td>{u.dpi}</td>
                    <td>{u.cellPhone}</td>
                    <td>{u.email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
            <div className="d-grid gap-2 d-md-flex justify-content-md">
                <button type="button" className="btn btn-danger">Eliminar</button>
                <button className="btn btn-primary" type="button">Editar</button>
            </div>
        </div>
    </>
  )
}

export default CreateAdmin
