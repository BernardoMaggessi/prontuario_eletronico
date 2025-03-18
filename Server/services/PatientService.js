import PatientRepository from "../repositories/PatientRepository.js";

const getAllPatients = async() =>{return PatientRepository.getAllPatients()};

const getPatient = async(id) =>{return PatientRepository.getPatient(id)};

const savePatient = async({name,birthdate,email,phone})=>{return PatientRepository.savePatient({name,birthdate,email,phone})};

const deletePatient =async(id) =>{
    return PatientRepository.deletePatient(id);
}
const PatientService = {
    getAllPatients,
    getPatient,
    savePatient,
    deletePatient
}

export default PatientService;