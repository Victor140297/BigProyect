import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';

class server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{//configuraciones de app, por ejm el puerto
        this.app.set('port', process.env.PORT || 3000);//si existe un puerto en el sistema tomalo o sino usa el puerto 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));//si queremos enviar desde un formulario html
        
    }

    routes(): void{//para las rutas
        this.app.use(indexRoutes);
        this.app.use('/api/productos',productosRoutes);
    }

    start(): void{//inicializar el servidor
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'));
            
        });//lo que esta adentro de listen es un puerto
    }
}

const serv = new server();
serv.start();