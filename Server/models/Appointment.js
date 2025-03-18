import mongoose from "mongoose";

const { Schema } = mongoose; // Aqui está a correção!

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, "Appointment date is required"],
    },
    doctorId: {
        type: String,
        required: [true, "DoctorId is required"],
    },
    patientId: {
        type: String,
        required: [true, "PatientId is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Appointment = mongoose.model("Appointment", appointmentSchema); // Corrigido o nome do modelo
export default Appointment;
