(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-products-products-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/dialog/dialog.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/dialog/dialog.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Thêm mới sản phẩm</h1>\r\n<div mat-dialog-content>\r\n    <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n        <div fxFlex=\"10\" fxFlex.xs=\"10\"></div>\r\n        <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n            <mat-form-field>\r\n                <mat-label>Tên ngành</mat-label>\r\n                <mat-select [(ngModel)]=\"fieldSelectedId\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let f of fieldService.fields$ | async\" [value]=\"f.id\">\r\n                        {{f.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"10\" fxFlex.xs=\"10\"></div>\r\n        <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n            <mat-form-field>\r\n                <mat-label>Tên dòng sản phẩm</mat-label>\r\n                <mat-select [(ngModel)]=\"plId\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let pL of nganhHienThi$ | async\" [value]=\"pL.id\">\r\n                        {{pL.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div [formGroup]=\"form\">\r\n        <div formArrayName=\"products\" *ngFor=\"let control of productsControl.controls; index as i\">\r\n            <form class=\"example-form\" [formGroupName]=\"i\">\r\n                <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                        <mat-form-field>\r\n                            <mat-label>Tên sản phẩm</mat-label>\r\n                            <input matInput formControlName=\"name\" placeholder=\"Coffee\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                        <mat-form-field>\r\n                            <mat-label>Mã sản phẩm</mat-label>\r\n                            <input matInput formControlName=\"code\" placeholder=\"02\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                    <div fxFlex=\"20\" fxFlex.xs=\"20\">\r\n                        <mat-form-field>\r\n                            <mat-label>Đơn vị tính</mat-label>\r\n                            <mat-select formControlName=\"u_id\">\r\n                                <mat-option *ngFor=\"let u of unitsService.units$ | async\" [value]=\"u.id\">\r\n                                    {{u.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<button mat-raised-button color=\"primary\" (click)=\"addMore()\">Thêm nhiều</button>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button (click)=\"onNoClick()\">Hủy</button>\r\n    <button mat-raised-button (click)=\"submit()\">Xác nhận</button>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Sản phẩm</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table mat-table [dataSource]=\"showProducts\" class=\"mat-elevation-z8\">\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Code Column -->\r\n            <ng-container matColumnDef=\"code\">\r\n                <th mat-header-cell *matHeaderCellDef> Mã sản phẩm </th>\r\n                <td mat-cell *matCellDef=\"let element;index as index\">\r\n                    <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentProduct.code\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.code}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên sản phẩm </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentProduct.name\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"units_id\">\r\n                <th mat-header-cell *matHeaderCellDef> Đơn vị tính </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <mat-form-field>\r\n                            <mat-select [(ngModel)]=\"element.u_id\">\r\n                                <mat-option *ngFor=\"let u of unitService.units$ | async\" [value]=\"u.id\">\r\n                                    {{u.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element?.units?.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"product_line_id\">\r\n                <th mat-header-cell *matHeaderCellDef> Mã dòng sản phẩm </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <mat-form-field>\r\n                            <mat-select [(ngModel)]=\"element.pL_id\">\r\n                                <mat-option *ngFor=\"let pL of productLineService.productLine$ | async\" [value]=\"pL.id\">\r\n                                    {{pL.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element?.productLine?.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"delete\">\r\n                <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                        <button mat-raised-button (click)=\"updateProduct()\">Xác nhận</button>\r\n                        <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                    </ng-container>\r\n                    <ng-template #acceptButton>\r\n                        <ng-container *ngIf=\"editIndex == null\">\r\n                            <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                            <button mat-raised-button (click)=\"deleteProduct(element.id)\">Xóa</button>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"products.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n        (page)=\"onChangePage($event)\">\r\n    </mat-paginator>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/products/dialog/dialog.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/products/dialog/dialog.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9kaWFsb2cvQzpcXFVzZXJzXFxLSU5HXFxEZXNrdG9wXFxFY29ub21pYy1TdGF0aXN0aWNcXGUtc3RhdGlzdGljc1xcVUkvcHJvamVjdHNcXEFkbWluXFxzcmNcXGFwcFxcbW9kdWxlc1xccHJvZHVjdHNcXGRpYWxvZ1xcZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvQWRtaW4vc3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3RzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvQWRtaW4vc3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3RzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxufSIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/products/dialog/dialog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/products/dialog/dialog.component.ts ***!
  \*************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/modules/products/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product-line/services/product-line.service */ "./src/app/modules/product-line/services/product-line.service.ts");
