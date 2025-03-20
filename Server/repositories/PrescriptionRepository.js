import Prescription from "../models/Prescription.js";

const getAllPrescriptions = async() =>{
    return await Prescription.find();
}

const getPrescription = async(id) =>{
    try{
        return await Prescription.findById(id);
    }catch(error){
        throw new Error(error);
    }
}

const savePrescription = async({date,appointmentId,medicine,dosage,instructions,file})=>{
    try{
        const prescription = new Prescription({date,appointmentId,medicine,dosage,instructions,file});
        return await prescription.save();
    }catch(error){
        throw new Error(error);
    }
}

const updatePrescription = async(id, {date,appointmentId,medicine,dosage,instructions,file}) =>{
    try{
        return await Prescription.findByIdAndUpdate(id,{date,appointmentId,medicine,dosage,instructions,file});
    }catch(error){
        throw new Error(error);
    }
}

const deletePrescription = async(id) =>{
    try{
        return Prescription.findByIdAndDelete(id);
    }catch(error){
        throw new Error(error);
    }
}

const PrescriptionRepository = {
    getAllPrescriptions,
    getPrescription,savePrescription,
    updatePrescription,deletePrescription
}
export default PrescriptionRepository;