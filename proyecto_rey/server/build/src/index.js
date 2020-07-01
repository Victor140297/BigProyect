"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
class server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //si existe un puerto en el sistema tomalo o sino usa el puerto 3000
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); //si queremos enviar desde un formulario html
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'));
        }); //lo que esta adentro de listen es un puerto
    }
}
const serv = new server();
serv.start();
