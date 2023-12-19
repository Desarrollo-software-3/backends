import usuarios from "../models/Eventos.js";
import nodemailer from 'nodemailer';
import { nanoid } from 'nanoid';



const fzt = async (req, res) => {
  console.log('HOLA')
      res.json({ msg: 'HOLA' });
};
const Login = async (req, res) => {
  console.log('hola')
  try {
    const { email, password } = req.body;

    const user = await usuarios.findOne({ email });
    console.log(user)

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (user.password === password) {
      
      // Autenticación exitosa
      const userData = {
        id: user.id,
        email: user.email,
        role: user.role, // Agregar otros campos según sea necesario
      };

      return res.json({
        message: 'Inicio de sesión exitoso',
        user: userData,
        redirect_url: 'http://localhost:3000/profile',
      });
    } else {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }/**/
};

const agregarU =async (req, res) => {
  console.log('Solicitud recibida:', req.body);

  try {
    const { email, password, role, token } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await usuarios.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new usuarios({
      email,
      password,
      role,
      token
    });
 

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    // Enviar una respuesta exitosa
    res.json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

export {
    
    fzt,
    Login,
    agregarU
}