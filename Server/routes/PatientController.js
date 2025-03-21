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

router.post('/patients',async(req,res) =>{
    const {name,birthdate,email,phone}= req.body;
    try{
        if(!name || !birthdate ||!email){
            return res.status(400).json({message:"Missing required fields"});
        }
        const patient = await PatientService.savePatient({name,birthdate,email,phone});
        res.status(201).json(patient);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
});

export default router;
