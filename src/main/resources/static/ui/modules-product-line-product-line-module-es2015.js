(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-product-line-product-line-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/product-line/dialog/dialog.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/product-line/dialog/dialog.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Thêm mói dòng sản phẩm</h1>\r\n<div mat-dialog-content>\r\n    <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n        <div fxFlex=\"30\" fxFlex.xs=\"30\"></div>\r\n        <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n            <mat-form-field>\r\n                <mat-label>Tên ngành</mat-label>\r\n                <mat-select [(ngModel)]=\"field_id\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let f of fieldService.field$ | async\" [value]=\"f.id\">\r\n                        {{ f.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"30\" fxFlex.xs=\"30\"></div>\r\n    </div>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div [formGroup]=\"form\">\r\n        <div formArrayName=\"productLines\" *ngFor=\"let control of productLinesControl.controls;index as i\">\r\n            <form class=\"example-form\" [formGroupName]=\"i\">\r\n                <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                    <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                        <mat-form-field>\r\n                            <mat-label>Tên dòng sản phẩm</mat-label>\r\n                            <input matInput formControlName=\"name\" placeholder=\"Thực phẩm\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                    <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                        <mat-form-field>\r\n                            <mat-label>Mã dòng sản phẩm</mat-label>\r\n                            <input matInput formControlName=\"code\" placeholder=\"01\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<button mat-raised-button color=\"primary\" (click)=\"addMore()\">Thêm nhiều</button>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button (click)=\"onNoClick()\">Hủy</button>\r\n    <button mat-raised-button (click)=\"submit()\">Xác nhận</button>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/product-line/product-line.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/product-line/product-line.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Dòng sản phẩm</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table mat-table [dataSource]=\"showProductLines\" class=\"mat-elevation-z8\" matSort>\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Code Column -->\r\n            <ng-container matColumnDef=\"code\">\r\n                <th mat-header-cell *matHeaderCellDef> Mã dòng sản phẩm </th>\r\n                <td mat-cell *matCellDef=\"let element;index as index\">\r\n                    <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentProductLine.code\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.code}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên dòng sản phẩm </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentProductLine.name\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"fields\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên ngành</th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <mat-form-field>\r\n                            <mat-select [(ngModel)]=\"element.f_id\">\r\n                                <mat-option *ngFor=\"let f of pLSv.fields$ | async\" [value]=\"f.id\">\r\n                                    {{ f.name }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element?.field?.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <!-- End Fields Column -->\r\n\r\n            <ng-container matColumnDef=\"delete\">\r\n                <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                        <button mat-raised-button (click)=\"updateProduct()\">Xác nhận</button>\r\n                        <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                    </ng-container>\r\n                    <ng-template #acceptButton>\r\n                        <ng-container *ngIf=\"editIndex == null\">\r\n                            <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                            <button mat-raised-button (click)=\"deleteProductLine(element.id)\">Xóa</button>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"productLines.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n        (page)=\"onChangePage($event)\">\r\n    </mat-paginator>\r\n    </div>\r\n</div>");

/***/ }),

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
    get field$() {
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

/***/ "./src/app/modules/product-line/dialog/dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/product-line/dialog/dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0LWxpbmUvZGlhbG9nL0M6XFxVc2Vyc1xcS0lOR1xcRGVza3RvcFxcRWNvbm9taWMtU3RhdGlzdGljXFxlLXN0YXRpc3RpY3NcXFVJL3Byb2plY3RzXFxBZG1pblxcc3JjXFxhcHBcXG1vZHVsZXNcXHByb2R1Y3QtbGluZVxcZGlhbG9nXFxkaWFsb2cuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvcHJvZHVjdC1saW5lL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvQWRtaW4vc3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3QtbGluZS9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbn0iLCJidXR0b24ge1xuICBtYXJnaW46IDAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/product-line/dialog/dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/product-line/dialog/dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_product_line_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product-line.service */ "./src/app/modules/product-line/services/product-line.service.ts");
/* harmony import */ var _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fields/services/fields.service */ "./src/app/modules/fields/services/fields.service.ts");






