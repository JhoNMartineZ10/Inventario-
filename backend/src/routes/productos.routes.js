import { Router } from "express";
import { mthodHTTP as productoscontrolller } from "../controllers/productos.controllers.js";

const router = Router();


router.put("/:ProductoID",productoscontrolller.updateProductos)



export default router;