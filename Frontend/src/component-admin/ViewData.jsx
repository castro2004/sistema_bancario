import React, {useState, useEffect} from 'react';
// import { Admin } from "../component-admin/models/ModelAdmin";
import { listAdmin } from './api/Admin';

const ViewData = () => {
  const [Admins, setAdmins] = useState([]);
  const [ShowModal, setShowModal] = useState(false);

  const reload = async () => {
    const result = await listAdmin();
    setAdmins(result);
  };

  useEffect(() => {
    reload();
  }, [ShowModal]);

  return (
    <>
      <div
        style={{ paddingTop: "3%" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <div className="card">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user text-center">
            <div className="profile">
              <img
                src="https://i.imgur.com/JgYD2nQ.jpg"
                className="rounded-circle"
                width="80"
              />
            </div>
          </div>
          <div className="mt5 text-center">
            {Admins.map((u) => (
              <div key={u._id}>
                {/* <h4>ID: {u._id}</h4> */}
                <h3>Admin Details</h3>
                <h4>User: {u.user}</h4>
                <h4>Rol: {u.rol}</h4>
                <h4>DPI: {u.dpi}</h4>
                <h4>Telefóno: {u.cellPhone}</h4>
                <h4>Email: {u.email}</h4>
              </div>
            ))}
            <button className="btn btn-warning btn-sm follow mx-2">
             Editar
            </button>

            <button
              className="btn btn-primary btn-sm follow mx-2"
              onClick={() => (window.location.href = "/menu-admin")}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewData;
