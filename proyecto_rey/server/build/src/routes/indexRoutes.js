"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Router es un metodo que me devuelve un objeto adentro donde voy a colocar las rutas
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*Creando una ruta de mi app para la ruta inicial '/' cuando
        visite la ruta inicial yo devolvere un mensaje hello*/
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