/* harmony import */ var _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../fields/services/fields.service */ "./src/app/modules/fields/services/fields.service.ts");
/* harmony import */ var _units_services_units_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../units/services/units.service */ "./src/app/modules/units/services/units.service.ts");









let DialogComponent = class DialogComponent {
    constructor(dialogRef, data, productSv, formBuilder, productLineService, fieldService, unitsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.productSv = productSv;
        this.formBuilder = formBuilder;
        this.productLineService = productLineService;
        this.fieldService = fieldService;
        this.unitsService = unitsService;
        this.plId = null;
        this.fieldSelectedId = null;
    }
    onNoClick() {
        this.dialogRef.close({});
    }
    get nganhHienThi$() {
        return this.productLineService.productLine$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(listNganh => {
            return listNganh.filter(e => e.f_id == this.fieldSelectedId);
        }));
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            products: this.formBuilder.array([])
        });
        this.addMore();
        this.productLineService.getList();
    }
    get productsControl() {
        return this.form.controls.products;
    }
    addMore() {
        this.productsControl.push(this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            u_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pL_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }));
    }
    submit() {
        const { products } = this.form.value;
        const newProducts = products.map(e => {
            return Object.assign({}, e, { pL_id: this.plId });
        });
        this.productSv.add(newProducts);
        this.dialogRef.close();
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_6__["ProductLineService"] },
    { type: _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_7__["FieldsService"] },
    { type: _units_services_units_service__WEBPACK_IMPORTED_MODULE_8__["UnitsService"] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.scss */ "./src/app/modules/products/dialog/dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogComponent);



/***/ }),

/***/ "./src/app/modules/products/products.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/products/products.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product.service */ "./src/app/modules/products/services/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/modules/products/dialog/dialog.component.ts");
/* harmony import */ var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@lib/services/confirm-dialog.service */ "./src/app/@lib/services/confirm-dialog.service.ts");
/* harmony import */ var _units_services_units_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/services/units.service */ "./src/app/modules/units/services/units.service.ts");
/* harmony import */ var _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fields/services/fields.service */ "./src/app/modules/fields/services/fields.service.ts");
/* harmony import */ var _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-line/services/product-line.service */ "./src/app/modules/product-line/services/product-line.service.ts");









let ProductsComponent = class ProductsComponent {
    constructor(productService, fieldService, dialog, confirmDialog, productLineService, unitService) {
        this.productService = productService;
        this.fieldService = fieldService;
        this.dialog = dialog;
        this.confirmDialog = confirmDialog;
        this.productLineService = productLineService;
        this.unitService = unitService;
        this.displayedColumns = ['position', 'code', 'name', 'units_id', 'product_line_id', 'delete'];
        this.products = null;
        this.showProducts = null;
        this.editIndex = null;
        this.currentProduct = null;
        this.oldProduct = null;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 25];
        this.length = 1000;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            data: { products: this.products }
        });
    }
    cancelEdit() {
        this.currentProduct.code = this.oldProduct.code;
        this.currentProduct.name = this.oldProduct.name;
        this.currentProduct.pL_id = this.oldProduct.pL_id;
        this.currentProduct.u_id = this.oldProduct.u_id;
        this.editIndex = this.currentProduct = null;
    }
    updateProduct() {
        this.productService.update(this.currentProduct).subscribe(_ => this.currentProduct = this.editIndex = null);
    }
    deleteProduct(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.confirmDialog.show('Bạn chắc chắn muốn xóa?').then(res => {
                if (res) {
                    this.productService.delete(id);
                }
            });
        });
    }
    toggleEdit(index, product) {
        this.editIndex = index;
        this.currentProduct = product;
        this.oldProduct = Object.assign({}, product);
    }
    ngOnInit() {
        this.productService.getList();
        this.productService.products$.subscribe(l => {
            this.products = l;
            const { pageSize, } = this;
            this.onChangePage({
                length: this.products.length,
                pageSize,
                pageIndex: 0,
                previousPageIndex: null
            });
        });
    }
    onChangePage({ length, pageIndex, pageSize, previousPageIndex }) {
        console.log(length, pageIndex, pageSize, previousPageIndex);
        this.showProducts = [...this.products].slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_7__["FieldsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"] },
    { type: _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_8__["ProductLineService"] },
    { type: _units_services_units_service__WEBPACK_IMPORTED_MODULE_6__["UnitsService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/modules/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/modules/products/products.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/modules/products/dialog/dialog.component.ts");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");










const ROUTES = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: []
    }
];
let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES),
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__["LibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"]
        ],
        entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=modules-products-products-module-es2015.js.map