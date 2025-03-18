import express from 'express';
import appointmentController from './AppointmentController.js';
import doctorController from './DoctorController.js';
import patientController from './PatientController.js';
import prescriptionController from './PrescriptionController.js';

const router = express.Router();

router.get(
    "/", function(req,res){
        console.log('Hi');
        res.status(200).json({message:"hi"});
    }
)

// Prefixando as rotas para os controllers
router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", prescriptionController);
router.use("/", patientController);

// Exportando o router
export default router;
