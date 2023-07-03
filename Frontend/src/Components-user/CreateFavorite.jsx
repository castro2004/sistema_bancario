import React, { useState } from 'react';

const CreateFavorite = () => {

  return (
    <form>
      <div className="form-group">
        <label htmlFor="alias">Alias:</label>
        <input
          type="text"
          className="form-control"
          id="alias"
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">Número de cuenta:</label>
        <input
          type="text"
          className="form-control"
          id="accountNumber"
        />
      </div>
      <br/>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default CreateFavorite;
