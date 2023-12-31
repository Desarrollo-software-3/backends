import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import { autenticar, registrar, olvidePassword,nuevoPassword, cambiarDatos} from "./controllers/usuarioController.js";


const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


// Habilitar CORS
app.use(cors());


app.post('/api/login', autenticar);
app.post('/api/resetDatos', cambiarDatos);
app.post('/api/register', registrar);

app.post('/api/resetPasword', olvidePassword);
app.post('/api/newPassword',nuevoPassword);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
