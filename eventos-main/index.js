import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import { registrar, eliminarEvento,editarEvento,listarEventos,actualizarEvento,obtenerEvento,fzt} from "./controllers/proyecController.js";
import { guardar, obtenerComentarios } from "./controllers/comentarioController.js";
const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


const allowedOrigins = ['http://localhost:3000', 'https://azteca-proyecto-beta.vercel.app/'];
app.use(cors());


// Uso de la función middleware


app.post('/api/proyect', registrar);
app.get("/eventoscreados", listarEventos);
app.delete('/eventos/:id', eliminarEvento);
app.put('/eventos/:id', actualizarEvento);
app.get('/eventT/:id',obtenerEvento);
app.get('/prueba',fzt);
app.post('/editar/:id',editarEvento);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
