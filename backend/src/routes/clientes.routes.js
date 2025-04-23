import { Router } from "express";
import { mthodHTTP as clientescontrolller } from "../controllers/clientes.controllers.js";

const router = Router();


router.post("/",clientescontrolller.postClientes)



export default router;