import React from 'react'

const CreateTransfencias = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="alias">Cuenta de origen</label>
        <input
          type="text"
          className="form-control"
          id="alias"
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">Cuenta de destino:</label>
        <input
          type="text"
          className="form-control"
          id="accountNumber"
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">Monto:</label>
        <input
          type="text"
          className="form-control"
          id="accountNumber"
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">Descripcion (opcional):</label>
        <input
          type="text"
          className="form-control"
          id="accountNumber"
        />
      </div>
      <br/>
      <button type="submit" className="btn btn-primary">Transferir</button>
    </form>
  );
};

export default CreateTransfencias
