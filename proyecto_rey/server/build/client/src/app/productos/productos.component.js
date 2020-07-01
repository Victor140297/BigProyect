"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ProductosComponent = class ProductosComponent {
    constructor(productoService, router, activedRoute) {
        this.productoService = productoService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.classes = 'row';
        this.producto = {
            id: 0,
            nombreP: '',
            description: '',
            image: '',
            created_at: new Date()
        };
        this.edit = false;
    }
    ngOnInit() {
        const params = this.activedRoute.snapshot.params;
        if (params.id) {
            this.productoService.getProducto(params.id)
                .subscribe(res => {
                this.producto = res;
                this.edit = true;
            }, err => console.error(err));
        }
    }
    savenewProduc() {
        delete this.producto.created_at;
        delete this.producto.id;
        this.productoService.saveProducto(this.producto)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/productos']);
        }, err => console.error(err));
    }
    updateProducto() {
        delete this.producto.created_at;
        this.productoService.updateProducto(this.producto.id, this.producto)
            .subscribe(res => {
            this.router.navigate(['/productos']);
        }, err => console.error(err));
    }
};
__decorate([
    core_1.HostBinding('class')
], ProductosComponent.prototype, "classes", void 0);
ProductosComponent = __decorate([
    core_1.Component({
        selector: 'app-productos',
        templateUrl: './productos.component.html',
        styleUrls: ['./productos.component.css']
    })
], ProductosComponent);
exports.ProductosComponent = ProductosComponent;
