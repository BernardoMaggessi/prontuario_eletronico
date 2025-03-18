import AppointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointment = async() =>{
    return AppointmentRepository.getAllAppointment();
}
const getAppointment = async(id) =>{
    return AppointmentRepository.getAppointment(id);
}
const saveAppointment = async({date,doctorId,patientId}) => {
    return AppointmentRepository.saveAppointment({date,doctorId,patientId});
}
const updateAppointment = async(id, {date, doctorId, patientId}) => {
    return AppointmentRepository.updateAppointment(id, {date, doctorId, patientId});
}
const deleteAppointment = async(id) =>{
    return AppointmentRepository.deleteAppointment(id);
}

const AppointmentService = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}
export default AppointmentService;