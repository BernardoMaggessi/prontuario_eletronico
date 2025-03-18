import mongoose from "mongoose";

const { Schema } = mongoose; // Correção na importação

const prescriptionSchema = new Schema({
    date: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId(), unique: true },
    prescriptionId: {
        type: String,
        required: [true, "Id is required for prescription"], // Correção da mensagem
    },
    appointmentId: {
        type: String,
        required: [true, "AppointmentId is required for prescription"], // Correção na mensagem
    },
    medicine: {
        type: String,
        required: [true, "Medicine is required for prescription"], // Correção na mensagem
    },
    dosage: {
        type: String,
        required: [true, "Dosage is required"],
    },
    instructions: {
        type: String,
        required: false, // Correção do `required`
    },
    createdAt: {
        type: Date,
        default: Date.now, // Correção `date.now` para `Date.now`
    },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema); // Nome da coleção corrigido
export default Prescription;
