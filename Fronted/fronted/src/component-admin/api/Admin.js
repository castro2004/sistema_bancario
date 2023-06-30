import axios from "axios";

const URL = "http://localhost:3008/api/"
const token = localStorage.getItem("token");

// Listar
export const listAdmin = async()=>{
    try{
        const{data:{admins}} =await axios.get(`${URL}list-admin`)
        console.log(admins);
        return admins;
    }catch(err){
        throw new Error(err);
    }
}