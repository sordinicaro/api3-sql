import { Router } from "express";
import { DB } from "../controller/database";
import ProductController from "../controller/product";

const router = Router();

router.get("/api", DB.testeConnection);
router.get("/products", ProductController.getAll);
router.post("/products", ProductController.createProduct)



export { router };