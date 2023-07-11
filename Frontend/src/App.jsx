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
import ViewUserData from './component-admin/ViewData';
import ViewDataAdmin from './component-admin/ViewData';
import bank_img from '../src/Components-user/img-user/banco.png'
import C from './component-admin/CreateAdmin';
import CreateAdmin from './component-admin/CreateAdmin';'../src/App.css'
import '../src/Components-user/css-User/menuUser.css'

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: ' #2a395c ' }}>
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            {/* <div className="card shadow bg-white"> */}
              {/* <div className="card-body"> */}
                <Routes>
                  {/* Routes for user */}
                  <Route style={{backgroundColor: 'white'}} path="/login-user" element={<LoginUser/>} />
                  <Route path="/menu-user" element={<UserRoutes />} />

                  {/* Routes for admin */}
                  <Route path="/login-admin" element={<LoginAdmin />} />
                  <Route path="/menu-admin" element={<MenuAdmin />} />
                  <Route path="/create-user" element={<CreateUser />} />
                  <Route path='/viewData-admin' element={<ViewDataAdmin/>}/>
                  <Route path='/createAdmin' element={<CreateAdmin/>}/>
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
          <center><ul/><img className='home-content4' src={bank_img} width={200} height={150} />
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





