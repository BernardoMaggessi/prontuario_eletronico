import mongoose from "mongoose";

const { Schema } = mongoose;

const prescriptionSchema = new Schema({
    prescriptionId: {
        type: mongoose.Schema.Types.ObjectId, // Usa ObjectId ao invés de String
        default: () => new mongoose.Types.ObjectId(), // Garante um ID único automático
        unique: true,
    },
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId, // Relacionamento correto com `Appointment`
        ref: "Appointment",
        required: [true, "AppointmentId is required for prescription"],
    },
    medicine: {
        type: String,
        required: [true, "Medicine is required for prescription"],
    },
    dosage: {
        type: String,
        required: [true, "Dosage is required"],
    },
    instructions: {
        type: String,
        required: false, // Explicitamente opcional
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);
export default Prescription;
