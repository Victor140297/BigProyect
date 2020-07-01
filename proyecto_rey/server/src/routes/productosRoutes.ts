import { Router } from 'express'; //Router es un metodo que me devuelve un objeto adentro donde voy a colocar las rutas

import productosController from '../controllers/productosController'
class ProductRoutes {
    public router: Router = Router(); 
    constructor(){
        this.config();
    }
    config(): void{
        /*Creando una ruta de mi app para la ruta inicial '/' cuando
        visite la ruta inicial yo devolvere un mensaje hello*/ 
        this.router.get('/', productosController.list);
        this.router.get('/:id', productosController.getOne);
        this.router.post('/', productosController.create);
        this.router.put('/:id', productosController.update);
        this.router.delete('/:id',productosController.delete);
    }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;