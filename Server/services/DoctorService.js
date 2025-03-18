import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return DoctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
    return DoctorRepository.getDoctor(id);
};

const saveDoctor = async ({ name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
    return DoctorRepository.saveDoctor({ name, login, password, medicalSpecialty, medicalRegistration, email, phone });
};

const updateDoctor = async (id, { name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
    return DoctorRepository.updateDoctor(id, { name, login, password, medicalSpecialty, medicalRegistration, email, phone });
};

const deleteDoctor = async (id) => {
    return DoctorRepository.deleteDoctor(id);
};

const DoctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default DoctorService;
