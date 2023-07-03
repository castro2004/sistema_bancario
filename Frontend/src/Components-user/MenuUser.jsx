import React from 'react';
import { Link } from 'react-router-dom';
import viewdata_img from '../Components-user/img-user/view_data.png';
import viewSaldo_img from '../Components-user/img-user/view_saldo.png';
import historia_img from '../Components-user/img-user/historial_transacciones.png';
import favoritos_img from '../Components-user/img-user/favoritos.png';
import bank_img from '../Components-user/img-user/banco.png';
import transaccion_img from '../Components-user/img-user/transaccion-monetaria.png';
import '../Components-user/menuUser.css';


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
    <div id="div1">
      <div id="rock1"></div>
      <div id="rock2"></div>
      <div id="rock3"></div>
      <div id="rock4"></div>
      <div id="rock5"></div>
      <div id="rock6"></div>
      <div id="rock7"></div>
      <div id="rock8"></div>
      <div id="diva1">
        <Link to="/viewUserData-user">
        <img className="menu-img" src={viewdata_img} />
        </Link>
        <Link to="/viewBalance-user">
        <img className="menu-img" src={viewSaldo_img} />
        </Link>
        <Link to="/historyTransaction-user">
        <img className="menu-img" src={historia_img} />
        </Link>
        <Link to="/read-favorite">
        <img className="menu-img" src={favoritos_img} />
        </Link>
        <Link to="/create-transfencias">
        <img className="menu-img" src={transaccion_img} />
        </Link>
      </div>
    </div>
  );
};

export default MenuUser;



