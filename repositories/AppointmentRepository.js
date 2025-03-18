
import Appointment from "../models/Appointment.js";

const getAllAppointment = async () => {
    return await Appointment.find();
}

const getAppointment = async (id) => {
    try{
        return await Appointment.findById(id);
    }catch(error){
        throw new Error(error);
    }
}

const saveAppointment = async ({date,doctorId, patientId}) => {
    try{
        const appointment = new Appointment({date, doctorId, patientId});
        return await appointment.save();
    }catch(error){
        throw new Error(error);
    }
}

const updateAppointment = async(id, {date, doctorId, patientId}) => {
    try{
        return await Appointment.findByIdAndUpdate(id,{date, doctorId, patientId},{new:true});
    }catch(error){
        throw new Error(error);
    }
}

const deleteAppointment = async (id) =>{
    try{
        return Appointment.findByIdAndDelete(id);
    }catch(error){
        throw new Error(error);
    }
}

const AppointmentRepository = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}
export default AppointmentRepository;