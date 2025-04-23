import { Router } from "express";
import { mthodHTTP as empleadoscontrolller } from "../controllers/empleados.controllers.js";

const router = Router();


router.get("/",empleadoscontrolller.getEmpleados)



export default router;
