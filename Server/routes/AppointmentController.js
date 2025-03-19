import express from "express";
import AppointmentService from "../services/AppointmentService.js";


const router = express.Router();

router.get('/appointments', async (req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointment();
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/appointments', async (req, res) => {
    const { date, doctorId, patientId } = req.body;
    try {
        if (!date || !doctorId || !patientId) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const appointment = await AppointmentService.saveAppointment({ date, doctorId, patientId });
        res.status(201).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    const { date, doctorId, patientId } = req.body;
    try {
        const updatedAppointment = await AppointmentService.updateAppointment(id, { date, doctorId, patientId });
        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(updatedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAppointment = await AppointmentService.deleteAppointment(id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
router.put('/reschedule/:id', async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    try {
        let appointment = await AppointmentService.getAppointment(id); // Use let aqui
        appointment.date = date;
        appointment = await AppointmentService.updateAppointment(id, { date });
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
