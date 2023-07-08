import React from 'react'

const UpadateAdmin = () => {
  return (
    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
          <h2>Listado de Admins</h2>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th> </th>
                <th>User</th>
                <th>Gmail</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
                <tr>hola</tr>
              {/* { userAdmin &&  userAdmin.map(adminActual=>{
                return(
                  <tr key={adminActual._id}>
                    <td>{adminActual.user}</td>
                    <td>{adminActual.email}</td>
                    <td>{adminActual.telefono}</td>
                  </tr>
                )
              })} */}
            </tbody>
          </table>
            <div className="d-grid gap-2 d-md-flex justify-content-md">
                <button className="btn btn-primary" type="button">Editar</button>
            </div>
        </div>
  )
}

export default UpadateAdmin
