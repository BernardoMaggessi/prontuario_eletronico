import Patient from "../models/Patients.js";

const getAllPatients = async () =>{
    return await getAllPatients.find();
}

const getPatient = async(id) =>{
    try{
        return await Patient.findById(id);
    }catch(error){
        throw new Error(error);
    }
}

const savePatient = async({name,birthdate,email,phone}) =>{
    try{
        const patient = new Patient({name,birthdate,email,phone});
        return await patient.save();
    }catch(error){
        throw new Error(error);
    }
}

const updatePatient = async(id, {name,birthdate,email,phone}) =>{
    try{
        return await Patient.findByIdAndUpdate(id,{name,birthdate,email,phone},{new:true});
    }catch(error){
        throw new Error(error);
    }
}

const deletePatient = async (id) =>{
    try{
        return Patient.findByIdAndDelete(id);
    }catch(error){
        throw new Error(error);
    }
}

const PatientRepository = {
    getAllPatients,
    getPatient,
    savePatient,
    updatePatient,
    deletePatient
}
export default PatientRepository;