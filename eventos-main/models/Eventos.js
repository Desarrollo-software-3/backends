
import mongoose from "mongoose";

const eventoSchema = mongoose.Schema({
    imagen: String,
    titulo: String,
    ubicacion: String,
    fechaInicio: String,
    fechaFin:String,
    precio: Number,
    cantidadBoletos: Number,
    descipcion: String,
    creacionF: String

    
});


const Eventos = mongoose.model("Eventos", eventoSchema);
export default Eventos;
