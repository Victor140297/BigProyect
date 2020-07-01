import { Request, Response } from 'express';

import pool from '../database';
class ProductosController{
    public async list(req:Request,res:Response){
       const result = await pool.query('select * from productos');//CALL list()
        res.json(result);
    } 
    public async getOne(req:Request,res:Response): Promise<any>{
       const { id } = req.params;
       const result = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
       if(result.length > 0) return res.json(result[0]);
       res.status(404).json({text: 'El producto no existe'});
    }

    public async create(req:Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO productos set ?', [req.body]);//CALL nomb_procedure(param)
        res.json({text: 'Producto Guardado'});
    }
    public async update(req:Request,res:Response): Promise<void>{
        const { id } = req.params;
        const result = await pool.query('UPDATE productos set ? WHERE id = ?', [req.body,id]);//CALL nomb_procedure(param)
        res.json({text: 'Actualizando producto ' + req.params.id});
    }
    public async delete(req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        const result = await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({text: 'El producto se ha eliminado'});
    }
}

const productosController =  new ProductosController();
export default productosController;