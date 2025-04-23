import { Router } from "express";
import { mthodHTTP as categoriacontrolller } from "../controllers/categoria.controllers.js";

const router = Router();


router.get("/",categoriacontrolller.getCategorias)
router.post("/",categoriacontrolller.postCategorias)
router.get("/:id",categoriacontrolller.getCategory)
router.delete("/:id",categoriacontrolller.deleteCategory)
router.put("/:id",categoriacontrolller.updateCategorias)



export default router;
