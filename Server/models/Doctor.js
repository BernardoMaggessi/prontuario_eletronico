import mongoose from "mongoose";

const { Schema } = mongoose; // Correção na importação!

const doctorSchema = new Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId(), unique: true },
    name: {
        type: String,
        required: [true, "Doctor name is required"],
    },
    login: {
        type: String,
        required: [true, "Login is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    medicalSpecialty: { 
        type: String,
        required: [true, "Medical specialty is required"],
    },
    medicalRegistration: {
        type: String,
        required: [true, "Medical registration is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email contact is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone contact is required"],
        validate: {
            validator: function (v){
                return '/\d{2} 9\d{4}-\d{4}.test(v)';
            },
            message: props => `${props.value} this is not a valid phone number. Please use a following format 21 91234-3456`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Doctor = mongoose.model("Doctor", doctorSchema); // Nome do modelo no banco

export default Doctor;
