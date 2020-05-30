(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-monthly-production-monthly-production-module~modules-products-products-module"],{

/***/ "./src/app/@lib/components/confirm/confirm.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@lib/components/confirm/confirm.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");



let ConfirmComponent = class ConfirmComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    confirm() {
        this.dialogRef.close(true);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ConfirmComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: `
    <p>
      {{ data.message }}
    </p>

    <div>
      <button mat-button (click)="confirm()">Có</button>

      <button mat-button (click)="onNoClick()" >Hủy</button>
    </div>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmComponent);



/***/ }),

/***/ "./src/app/@lib/lib.module.ts":
/*!************************************!*\
  !*** ./src/app/@lib/lib.module.ts ***!
  \************************************/
/*! exports provided: LibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibModule", function() { return LibModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/@lib/components/confirm/confirm.component.ts");
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/confirm-dialog.service */ "./src/app/@lib/services/confirm-dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");






let LibModule = class LibModule {
};
LibModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
        ],
        providers: [
            _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogService"]
        ],
        entryComponents: [
            _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]
        ]
    })
], LibModule);



/***/ }),

/***/ "./src/app/@lib/services/confirm-dialog.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@lib/services/confirm-dialog.service.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/@lib/components/confirm/confirm.component.ts");




let ConfirmDialogService = class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    show(message = "Xác nhận") {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dialogRef = this.dialog.open(_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
                data: { message },
            });
            const result = yield dialogRef.afterClosed().toPromise();
            return new Promise((res, rej) => {
                if (result) {
                    res(true);
                }
            });
        });
    }
};
ConfirmDialogService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ConfirmDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConfirmDialogService);



/***/ }),

/***/ "./src/app/modules/fields/services/fields.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/fields/services/fields.service.ts ***!
  \***********************************************************/
/*! exports provided: FieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsService", function() { return FieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let FieldsService = class FieldsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.fieldsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getList();
    }
    get fields$() {
        return this.fieldsSubject.asObservable();
    }
    getList() {
        this.httpClient.get("fields").subscribe((res) => this.fieldsSubject.next(res));
    }
    delete(id) {
        this.httpClient.delete('fields/' + id).subscribe((res) => {
            const { value } = this.fieldsSubject;
            const newList = value.filter(e => e.id != id);
            this.fieldsSubject.next(newList);
        });
    }
    update(field) {
        return this.httpClient.patch("fields", field).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            const { value } = this.fieldsSubject;
            const index = value.findIndex(e => e.id == field.id);
            const newList = [...value];
            newList[index] = field;
            this.fieldsSubject.next(newList);
        }));
    }
    addField(field) {
        this.httpClient.post("fields", field).subscribe((res) => {
            const newList = [...res, ...this.fieldsSubject.value];
            {
                this.fieldsSubject.next(newList);
            }
        });
    }
    ;
};
FieldsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], FieldsService);



/***/ }),

/***/ "./src/app/modules/product-line/services/product-line.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/product-line/services/product-line.service.ts ***!
  \***********************************************************************/
/*! exports provided: ProductLineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLineService", function() { return ProductLineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fields/services/fields.service */ "./src/app/modules/fields/services/fields.service.ts");






let ProductLineService = class ProductLineService {
    constructor(httpClient, fieldSV) {
        this.httpClient = httpClient;
        this.fieldSV = fieldSV;
        this.productLineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
    }
    get productLine$() {
        return this.productLineSubject.asObservable();
    }
    add(products) {
        this.httpClient.post("product-line", products).subscribe((res) => {
            res.map(e => {
                const newList = [e, ...this.productLineSubject.value];
                this.productLineSubject.next(newList);
            });
        });
    }
    delete(id) {
        this.httpClient.delete("product-line/" + id).subscribe((res) => {
            const { value } = this.productLineSubject;
            const newList = value.filter(e => e.id != id);
            this.productLineSubject.next(newList);
        });
    }
    update(productL) {
        return this.httpClient.patch("product-line", productL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            const { value } = this.productLineSubject;
            const index = value.findIndex(e => e.id == productL.id);
            let newList = [...value];
            newList[index] = productL;
            this.fieldSV.fields$.subscribe(fieldList => {
                const fL = fieldList.find(e => e.id == productL.f_id);
                productL.field = fL;
            });
            this.productLineSubject.next(newList);
        }));
    }
    getList() {
        this.httpClient.get("product-line").subscribe((res) => this.productLineSubject.next(res));
    }
};
ProductLineService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_5__["FieldsService"] }
];
ProductLineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductLineService);



/***/ }),

/***/ "./src/app/modules/products/services/product.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/products/services/product.service.ts ***!
  \**************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product-line/services/product-line.service */ "./src/app/modules/product-line/services/product-line.service.ts");
/* harmony import */ var _units_services_units_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../units/services/units.service */ "./src/app/modules/units/services/units.service.ts");







let ProductService = class ProductService {
    constructor(httpCilent, productLineService, unitsService) {
        this.httpCilent = httpCilent;
        this.productLineService = productLineService;
        this.unitsService = unitsService;
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
    }
    get products$() {
        return this.productsSubject.asObservable();
    }
    getList() {
        this.httpCilent.get("products").subscribe((res) => this.productsSubject.next(res));
    }
    add(products) {
        this.httpCilent.post("products", products).subscribe((res) => {
            console.log('them moi thanh cong');
            res.map(e => {
                const newList = [e, ...this.productsSubject.value];
                this.productsSubject.next(newList);
            });
        });
    }
    update(product) {
        return this.httpCilent.patch("products", product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            const { value } = this.productsSubject;
            const index = value.findIndex(e => e.id == product.id);
            const newList = [...value];
            newList[index] = product;
            this.productLineService.productLine$.subscribe(pList => {
                const pL = pList.find(e => e.id == product.pL_id);
                product.productLine = pL;
            });
            this.unitsService.units$.subscribe(uList => {
                const uL = uList.find(e => e.id == product.u_id);
                product.units = uL;
            });
            this.productsSubject.next(newList);
        }));
    }
    delete(id) {
        this.httpCilent.delete("products/" + id).subscribe((res) => {
            const { value } = this.productsSubject;
            const newList = value.filter(e => e.id != id);
            this.productsSubject.next(newList);
        });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_5__["ProductLineService"] },
    { type: _units_services_units_service__WEBPACK_IMPORTED_MODULE_6__["UnitsService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ProductService);



/***/ }),

/***/ "./src/app/modules/units/services/units.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/units/services/units.service.ts ***!
  \*********************************************************/
/*! exports provided: UnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsService", function() { return UnitsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let UnitsService = class UnitsService {
    constructor(http) {
        this.http = http;
        this.unitsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
    }
    get units$() {
        return this.unitsSubject.asObservable();
    }
    getList() {
        this.http.get("units").subscribe((res) => this.unitsSubject.next(res));
    }
    update(unit) {
        return this.http.patch("units", unit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            const { value } = this.unitsSubject;
            const index = value.findIndex(e => e.id == unit.id);
            const newList = [...value];
            newList[index] = unit;
            this.unitsSubject.next(newList);
        }));
    }
    add(unit) {
        this.http.post("units", unit).subscribe((res) => {
            res.map(e => {
                const newList = [e, ...this.unitsSubject.value];
                this.unitsSubject.next(newList);
            });
        });
    }
    delete(id) {
        this.http.delete("units/" + id).subscribe((res) => {
            const { value } = this.unitsSubject;
            const newList = value.filter(e => e.id != id);
            this.unitsSubject.next(newList);
        });
    }
};
UnitsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UnitsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UnitsService);



/***/ })

}]);
//# sourceMappingURL=default~modules-monthly-production-monthly-production-module~modules-products-products-module-es2015.js.map