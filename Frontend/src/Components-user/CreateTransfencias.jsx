import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Link } from 'react-router-dom';
import viewdata_img from '../Components-user/img-user/view_data.png';
import viewSaldo_img from '../Components-user/img-user/view_saldo.png';
import historia_img from '../Components-user/img-user/historial_transacciones.png';
import favoritos_img from '../Components-user/img-user/favoritos.png';
import bank_img from '../Components-user/img-user/banco.png';
import transaccion_img from '../Components-user/img-user/transaccion-monetaria.png';
import '../Components-user/css-User/menuUser.css';
import img1 from '../Components-user/img-user/RL.jpg';
import img2 from '../Components-user/img-user/AT.jpg';
import img3 from '../Components-user/img-user/EP.jpg';
import banco from './img-user/banco.png';
import CS from '../Components-user/img-user/cerrar-sesion.png';
import menu from '../component-admin/img-admin/menu.png';
import img4 from '../Components-user/img-user/20944139.jpg';
import Swal from 'sweetalert'

// Resto del código del componente TransferForm

const mostrarAlerta=()=>{
  Swal({
    title: "Excelente",
    text: "Transferencia creada exitosamente",
    icon: "success",
    button: "Aceptar"
  })
}


const TransferForm = () => {
  const [cuentaOrigen, setCuentaOrigen] = useState('');
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3007/api/create-transfencias', {
        cuentaOrigen,
        cuentaDestino,
        monto,
        descripcion,
      });

      setMensaje(response.data.msg);
      // Aquí puedes actualizar el estado o realizar otras acciones después de la transferencia exitosa
    } catch (error) {
      setMensaje(error.response.data.msg);
      // Aquí puedes manejar el error de la transferencia
    }
  };

  return (
    <div>
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
                <span className="link_name">Usuario</span>
              </a>
              <ul className='sub-menu blank'>
                <li><a className="link_name" href="/createAdmin">Category</a></li>
              </ul>
            </li>
            <ul/>
            <li>
              <ul/>
              <ul/>
              <li>
                <div className="icon-link">
                  <a href="/viewUserData-user">
                    <i className='bx bx-book-alt'></i>
                    <span className="link_name">Ver mis datos</span>
                  </a>
                  <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <Link to="/viewUserData-user">
                  <img src={viewdata_img} width={70} />
                </Link>
              </li>
              <li>
                <a href="/viewBalance-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Saldo Actual</span>
                </a>
                <Link to="/viewBalance-user">
                  <img src={viewSaldo_img} width={70} />
                </Link>
              </li>
              <li>
                <a href="/historyTransaction-user">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Historial de transacciones</span>
                </a>
                <Link to="/historyTransaction-user">
                  <img src={historia_img} width={70} />
                </Link>
              </li>
              <li>
                <a href="/view-favorite">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Favoritos</span>
                </a>
                <Link to="/view-favorite">
                  <img src={favoritos_img} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/create-transfencias">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Crear transfencia</span>
                </a>
                <Link to="/create-transfencias">
                  <img src={transaccion_img} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/menu-admin">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Regresar al menu</span>
                </a>
                <Link to="/menu-admin">
                  <img src={menu} width={70}/>
                </Link>
              </li>
              <li>
                <a href="/login-admin">
                  <i className='bx bx-pie-chart-alt-2'></i>
                  <span className="link_name">Cerrar Sesion</span>
                </a>
                <Link to="/login-admin">
                  <img src={CS} width={70}/>
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
      <center>
        <div className=''>
      <center>
        <div className="container">
          <div className="decorative-title" style={{ marginTop: '-250px' }}>
            <div className="decorative-bar left vertical thick" ></div>
            <div className="decorative-bar left horizontal thick" style={{ marginTop: '-300px' }}></div>
            <div className="decorative-bar left horizontal thin"></div>

            <span><img src={transaccion_img} width={60}/> Crear Transferencia</span>

            <div className="decorative-bar right vertical thick" style={{ marginTop: '-300px' }}></div>
            <div className="decorative-bar right horizontal thick"></div>
            <div className="decorative-bar right horizontal thin"></div>
          </div>
        </div>
      </center>
      
        <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label style={{color: 'white'}} htmlFor="cuentaOrigen" className="form-label">
            Cuenta de Origen:
          </label>
          <input
            type="text"
            className="form-control"
            id="cuentaOrigen"
            value={cuentaOrigen}
            onChange={(e) => setCuentaOrigen(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label style={{color: 'white'}} htmlFor="cuentaDestino" className="form-label">
            Cuenta de Destino:
          </label>
          <input
            type="text"
            className="form-control"
            id="cuentaDestino"
            value={cuentaDestino}
            onChange={(e) => setCuentaDestino(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label style={{color: 'white'}} htmlFor="monto" className="form-label">
            Monto:
          </label>
          <input
            type="number"
            className="form-control"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label style={{color: 'white'}} htmlFor="descripcion" className="form-label">
            Descripción:
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button onClick={()=>mostrarAlerta()} type="submit" className="btn btn-primary">Realizar Transferencia</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
      </div>
    </center>
    </div>
  );
}
  

export default TransferForm;


