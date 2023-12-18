import Eventos from "../models/Eventos.js";
import nodemailer from 'nodemailer';
import { nanoid } from 'nanoid';


//Registro de evento
const registrar = async (req, res) => {
    const {titulo} = req.body
    console.log(titulo)
    //prevenir usuarios duplicados
    const existeUsuario = await Eventos.findOne({titulo})

    if (existeUsuario) {
        const error = new Error('Evento ya registrado');
        return res.status(400).json({msg: error.message});
    }

    try {
        //Guardar un nuevo Usuario
        const usuario = new Eventos(req.body);
        const usuarioGuardado = await usuario.save();

        res.json(usuarioGuardado);
     
        
    } catch (error) {
        console.log(error)
    }
};

//Traer eventos
const listarEventos = async (req, res) => {
  try {
    const eventos = await Eventos.find();
    res.json(eventos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de eventos' });
  }
};

const eliminarEvento = async (req, res) => {
  const eventoId = req.params.id; // ID del evento a eliminar

  try {
    const resultado = await Eventos.findByIdAndRemove(eventoId); // Encuentra y elimina el evento por su ID

    if (!resultado) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }

    res.json({ msg: 'Evento eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el evento' });
  }
};



//actualizar datos del evento
const actualizarEvento = async (req, res) => {
  const eventoId = req.params.id;
  const { nuevoTitulo, nuevaDescripcion, nuevaFechaInicio, nuevaFechaFin } = req.body; 

  try {
    const eventoActualizado = await Eventos.findByIdAndUpdate(
      eventoId,
      { titulo: nuevoTitulo, descripcion: nuevaDescripcion, fechaInicio: nuevaFechaInicio, fechaFin: nuevaFechaFin },
      { new: true }
    );

    if (!eventoActualizado) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }

    res.json({ msg: 'Evento actualizado exitosamente', evento: eventoActualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al actualizar el evento' });
  }
};












const obtenerEvento = async (req, res) => {
 
  const eventoId = req.params.id; // ID del evento a obtener

  try {
    const eventos = await Eventos.findById(eventoId); // Buscar por el campo 'id'
   
    if (!eventos) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }

    res.json(eventos); // Enviar el evento encontrado como respuesta
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el evento' });
  }
};


const editarEvento = async (req, res) => {
  const {titulo} = req.body  
  const eventoId = req.params.id
   console.log(titulo)

  

  try {
      const resultado = await Eventos.findByIdAndRemove(eventoId); 
      const usuario = new Eventos(req.body);
      const usuarioGuardado = await usuario.save();

      res.json(usuarioGuardado);
      res.json({ msg: 'Evento eliminado exitosamente' });

      
  } catch (error) {
      console.log(error)
  }
};
const fzt = async (req, res) => {
  console.log('HOLA')
      res.json({ msg: 'HOLA' });
};


export {
    registrar,
    listarEventos,
    eliminarEvento,
    actualizarEvento,
    obtenerEvento,
    editarEvento,
    fzt
}