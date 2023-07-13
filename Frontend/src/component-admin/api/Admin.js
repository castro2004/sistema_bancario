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
    