import axios from "axios";
const URL = "http://localhost:3007/api/";


// Listar
export const listAdmin = async()=>{
    try {
        const { data } = await axios.get(`${URL}list-admin`);
        if (data.admin) {
          console.log(data.admin);
          return data.admin;
        } else {
          console.log("No se encontraron datos de administradores");
          return [];
        }
      } catch (error) {
        console.log("Error al obtener los datos de administradores:", error);
        return [];
      }
    };

    // Eliminar admin 
export const DeleteAdmin = async (id) => {
      try {
        const { data } = await axios.delete(`${URL}delete-admin/${id}`);
        return true;
      } catch ({
        response: {
          data: { message },
        },
      }) {
        if (message === "el token ha expirado") {
          // localStorage.removeItem("token");
          window.location.href = "/login";
        }
        if (message) {
          return message;
        }
      }
    };
    
// Buscar admin 
export const searchAdmin = async (id)=>{
    try{
        const {data} = await axios.get(
            `${URL}update-admin/${id}`
        );
        return data;
    }catch (erro){
        return(erro);
    }
};

// Editar admin 
export const UpdateAdmin = async (id, user, email, password, rol, dpi, cellphone,) => {
  try {
    const { data } = await axios.put(
      `${URL}update-user/${id}`,
      {
        user,
        email,
        password,
        rol,
        dpi,
        cellphone,
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    console.log(message.password.msg);
    if (message === "el token ha expirado") {
      localStorage.removeItem("token");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        } else if (result.isDenied) {
          window.location.href = "/login";
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message.password.msg ? message.password.msg : message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
        } else {
        }
      });
    }
  }
};