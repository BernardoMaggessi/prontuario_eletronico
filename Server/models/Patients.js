import mongoose from "mongoose";

const { Schema } = mongoose; // Correção na importação!

const PatientSchema = new Schema({
    
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
        validate:{
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },message:"Please provide a valid email adress."
        }
    },
    phone: {
        type: String,
        required: [true, "Phone contact is required"],
        validate: {
            validator: function (v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v); // Corrigido
            },
            message: props => `${props.value} is not a valid phone number. Please use the following format: 21 91234-3456`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
