import { Router } from "express";

import {
  getProduct,
  createProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProduct);
router.post("/products", createProduct);
router.put("/products/:id");
router.delete("/products/:id");
router.get("/products/:id");

export default router;
