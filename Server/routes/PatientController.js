import express from "express";
import PatientService from '../services/PatientService.js';

const router = express.Router();

router.get('/patients', async (req, res) => {
    try {
        const patients = await PatientService.getAllPatients();
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/getPatient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await PatientService.getPatient(id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
