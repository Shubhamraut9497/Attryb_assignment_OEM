import express from 'express';
import CarDetailsData from '../controllers/carDetailsData.js';
const router=express.Router();

router.post("/carDetails",CarDetailsData);

export default router;

