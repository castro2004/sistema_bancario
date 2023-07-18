import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import viewdata_img from '../Components-user/img-user/view_data.png';
import viewSaldo_img from '../Components-user/img-user/view_saldo.png';
import historia_img from '../Components-user/img-user/historial_transacciones.png';
import favoritos_img from '../Components-user/img-user/favoritos.png';
import transaccion_img from '../Components-user/img-user/transaccion-monetaria.png';
import '../Components-user/css-User/menuUser.css';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import banco from '../Components-user/img-user/banco.png';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import datos from '../Components-user/img-user/informe.png';
import menu from '../component-admin/img-admin/menu.png';
import img4 from '../Components-user/img-user/20944139.jpg';
import Swal from 'sweetalert';

const alertaDelete = () => {
  Swal({
    title: 'Excelente',
    text: 'Administrador eliminado exitosamente',
    icon: 'success',
    button: 'Aceptar',
  });
};

const ViewDataAdmin = () => {
  const [adminData, setAdminData] = useState(null);
  const [updatedAdminData, setUpdatedAdminData] = useState(null);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const deleteAdmin = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Acceso no autorizado');
      }

      const response = await fetch('http://localhost:3007/api/delete-admin', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          token: token,
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el administrador');
      }

      const data = await response.json();
      setAdminData(null);
      alertaDelete();
      setDeleted(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateAdmin = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Acceso no autorizado');
      }

      const response = await fetch('http://localhost:3007/api/update-admin', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          token: token,
        },
        body: JSON.stringify({ token, ...updatedAdminData }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el administrador');
      }

      const data = await response.json();
      setAdminData(data.admin);
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    }
  };

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
            token: token,
          },
        });

        if (!response.ok) {
          throw new Error('Administrador no encontrado');
        }

        const data = await response.json();
        setAdminData(data.admin);
        setUpdatedAdminData(data.admin);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setUpdatedAdminData({
      ...updatedAdminData,
      [e.target.name]: e.target.value,
    });
  };

  if (deleted) {
    return <Link to="/login-admin" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!adminData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxs-pyramid'></i>
        </div>
        <img src={banco} width={250} />
        <ul className='nav-links'>
          <li>
            <a>
              <i className='bx bx-grid-alt'></i>
              <span className="link_name">ADMINSTRADOR</span>
              <i className='bx bxs-chevron-down arrow'></i>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a className="link_name" href="/view-favorite">Category</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="/viewUserData-user">
                <i className='bx bx-book-alt'></i>
                <span className="link_name">Ver mis datos</span>
              </a>
            </div>
            <Link to="/viewUserData-user">
              <img src={viewdata_img} width={70} />
            </Link>
          </li>
          <li>
            <div className="icon-link">
              <a href="/viewBalance-user">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Saldo Actual</span>
              </a>
            </div>
            <Link to="/viewBalance-user">
              <img src={viewSaldo_img} width={70} />
            </Link>
          </li>
          <li>
            <div className="icon-link">
              <a href="/historyTransaction-user">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Historial de transacciones</span>
              </a>
            </div>
            <Link to="/historyTransaction-user">
              <img src={historia_img} width={70} />
            </Link>
          </li>
          <li>
            <div className="icon-link">
              <a href="/view-favorite">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Favoritos</span>
              </a>
            </div>
            <Link to="/view-favorite">
              <img src={favoritos_img} width={70} />
            </Link>
          </li>
          <li>
            <div className="icon-link">
              <a href="/create-transfencias">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Crear transfencia</span>
              </a>
            </div>
            <Link to="/create-transfencias">
              <img src={transaccion_img} width={70} />
            </Link>
          </li>
          <li>
            <div className="icon-link">
              <a href="/menu-user">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Regresar al menu</span>
              </a>
            </div>
            <Link to="/menu-user">
              <img src={menu} width={70} />
            </Link>
          </li>
          <li>
            <div className="icon-link">
              <a href="/login-user">
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="link_name">Cerrar Sesion</span>
              </a>
            </div>
            <Link to="/login-user">
              <img src={CS} width={70} />
            </Link>
          </li>
        </ul>
      </div>
      <center>
      </center>
      <div style={{ marginLeft: 'auto', marginRight: '100px', marginTop: '10px', width: '910px', height: '550px' }} className="card">
        <center>
          <img src={datos} width={200} height={200} style={{ marginTop: '20px' }} />
          <ul />
          <p>
            <strong className="font-weight-bold">Nombre:</strong>
            {isEditing ? (
              <input
                type="text"
                name="user"
                value={updatedAdminData.user}
                onChange={handleInputChange}
              />
            ) : (
              adminData.user
            )}
          </p>
          <p>
            <strong className="font-weight-bold">Password:</strong>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={updatedAdminData.password}
                onChange={handleInputChange}
              />
            ) : (
              adminData.password
            )}
          </p>
          <p>
            <strong className="font-weight-bold">Dpi:</strong>
            {isEditing ? (
              <input
                type="text"
                name="dpi"
                value={updatedAdminData.dpi}
                onChange={handleInputChange}
              />
            ) : (
              adminData.dpi
            )}
          </p>
          <p>
            <strong className="font-weight-bold">Rol:</strong>
            {isEditing ? (
              <select
                name="rol"
                value={updatedAdminData.rol}
                onChange={handleInputChange}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            ) : (
              adminData.rol
            )}
          </p>
          <p>
            <strong className="font-weight-bold">CellPhone:</strong>
            {isEditing ? (
              <input
                type="text"
                name="cellPhone"
                value={updatedAdminData.cellPhone}
                onChange={handleInputChange}
              />
            ) : (
              adminData.cellPhone
            )}
          </p>
          <p>
            <strong className="font-weight-bold">Email:</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={updatedAdminData.email}
                onChange={handleInputChange}
              />
            ) : (
              adminData.email
            )}
          </p>
          {isEditing ? (
            <button onClick={updateAdmin}>GUARDAR</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>EDITAR</button>
          )}
          <button type="submit" onClick={deleteAdmin}>
            ELIMINAR CUENTA
          </button>
        </center>
      </div>
    </div>
  );
};

export default ViewDataAdmin;

















