import React from 'react';
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
import Login from './Components-user/Login';
import bank_img from '../src/Components-user/img-user/banco.png'
import '../src/App.css'
import '../src/Components-user/menuUser.css'
import CreateAdmin from './component-admin/CreateAdmin';
import EliminarAdmin from './component-admin/EliminarAdmin';
import UpadateAdmin  from './component-admin/UpadateAdmin';
import OrdenAcount from './component-admin/OrdenAcount';

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#366276' }}>
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            {/* <div className="card shadow bg-white"> */}
              {/* <div className="card-body"> */}
                <Routes>
                  {/* Routes for user */}
                  <Route path="/login-user" element={<LoginUser/>} />
                  <Route path="/menu-user/*" element={<UserRoutes />} />

                  {/* Routes for admin */}
                  <Route path="/login-admin" element={<LoginAdmin />} />
                  <Route path="/menu-admin" element={<MenuAdmin />} />
                  <Route path="/create-user" element={<CreateUser />} />
                  <Route path="/create-admin" element={<CreateAdmin />} />
                  <Route path="/delete-admin" element={< EliminarAdmin />} />
                  <Route path="/update-admin" element={< UpadateAdmin  />} />
                  <Route path="/accounts-admin" element={< OrdenAcount  />} />

                  {/* Route for the main login */}
                  <Route path="/" element={<Login />} />
                  {/* <Route path="/" element={<Home />} /> */}
                </Routes>
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export const UserRoutes = () => {
  return (
    <div>
      <MenuUser />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/historyTransaction-user" element={<HistoryTransactionUser />} />
        <Route path="/create-favorite" element={<CreateFavorite />} />
        <Route path="/read-favorite" element={<ReadFavorite />} />
        <Route path="/update-favorite" element={<UpdateFavorite />} />
        <Route path="/delete-favorite" element={<DeleteFavorite />} />
        <Route path="/create-transfencias" element={<CreateTransfencias />} />
      </Routes>
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <ul/>
      <div>
        <ul/>
          <center><ul/><img className='home-content' src={bank_img} width={150} height={150} />
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
          <center><ul/><img className='home-content4' src={bank_img} width={150} height={150} />
          </center>
    </div>
  )
}

const HomeA = () => {
  return (
    <div>
      <h2 className='-menu-title' style={{ textAlign: 'center' }}>MENU BANCARIO</h2>
      
    </div>
  );
};

export default App;





