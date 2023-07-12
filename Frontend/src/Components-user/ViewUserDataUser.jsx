import '../Components-user/css-User/viewUserDataUser.css';

const ViewUserDataUser = () => {
  return (
<>
    <div className="fom">
    <form action="#">
    <div className="form-title">Visualización de Datos</div>

      <div className="main-user-info">
        <div className="user-input-box">
          <label htmlFor="fullName"> Nombre</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Ver el Nombre"
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="username">Correo Electrónico</label>
          <input
            type="text"
            id="Correo"
            name="Correo"
            placeholder="correo electrónico
            "
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="Contraseña">Contraseña.</label>
          <input
            type="Contraseña"
            id="Contraseña"
            name="Contraseña"
            placeholder="Enter Contraseña"
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="DPI">DPI</label>
          <input
            type="text"
            id="DPI"
            name="DPI"
            placeholder="Enter DPI"
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="Número de Cuenta">Número de Cuenta</label>
          <input
            type="password"
            id="Número de Cuenta"
            name="Número de Cuenta"
            placeholder="Enter Número de Cuenta"
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="Teléfono móvil">Teléfono móvil
          </label>
          <input
            type="Teléfono móvil"
            id="Teléfono móvil"
            name="Teléfono móvil
            "
            placeholder="Confirm Teléfono móvil "
          />
        </div>

        <div className="user-input-box">
          <label htmlFor="Teléfono móvil">Ingreso al Mes</label>
          <input
            type="ingreso"
            id=" ingreso"
            name="ingreso"
            placeholder="Confirmar el ingreso al mes "
          />
        </div>
        
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">Regresar</button>
      </div>
    </form>
    
  </div>
 
</>

  )
}


export default ViewUserDataUser;
