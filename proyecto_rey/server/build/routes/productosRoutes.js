"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Router es un metodo que me devuelve un objeto adentro donde voy a colocar las rutas
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*Creando una ruta de mi app para la ruta inicial '/' cuando
        visite la ruta inicial yo devolvere un mensaje hello*/
        this.router.get('/', productosController_1.default.list);
        this.router.get('/:id', productosController_1.default.getOne);
        this.router.post('/', productosController_1.default.create);
        this.router.put('/:id', productosController_1.default.update);
        this.router.delete('/:id', productosController_1.default.delete);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
