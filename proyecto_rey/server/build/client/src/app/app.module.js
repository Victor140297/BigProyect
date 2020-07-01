"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const productos_component_1 = require("./productos/productos.component");
const compon_component_1 = require("./compon/compon.component");
const product_list_component_1 = require("./product-list/product-list.component");
const navigator_component_1 = require("./navigator/navigator.component");
const producto_service_1 = require("./service/producto.service");
const mezcla_component_1 = require("./mezcla/mezcla.component");
const product_form_component_1 = require("./product-form/product-form.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            productos_component_1.ProductosComponent,
            compon_component_1.ComponComponent,
            product_list_component_1.ProductListComponent,
            navigator_component_1.NavigatorComponent,
            mezcla_component_1.MezclaComponent,
            product_form_component_1.ProductFormComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule,
            forms_1.FormsModule
        ],
        providers: [
            producto_service_1.ProductoService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
