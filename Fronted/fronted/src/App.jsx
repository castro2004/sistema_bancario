import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Components-user/Login';
import MenuUser from './Components-user/MenuUser';
import ViewUserDataUser from './Components-user/ViewBalanceUser';
import UpdateUser from './Components-user/UpdateUser';
import ViewBalanceUser from './Components-user/ViewBalanceUser';
import HistoryTransactionUser from './Components-user/HistoryTransactionUser';
import CreateFavorite from './Components-user/CreateFavorite';
import ReadFavorite from './Components-user/ReadFavorite';
import UpdateFavorite from './Components-user/UpdateFavorite';
import DeleteFavorite from './Components-user/DeleteFavorite';
import CreateTransfencias from './Components-user/CreateTransfencias';
import LoginUser from './Components-user/LoginUser';
import LoginAdmin from './component-admin/LoginAdmin';
import MenuAdmin from './component-admin/MenuAdmin';
import CreateUser from './component-admin/CreateUser';

const App = () => {
  
  return (
    <Router>
      <div className="bg-white min-vh-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            <div className="card shadow bg-white">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Bienvenidos</h1>

                <Routes>
                {/* -----------------------------------------Routes User----------------------------------- */}
                  <Route path="/login-user" element={<LoginUser />} />
                  <Route path="/login-admin" element={<LoginAdmin/>}/> 
                  <Route path="/menu-user" element={<MenuUser/>} />
                  <Route path="/viewBalance-user" element={<ViewUserDataUser/>} />
                  <Route path="/update-user" element={<UpdateUser/>} />
                  <Route path="/viewBalance-user" element={<ViewBalanceUser/>} />
                  <Route path="/historyTransaction-user" element={<HistoryTransactionUser/>} />
                  <Route path="/create-favorite" element={<CreateFavorite/>} />
                  <Route path="/read-favorite" element={<ReadFavorite/>} />
                  <Route path="/update-favorite" element={<UpdateFavorite/>} />
                  <Route path="/delete-favorite" element={<DeleteFavorite/>} />
                  <Route path="/create-transfencias" element={<CreateTransfencias/>} />
                  <Route path="/menu-admin" element={<MenuAdmin/>} />

                {/* -----------------------------------------Routes Admin----------------------------------- */}
                
                <Route path="/create-user" element={<CreateUser/>} />
                

                </Routes>

                <div className="text-center mt-4">
                  <Link to="/login-user" className="btn btn-primary mx-2">Iniciar sesión como usuario</Link>
                  <Link to="/login-admin" className="btn btn-secondary mx-2">Iniciar sesión como administrador</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Router>
  );
};

export default App;