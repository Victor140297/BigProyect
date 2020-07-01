import { Router } from 'express'; //Router es un metodo que me devuelve un objeto adentro donde voy a colocar las rutas

import { indexController } from '../controllers/indexController'
class IndexRoutes {
    public router: Router = Router(); 
    constructor(){
        this.config();
    }
    config(): void{
        /*Creando una ruta de mi app para la ruta inicial '/' cuando
        visite la ruta inicial yo devolvere un mensaje hello*/ 
        this.router.get('/', indexController.index);
        
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;