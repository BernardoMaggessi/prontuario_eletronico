import express from 'express';
import appointmentController from './AppointmentController.js';
import doctorController from './DoctorController.js';
import patientController from './PatientController.js';
import prescriptionController from './PrescriptionController.js';
import DoctorService from '../services/DoctorService.js';
import bcrypt from "bcrypt";
import verifyToken from '../middleware/authMiddle.js';
import jwt from 'jsonwebtoken';


const router = express.Router();

router.get(
    "/", function(req,res){
        console.log('Hi');
        res.status(200).json({message:"hi"});
    }
);
// Mapeamento do login
router.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;

        const doctor = await DoctorService.getDoctorByLogin(login);
        if (!doctor) {
            return res.status(401).json({ error: 'Authentication failed: Doctor not found' });
        }

        const passwordMatch = await bcrypt.compare(password, doctor.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed: Incorrect password' });
        }

        const token = jwt.sign({ doctorId: doctor._id }, 'you-secret-key', { expiresIn: '1h' });

        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error: Authentication failed' });
    }
});



// Prefixando as rotas para os controllers
/*
router.use("/", verifyToken,appointmentController);
router.use("/", verifyToken,doctorController);
router.use("/", verifyToken,prescriptionController);
router.use("/", verifyToken,patientController);
*/

router.use("/",appointmentController);
router.use("/",doctorController);
router.use("/",prescriptionController);
router.use("/",patientController);
// Exportando o router
export default router;