let DialogComponent = class DialogComponent {
    constructor(dialogRef, data, pLSv, formBuilder, fieldService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.pLSv = pLSv;
        this.formBuilder = formBuilder;
        this.fieldService = fieldService;
        this.field_id = null;
    }
    onNoClick() {
        this.dialogRef.close({});
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            productLines: this.formBuilder.array([])
        });
        this.addMore();
    }
    get productLinesControl() {
        return this.form.controls.productLines;
    }
    addMore() {
        this.productLinesControl.push(this.formBuilder.group({
            name: [''],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            f_id: ['']
        }));
    }
    submit() {
        const { productLines } = this.form.value;
        const newProductLines = productLines.map(e => {
            return Object.assign({}, e, { f_id: this.field_id });
        });
        this.pLSv.add(newProductLines);
        this.dialogRef.close();
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _services_product_line_service__WEBPACK_IMPORTED_MODULE_4__["ProductLineService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_5__["FieldsService"] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/product-line/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.scss */ "./src/app/modules/product-line/dialog/dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogComponent);



/***/ }),

/***/ "./src/app/modules/product-line/product-line.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/product-line/product-line.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvcHJvZHVjdC1saW5lL3Byb2R1Y3QtbGluZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/product-line/product-line.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/product-line/product-line.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLineComponent", function() { return ProductLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_line_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product-line.service */ "./src/app/modules/product-line/services/product-line.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/modules/product-line/dialog/dialog.component.ts");
/* harmony import */ var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@lib/services/confirm-dialog.service */ "./src/app/@lib/services/confirm-dialog.service.ts");






let ProductLineComponent = class ProductLineComponent {
    constructor(pLSv, dialog, confirmDialog) {
        this.pLSv = pLSv;
        this.dialog = dialog;
        this.confirmDialog = confirmDialog;
        this.displayedColumns = ['position', 'code', 'name', 'fields', 'delete'];
        this.productLines = null;
        this.showProductLines = null;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 25];
        this.length = 1000;
        this.editIndex = null;
        this.currentProductLine = null;
        this.oldProductLine = null;
    }
    updateProduct() {
        this.pLSv.update(this.currentProductLine).subscribe(_ => this.currentProductLine = this.editIndex = null);
    }
    deleteProductLine(id) {
        this.confirmDialog.show().then(res => {
            if (res) {
                this.pLSv.delete(id);
            }
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            data: { product: this.productLines }
        });
    }
    cancelEdit() {
        this.currentProductLine.code = this.oldProductLine.code;
        this.currentProductLine.name = this.oldProductLine.name;
        this.editIndex = this.currentProductLine = null;
    }
    toggleEdit(index, productLine) {
        this.editIndex = index;
        this.currentProductLine = productLine;
        this.oldProductLine = Object.assign({}, productLine);
    }
    ngOnInit() {
        this.pLSv.getList();
        this.pLSv.productLine$.subscribe(l => {
            this.productLines = l;
            const { pageSize, } = this;
            this.onChangePage({
                length: this.productLines.length,
                pageSize,
                pageIndex: 0,
                previousPageIndex: null
            });
        });
    }
    onChangePage({ length, pageIndex, pageSize, previousPageIndex }) {
        console.log(length, pageIndex, pageSize, previousPageIndex);
        this.showProductLines = [...this.productLines].slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    }
};
ProductLineComponent.ctorParameters = () => [
    { type: _services_product_line_service__WEBPACK_IMPORTED_MODULE_2__["ProductLineService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"] }
];
ProductLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-line',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-line.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/product-line/product-line.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-line.component.scss */ "./src/app/modules/product-line/product-line.component.scss")).default]
    })
], ProductLineComponent);



/***/ }),

/***/ "./src/app/modules/product-line/product-line.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/product-line/product-line.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductLineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLineModule", function() { return ProductLineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-line.component */ "./src/app/modules/product-line/product-line.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/modules/product-line/dialog/dialog.component.ts");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");










const ROUTES = [
    {
        path: '',
        component: _product_line_component__WEBPACK_IMPORTED_MODULE_3__["ProductLineComponent"],
        children: []
    }
];
let ProductLineModule = class ProductLineModule {
};
ProductLineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_line_component__WEBPACK_IMPORTED_MODULE_3__["ProductLineComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES),
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__["LibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"]
        ],
        entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]]
    })
], ProductLineModule);



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
            this.fieldSV.field$.subscribe(fieldList => {
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



/***/ })

}]);
//# sourceMappingURL=modules-product-line-product-line-module-es2015.js.map