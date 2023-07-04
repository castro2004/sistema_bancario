import axios from "axios";
const URL = "http://localhost:3008/api/";
const token = localStorage.getItem("token");

// Listar
export const listAdmin = async()=>{
    try{
        const{data:{userAdmin}} =await axios.get(`${URL}list-admin`)
        console.log(userAdmin);
        return userAdmin;
    }catch({response :{data}}){
        return data.messge;
    }
}