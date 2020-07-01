"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const producto_service_1 = require("./producto.service");
describe('ProductoService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(producto_service_1.ProductoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
