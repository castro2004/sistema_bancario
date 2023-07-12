import axios from "axios";
const URL = "http://localhost:3007/api/";
const token = localStorage.getItem("token");


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

// Crear admin 
export const CreateAdmin = async (rol, user, password, dpi, cellPhone, email) =>{
    try{
        const adminSave = await axios.post(
            `${URL}create-admin`,
            {
                rol:rol,
                user:user,
                password:password,
                dpi:dpi,
                cellPhone:cellPhone,
                email:email,
            },
            { headers: { "x-token":token } }
        );
        return data;
    }catch({
        response:{
            data:{  message },
        },
    }){
        // Alerta que va a tirar cuando termine el token en la web
        if (message === "el token ha expirado") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: message,
              showConfirmButton: true,
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: message,
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

// Actualizar admin 
export const UpdateAdmin = async(id, rol, user, password, dpi, cellPhone, email)=>{
    try{
        const { data } = await axios.put(
            `${URL}update-admin/${id}`,
            {
                rol:rol,
                user:user,
                password:password,
                dpi:dpi,
                cellPhone:cellPhone,
                email:email,
            },
            { headers: { "x-token":token } }
        );
        return data;
    }catch({
        response:{
            data:{  message },
        },
    }){
        // Alerta que va a tirar cuando termine el token en la web
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
}

// Eliminar admin 
export const DeleteAdmin = async (id)=>{
    try {
        const { data } = await axios.delete(`${URL}delete-admin/${id}`, {
          headers: { "x-token": token },
        });
        return data;
      } catch ({
        response: {
          data: { message },
        },
      }) {
        if (message === "el token ha expirado") {
          localStorage.removeItem("token");
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
}