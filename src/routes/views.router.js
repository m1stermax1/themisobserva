import { Router } from "express";
import viewsController from '../config/controllers/views.controller.js'
const router = Router();

// INICIO
router.get('/', viewsController.home)

export default router