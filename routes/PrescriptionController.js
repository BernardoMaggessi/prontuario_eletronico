import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";

const router = express.Router();

router.get('/prescriptions',async(req,res)=>{
    try{
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        res.json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/prescriptions/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const prescription = await PrescriptionService.getPrescription(id);
        if (!prescription) {
            return res.status(404).json({ message: "Prescription not found" });
        }
        res.json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/prescriptions',async(req,res)=>{
    const {date,appointmentId,medicine,dosage,instructions} = req.body;
    try{
        if(!medicine,!dosage,!instructions){
            return res.status(400).json({message:"Missing required fields"})
        }
        const prescription = await PrescriptionService.savePrescription({date,appointmentId,medicine,dosage,instructions});
        res.status(201).json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } 
});

router.put('/prescriptions/:id',async(req,res)=>{
    const {id} = req.params;
    const {date,appointmentId,medicine,dosage,instructions} = req.body;
    try{
        const updatedPrescription = await PrescriptionService.updatePrescription(id, {date,appointmentId,medicine,dosage,instructions});
        if(!updatedPrescription){
            return res.status(404).json("Prescription not found");
        }res.json(updatedPrescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete('/Prescriptions/:id',async(req,res)=>{
    const{id} = req.params;
    try{
        const deletedPrescription = await PrescriptionService.deletePrescription(id);
        if(!deletedPrescription){
            return res.status(404).json("Prescription not found");
        }
        res.json({ message: "Prescription deleted successfully" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;