import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";
import multer from 'multer';
import process from "process";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage(
    {
    destination:function(req,res,cb){
        cb(null,'./MediApp/prescriptions');
    },
    filename:function(req,res,cb){
        cb(null,file.originalname);
    }
 }
);

const upload = multer({storage:storage});

router.post('/uploadPrescriptions/:id',upload.single('file'),async(req,res) =>{
    try{
        const {id} = req.params;
        let prescription = await PrescriptionService.getPrescription(id);

        const file = './MediApp/prescriptions'+req.file.originalname;
        prescription = await PrescriptionService.updatePrescription(id,{file});

        return res.status(200).send(prescription);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
}
);

router.get('/readPrescription/:id',async(req,res)=>{
    const {id} = req.params;

    try{
        const prescription = await PrescriptionService.getPrescription(id);
        let filePath = path.resolve(process.cwd() + "/../"+prescription.file);
        res.status(200).send(filePath);
    }catch(error){
        throw new Error(error);
        res.status(500).send(error);
    }
}
);

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

router.get('/generatePrescription/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const prescription = await PrescriptionService.getPrescription(id);
        const generatePrescription = await PrescriptionService.generatePrescriptionFile(prescription);
        res.send(generatePrescription);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
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
    const {date,appointmentId,medicine,dosage,instructions,file} = req.body;
    try{
        const updatedPrescription = await PrescriptionService.updatePrescription(id, {date,appointmentId,medicine,dosage,instructions,file});
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