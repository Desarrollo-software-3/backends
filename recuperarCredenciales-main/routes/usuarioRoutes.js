import express from 'express'
import {
    registrar,
    confirmar,
    autenticar,
    olvidePassword
} from '../controllers/usuarioController.js'
import cors from 'cors';


const router = express();
// Habilitar CORS
app.use(cors());

//area publica
router.post('/', registrar);
router.post('/login', autenticar);
router.post('/recuperar',olvidePassword)
//area privada
//router.get('/perfil', checkAuth, perfil);

export default router;