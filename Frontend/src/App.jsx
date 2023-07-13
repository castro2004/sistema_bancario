import React from 'react';
import { Login } from './Components-user/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './Components-user/LoginUser';
import MenuUser from './Components-user/MenuUser';
import HistoryTransactionUser from './Components-user/HistoryTransactionUser';
import CreateFavorite from './Components-user/CreateFavorite';
import ReadFavorite from './Components-user/ReadFavorite';
import UpdateFavorite from './Components-user/UpdateFavorite';
import DeleteFavorite from './Components-user/DeleteFavorite';
import CreateTransfencias from './Components-user/CreateTransfencias';
import LoginAdmin from './component-admin/LoginAdmin';
import MenuAdmin from './component-admin/MenuAdmin';
import CreateUser from './component-admin/CreateUser';
import ViewUserData from './component-admin/ViewData';
import ViewDataAdmin from './component-admin/ViewData';
import bank_img from '../src/Components-user/img-user/banco.png';
import C from './component-admin/CreateAdmin';
import CreateAdmin from './component-admin/CreateAdmin';
import '../src/Components-user/css-User/menuUser.css';
import OrderAcount from './component-admin/OrdenAcount';
import ViewUserDataUser from './Components-user/ViewUserDataUser';
import TransactionHistory from './Components-user/HistoryTransactionUser';
import ViewBalance from './Components-user/ViewBalanceUser';

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#1c5484' }}>
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            <Routes>
              {/* Routes for user */}
              <Route path="/login-user" element={<LoginUser />} />
              <Route path="/menu-user/*" element={<UserRoutes />} />

              {/* Routes for admin */}
              <Route path="/login-admin" element={<LoginAdmin />} />
              <Route path="/menu-admin" element={<MenuAdmin />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/viewData-admin" element={<ViewDataAdmin />} />
              <Route path="/createAdmin" element={<CreateAdmin />} />
              <Route path="/admin/accounts" element={<OrderAcount />} />
              <Route path='/viewUserData-user' element={<ViewUserDataUser/>}/>
              <Route path="/create-transfencias" element={<CreateTransfencias />} />
              <Route path="/historyTransaction-user" element={<TransactionHistory />} />
              <Route path="/viewBalance-user" element={<ViewBalance />} />
              <Route path="/view-favorite" element={<ReadFavorite />} />
              {/* Route for the main login */}
              <Route path="/login" element={<Login />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const UserRoutes = () => {
  return (
    <div>
      <MenuUser />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/create-favorite" element={<CreateFavorite />} />
        
        <Route path="/update-favorite" element={<UpdateFavorite />} />
        <Route path="/delete-favorite" element={<DeleteFavorite />} />
        
        
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <ul />
      <div>
        <ul />
        <center>
          <ul />
          <img className='home-content' src={bank_img} width={150} height={150} />
        </center>
      </div>
      <h2 className='-menu-title' style={{ textAlign: 'center' }}>MENU BANCARIO DEL USUARIO</h2>
    </>
  );
};

export const Home2 = () => {
  return (
    <div>
      <ul/>
          <center><ul/><img className='home-content4' src={bank_img} width={200} height={150} />
          </center>
    </div>
  )
}

export default App;







