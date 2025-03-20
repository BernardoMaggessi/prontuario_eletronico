
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

const saveAppointment = async ({date,doctorId, patientId, history}) => {
    try{
        const appointment = new Appointment({date, doctorId, patientId, history});
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

const getAppointmentsByDoctor = async (doctorId) => {
    try {
        return await Appointment.find({ doctorId });
    } catch (error) {
        throw new Error(error);
    }
}

const getAppointmentsByPatient = async (patientId) => {
    try{
        return await Appointment.find({patientId});
    }catch(error){
        throw new Error(error);
    }
}

const AppointmentRepository = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByDoctor,
    getAppointmentsByPatient
}
export default AppointmentRepository;