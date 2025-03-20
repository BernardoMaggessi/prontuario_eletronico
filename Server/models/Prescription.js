import mongoose from "mongoose";

const { Schema } = mongoose;

const prescriptionSchema = new Schema({
   
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId, 
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
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    file:{
        
    }
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);
export default Prescription;
