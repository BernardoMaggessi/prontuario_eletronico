import mongoose from "mongoose";

const { Schema } = mongoose; // Correção na importação!

const PatientSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId(), unique: true }, 
    name: {
        type: String,
        required: [true, "Patient name is required"],
    },
    birthdate: {
        type: Date,
        required: [true, "Birthdate for patient is required"], 
    },
    email: {
        type: String,
        required: [true, "Email for the patient is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone contact is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
