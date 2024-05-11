import Product from "../model/product";
import { Request, Response } from "express";

abstract class ProductController {
    static async getAll(req: Request, res: Response) {
        const products = await Product.findAll();
        res.status(200).json(products);

    }
    static async createProduct(req: Request, res: Response) {
        const { name, cost, creation_date } = req.body;
        const [product, created] = await Product.findOrCreate({
            where: { name },
            defaults: {
                name,
                cost,
                creation_date
            },
        });

        res.status(201).json(product);
    }
}

export default ProductController;
