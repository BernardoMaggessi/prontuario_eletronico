import express from "express";
import DoctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get('/doctors', async (req, res) => {
    try {    
        const doctors = await DoctorService.getAllDoctors();
        res.json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await DoctorService.getDoctor(id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/doctors', async (req, res) => {
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
        if (!name || !login || !password || !email || !phone) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const doctor = await DoctorService.saveDoctor({ name, login, password: hashedPassword, medicalSpecialty, medicalRegistration, email, phone });
        res.status(201).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } 
});

router.put('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
        const updatedDoctor = await DoctorService.updateDoctor(id, { name, login, password, medicalSpecialty, medicalRegistration, email, phone });
        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json(updatedDoctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDoctor = await DoctorService.deleteDoctor(id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json({ message: "Doctor deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
