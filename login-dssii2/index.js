import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import { fzt,Login,agregarU} from "./controllers/proyecController.js";
const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


const allowedOrigins = ['http://localhost:3000', 'https://azteca-proyecto-beta.vercel.app/',];
app.use(cors({
    origin: '*', // Configura '*' para permitir cualquier URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

// Uso de la función middleware



app.get('/prueba',fzt);
app.post('/api/login',Login);
app.post('/api/signup',agregarU);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
