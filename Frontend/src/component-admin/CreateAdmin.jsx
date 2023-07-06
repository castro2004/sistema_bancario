import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { listAdmin } from './api/Admin';
import { Admins } from './models/ModelAdmis';
import  EditIcon  from "@mui/icons-material/Edit";
import  DeleteIcon  from "@mui/icons-material/DeleteOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";


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
        <div className="col text-center bg-white">
          <h2>Listado de Admins</h2>
          <table className="table table-hover table-bordered table-dark">
            <thead>
              <tr>
                <th>Indentificador</th>
                <th>Rol</th>
                <th>User</th>
                <th>DPI</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.map((u) =>{
                return(
                  <tr key={u._id}>
                    <td>{u._id}</td>
                    <td>{u.rol}</td>
                    <td>{u.user}</td>
                    <td>{u.dpi}</td>
                    <td>{u.cellPhone}</td>
                    <td>{u.email}</td>
                      {/* boton de editar  */}
                    <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(u)}
                    >
                      <EditIcon></EditIcon>
                    </button>
                    {/* boton de eliminar  */}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(u._id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                    {/* boton de ver el perfil  */}
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        profile(u);
                      }}
                    >
                      <VisibilityIcon></VisibilityIcon>
                    </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default CreateAdmin
