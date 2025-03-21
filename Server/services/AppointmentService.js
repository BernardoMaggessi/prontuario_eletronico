import AppointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointment = async() =>{
    return AppointmentRepository.getAllAppointment();
}
const getAppointment = async(id) =>{
    return AppointmentRepository.getAppointment(id);
}
const saveAppointment = async({date,doctorId,patientId,history}) => {
    return AppointmentRepository.saveAppointment({date,doctorId,patientId,history});
}
const updateAppointment = async(id, {date, doctorId, patientId}) => {
    return AppointmentRepository.updateAppointment(id, {date, doctorId, patientId,history});
}
const deleteAppointment = async(id) =>{
    return AppointmentRepository.deleteAppointment(id);
}
const getAppointmentsByDoctor = async(doctorId) =>{
    return AppointmentRepository.getAppointmentsByDoctor(doctorId);
}
const getAppointmentsByPatient = async(patientId) =>{
    return AppointmentRepository.getAppointmentsByPatient(patientId);
}
const AppointmentService = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByDoctor,
    getAppointmentsByPatient
}
export default AppointmentService;