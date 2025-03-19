import mongoose from "mongoose";
import Doctor from "./Doctor.js";

const { Schema } = mongoose; // Aqui está a correção!

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, "Appointment date is required"],
        validate: {
            validator: function (v) {
                return v > new Date();
            },
            message: "Appointment date must be in the future",
        },
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId, // Define como ObjectId diretamente
        ref: "Doctor", // Faz referência ao modelo Doctor
        required: [true, "DoctorId is required"],
        validate: {
            validator: async function (v) {
                return await mongoose.model("Doctor").exists({ _id: v });
            },
            message: (props) => `${props.value} Doctor ID is not valid`,
        },
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId, // Mantém o padrão de ObjectId para relacionamentos
        ref: "Patient", // Faz referência ao modelo Patient
        required: [true, "PatientId is required"],
    },
    history:{
        type:String,
        required:false
    },
    status: {
        type: String,
        enum: ["scheduled", "completed", "canceled"],
        default: "scheduled",
        required:false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Appointment = mongoose.model("Appointment", appointmentSchema); // Corrigido o nome do modelo
export default Appointment;
