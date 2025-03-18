import PrescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async() =>{return PrescriptionRepository.getAllPrescriptions()};

const getPrescription = async(id) =>{return PrescriptionRepository.getPrescription(id)};

const savePrescription = async({date,appointmentId,medicine,dosage,instructions}) =>{
    return PrescriptionRepository.savePrescription({date,appointmentId,medicine,dosage,instructions});
}
const updatePrescription = async(id,{date,appointmentId,medicine,dosage,instructions}) =>{
    return PrescriptionRepository.updatePrescription(id,{date,appointmentId,medicine,dosage,instructions});
}
const deletePrescription = async(id) =>{return PrescriptionRepository.deletePrescription(id)};

const PrescriptionService = {
    getAllPrescriptions,getPrescription, 
    savePrescription,updatePrescription,deletePrescription 
}
export default PrescriptionService;