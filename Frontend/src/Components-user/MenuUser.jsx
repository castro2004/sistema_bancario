import React from 'react';
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


const MenuUser = () => {
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    color: '#000',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <div className='navbar-container'>
      <nav className="horizontal-navbar">
      <img src={banco} alt="Banco" width={200} className="navbar-item" style={{marginLeft:"30px"}}/>
      <h1 style={{color: " white  "}}>SISTEMA BANCARIO</h1>
      <ul className="navbar-items">
          <li className="navbar-item">
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/viewUserData-user" className="navbar-link">
              <div className="menu-item">
                <img className='menu-img' src={viewdata_img}/>
                <h1 className='smaller-text'>Ver mis datos</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/viewBalance-user" className="navbar-link">
              <div className="menu-item">
                <img className='menu-img' src={viewSaldo_img} alt="Button" />
                <h1 className='smaller-text'>Ver mi saldo actual</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to='/historyTransaction-user' className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={historia_img} alt="Button" />
                <h1 className='smaller-text'>Ver mi historia de transacciones</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/read-favorite" className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={favoritos_img} alt="Button" />
                <h1 className='smaller-text'>Favoritos</h1>
              </div>
            </Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/create-transfencias" className="navbar-link">
              <div className="menu-item">
                <img className="menu-img" src={transaccion_img} alt="Button" />
                <h1 className='smaller-text'>Realizar transferencias</h1>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <center>
        <div>
          <ul />
          <img src={banco} width={450} alt="" />
          <p className="welcome-text">Bienvenidos este es nuestro proyecto para un sistema Bancario</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className='card'>
            <div className='polaroid'>
              <img src={img1} width={430} />
              <ul />
              <p>Programa citas en linea</p>
            </div>
          </div>
          <div className='card'>
            <div className='polaroid'>
              <img src={img2} width={407} />
              <ul />
              <p>Atencion al cliente</p>
            </div>
          </div>
          <div className='card'>
            <div className='polaroid'>
              <img src={img3} width={320} />
              <ul />
              <p>Atencion al cliente</p>
            </div>
          </div>
        </div>
      </center>
    </div>
    // <div id="div1">
    //   <div id="rock1"></div>
    //   <div id="rock2"></div>
    //   <div id="rock3"></div>
    //   <div id="rock4"></div>
    //   <div id="rock5"></div>
    //   <div id="rock6"></div>
    //   <div id="rock7"></div>
    //   <div id="rock8"></div>
    //   <div id="diva1">
    //     <Link to="/viewUserData-user">
    //     <img className="menu-img" src={viewdata_img} />
    //     </Link>
    //     <Link to="/viewBalance-user">
    //     <img className="menu-img" src={viewSaldo_img} />
    //     </Link>
    //     <Link to="/historyTransaction-user">
    //     <img className="menu-img" src={historia_img} />
    //     </Link>
    //     <Link to="/read-favorite">
    //     <img className="menu-img" src={favoritos_img} />
    //     </Link>
    //     <Link to="/create-transfencias">
    //     <img className="menu-img" src={transaccion_img} />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default MenuUser;



