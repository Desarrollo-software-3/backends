
import mongoose from "mongoose";

const usuarioschema = mongoose.Schema({
    email: String,
    password: String,
    role: String,
    token: String

    
});


const Usuarios = mongoose.model("usuarios", usuarioschema);

export default Usuarios;
