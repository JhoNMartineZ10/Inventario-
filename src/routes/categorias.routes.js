import { Router } from "express";
import { mthodHTTP as categoriacontrolller } from "../controllers/categoria.controllers.js";

const router = Router();


router.get("/",categoriacontrolller.getCategorias)



export default router;
