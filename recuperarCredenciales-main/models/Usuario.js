import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    email: String,
    password: String,
    role: String,
    token:String,
   
});


const Usuario = mongoose.model("usuarios", usuarioSchema);
export default Usuario;
