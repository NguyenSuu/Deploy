(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-monthly-production-monthly-production-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <h1 mat-dialog-title>Số liệu sản xuất theo tháng</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n            <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                <mat-form-field>\r\n                    <mat-label>Năm</mat-label>\r\n                    <input matInput [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n            <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                <mat-form-field>\r\n                    <mat-label>Tháng</mat-label>\r\n                    <mat-select  [(ngModel)]=\"month_value\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let m of month\" [value]=\"m\">\r\n                            {{m}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div mat-dialog-content>\r\n        <div [formGroup]=\"form\">\r\n            <div formArrayName=\"mProduction\" *ngFor=\"let control of mProductionControl.controls;index as i\">\r\n                <form class=\"example-form\" [formGroupName]=\"i\">\r\n                    <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                        <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                            <mat-form-field>\r\n                                <mat-label> Tên sản phẩm</mat-label>\r\n                                <mat-select formControlName=\"p_id\">\r\n                                    <mat-option *ngFor=\"let p of mPSV.products$ | async\" [value]=\"p.id\">\r\n                                        {{p.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                        <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                            <mat-form-field >\r\n                                <mat-label>Kiểu dữ liệu</mat-label>\r\n                                <mat-select formControlName=\"t_d_id\">\r\n                                    <mat-option *ngFor=\"let t of typeDataSV.typeData$ | async\" [value]=\"t.id\">\r\n                                        {{t.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                        <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                            <mat-form-field >\r\n                                <mat-label>Số liệu</mat-label>\r\n                                <input matInput formControlName=\"data\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button mat-raised-button color=\"primary\" (click)=\"addMore()\">Thêm nhiều</button>\r\n    <div mat-dialog-actions>\r\n        <button mat-raised-button (click)=\"onNoClick()\">Hủy</button>\r\n        <button mat-raised-button (click)=\"submit()\">Xác nhận</button>\r\n    </div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/monthly-production.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/monthly-production.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Số liệu sản xuất theo tháng</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table mat-table [dataSource]=\"showMonthlyProduction\" class=\"mat-elevation-z8\" matSort>\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Code Column -->\r\n            <ng-container matColumnDef=\"month\">\r\n                <th mat-header-cell *matHeaderCellDef> Tháng </th>\r\n                <td mat-cell *matCellDef=\"let element;index as index\">\r\n                    <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentMonthlyProduction.month\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.month}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"years\">\r\n                <th mat-header-cell *matHeaderCellDef>Năm </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentMonthlyProduction.year\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.year}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"product_id\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên sản phẩm</th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <mat-form-field>\r\n                            <mat-select [(ngModel)]=\"element.p_id\">\r\n                                <mat-option *ngFor=\"let p of mPSV.products$ | async\" [value]=\"p.id\">\r\n                                    {{p.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element?.products?.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"productLine_id\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên loại sản phẩm</th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <mat-form-field>\r\n                            <mat-select [(ngModel)]=\"element.products.pL_id\">\r\n                                <mat-option *ngFor=\"let pL of mPSV.productLine$ | async\" [value]=\"pL.id\">\r\n                                    {{ pL.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element?.products?.productLine?.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"type_data_id\">\r\n                <th mat-header-cell *matHeaderCellDef> Kiểu dữ liệu </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <mat-form-field>\r\n                            <mat-select [(ngModel)]=\"element.t_d_id\">\r\n                                <mat-option *ngFor=\"let t of mPSV.typeData$ | async\" [value]=\"t.id\">\r\n                                    {{t.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.typeData?.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"data\">\r\n                <th mat-header-cell *matHeaderCellDef> Số liệu </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentMonthlyProduction.data\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.data}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"delete\">\r\n                <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                        <button mat-raised-button (click)=\"updateData()\">Xác nhận</button>\r\n                        <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                    </ng-container>\r\n                    <ng-template #acceptButton>\r\n                        <ng-container *ngIf=\"editIndex == null\">\r\n                            <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                            <button mat-raised-button (click)=\"deleteData(element.id)\">Xóa</button>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"monthlyProduction.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n        (page)=\"onChangePage($event)\">\r\n    </mat-paginator>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy9tb250aGx5LXByb2R1Y3Rpb24vZGlhbG9nLW1wL0M6XFxVc2Vyc1xcS0lOR1xcRGVza3RvcFxcRWNvbm9taWMtU3RhdGlzdGljXFxlLXN0YXRpc3RpY3NcXFVJL3Byb2plY3RzXFxBZG1pblxcc3JjXFxhcHBcXG1vZHVsZXNcXG1vbnRobHktcHJvZHVjdGlvblxcZGlhbG9nLW1wXFxkaWFsb2ctbXAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvbW9udGhseS1wcm9kdWN0aW9uL2RpYWxvZy1tcC9kaWFsb2ctbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvQWRtaW4vc3JjL2FwcC9tb2R1bGVzL21vbnRobHktcHJvZHVjdGlvbi9kaWFsb2ctbXAvZGlhbG9nLW1wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbn1cclxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DialogMPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMPComponent", function() { return DialogMPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/monthly-production.service */ "./src/app/modules/monthly-production/services/monthly-production.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _type_data_services_type_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type-data/services/type-data.service */ "./src/app/modules/type-data/services/type-data.service.ts");






let DialogMPComponent = class DialogMPComponent {
    constructor(dialogRef, data, mPSV, formBuilder, typeDataSV) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.mPSV = mPSV;
        this.formBuilder = formBuilder;
        this.typeDataSV = typeDataSV;
        this.month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        this.year = null;
        this.month_value = null;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            mProduction: this.formBuilder.array([])
        });
        this.addMore();
    }
    get mProductionControl() {
        return this.form.controls.mProduction;
    }
    addMore() {
        this.mProductionControl.push(this.formBuilder.group({
            month: [''],
            year: [''],
            data: [''],
            p_id: [''],
            t_d_id: ['']
        }));
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        const { mProduction } = this.form.value;
        const newMProduction = mProduction.map(e => {
            return Object.assign({}, e, { month: this.month_value, year: this.year });
        });
        this.mPSV.add(newMProduction);
        this.dialogRef.close();
    }
};
DialogMPComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_3__["MonthlyProductionService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _type_data_services_type_data_service__WEBPACK_IMPORTED_MODULE_5__["TypeDataService"] }
];
DialogMPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-mp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-mp.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-mp.component.scss */ "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogMPComponent);



/***/ }),

/***/ "./src/app/modules/monthly-production/monthly-production.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/monthly-production/monthly-production.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvbW9udGhseS1wcm9kdWN0aW9uL21vbnRobHktcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/monthly-production/monthly-production.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/monthly-production/monthly-production.component.ts ***!
  \****************************************************************************/
/*! exports provided: MonthlyProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyProductionComponent", function() { return MonthlyProductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-mp/dialog-mp.component */ "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts");
/* harmony import */ var _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/monthly-production.service */ "./src/app/modules/monthly-production/services/monthly-production.service.ts");
/* harmony import */ var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@lib/services/confirm-dialog.service */ "./src/app/@lib/services/confirm-dialog.service.ts");






let MonthlyProductionComponent = class MonthlyProductionComponent {
    constructor(dialog, mPSV, confirmDialog) {
        this.dialog = dialog;
        this.mPSV = mPSV;
        this.confirmDialog = confirmDialog;
        this.displayedColumns = ["position", "month", "years", "product_id", "productLine_id", "type_data_id", "data", "delete"];
        this.monthlyProduction = null;
        this.showMonthlyProduction = null;
        this.currentMonthlyProduction = null;
        this.oldMonthlyProduction = null;
        this.editIndex = null;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 25];
        this.length = 1000;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_3__["DialogMPComponent"], {
            data: { monthlyProduction: this.monthlyProduction }
        });
    }
    ngOnInit() {
        this.mPSV.monthlyProduction$.subscribe(l => {
            this.monthlyProduction = l;
            const { pageSize, } = this;
            this.onChangePage({
                length: this.monthlyProduction.length,
                pageSize,
                pageIndex: 0,
                previousPageIndex: null
            });
        });
    }
    toggleEdit(index, monthlyProduction) {
        this.currentMonthlyProduction = monthlyProduction;
        console.log(this.currentMonthlyProduction);
        this.editIndex = index;
        this.oldMonthlyProduction = Object.assign({}, monthlyProduction);
    }
    cancelEdit() {
        this.currentMonthlyProduction.month = this.oldMonthlyProduction.month;
        this.currentMonthlyProduction.year = this.oldMonthlyProduction.year;
        // this.currentMonthlyProduction.productCode = this.oldMonthlyProduction.productCode;
        // this.currentMonthlyProduction.typeDataCode = this.oldMonthlyProduction.typeDataCode;
        this.editIndex = this.currentMonthlyProduction = null;
    }
    updateData() {
        console.log(this.currentMonthlyProduction);
        this.mPSV.update(this.currentMonthlyProduction).subscribe(_ => this.currentMonthlyProduction = this.editIndex = null);
    }
    deleteData(id) {
        this.confirmDialog.show().then(res => {
            if (res) {
                this.mPSV.delete(id);
            }
        });
    }
    onChangePage({ length, pageIndex, pageSize, previousPageIndex }) {
        console.log(length, pageIndex, pageSize, previousPageIndex);
        this.showMonthlyProduction = Object.keys(this.monthlyProduction).map(mP => this.monthlyProduction[mP]).slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    }
};
MonthlyProductionComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_4__["MonthlyProductionService"] },
    { type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"] }
];
MonthlyProductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-monthly-production',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./monthly-production.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/monthly-production.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./monthly-production.component.scss */ "./src/app/modules/monthly-production/monthly-production.component.scss")).default]
    })
], MonthlyProductionComponent);



/***/ }),

/***/ "./src/app/modules/monthly-production/monthly-production.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/monthly-production/monthly-production.module.ts ***!
  \*************************************************************************/
/*! exports provided: MonthlyProductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyProductionModule", function() { return MonthlyProductionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _monthly_production_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthly-production.component */ "./src/app/modules/monthly-production/monthly-production.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");
/* harmony import */ var _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/monthly-production.service */ "./src/app/modules/monthly-production/services/monthly-production.service.ts");
/* harmony import */ var _dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-mp/dialog-mp.component */ "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts");











const ROUTES = [
    {
        path: '',
        component: _monthly_production_component__WEBPACK_IMPORTED_MODULE_3__["MonthlyProductionComponent"],
        children: []
    }
];
let MonthlyProductionModule = class MonthlyProductionModule {
};
MonthlyProductionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_monthly_production_component__WEBPACK_IMPORTED_MODULE_3__["MonthlyProductionComponent"], _dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_10__["DialogMPComponent"]],
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
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__["LibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"]
        ],
        providers: [_services_monthly_production_service__WEBPACK_IMPORTED_MODULE_9__["MonthlyProductionService"]],
        entryComponents: [_dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_10__["DialogMPComponent"]]
    })
], MonthlyProductionModule);



/***/ }),

/***/ "./src/app/modules/monthly-production/services/monthly-production.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/monthly-production/services/monthly-production.service.ts ***!
  \***********************************************************************************/
/*! exports provided: MonthlyProductionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyProductionService", function() { return MonthlyProductionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _type_data_services_type_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type-data/services/type-data.service */ "./src/app/modules/type-data/services/type-data.service.ts");
/* harmony import */ var _products_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/product.service */ "./src/app/modules/products/services/product.service.ts");
/* harmony import */ var _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../product-line/services/product-line.service */ "./src/app/modules/product-line/services/product-line.service.ts");








let MonthlyProductionService = class MonthlyProductionService {
    constructor(http, t_dSV, productSV, productLineSV) {
        this.http = http;
        this.t_dSV = t_dSV;
        this.productSV = productSV;
        this.productLineSV = productLineSV;
        this.monthlyProductionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productLineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.typeDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
    }
    get monthlyProduction$() {
        return this.monthlyProductionsSubject.asObservable();
    }
    get products$() {
        return this.productSV.product$;
    }
    get productLine$() {
        return this.productLineSV.productLine$;
    }
    get typeData$() {
        return this.t_dSV.typeData$;
    }
    getList() {
        const request = [
            this.http.get("monthly-production"),
            this.http.get("products"),
            this.http.get("product-line")
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(request).subscribe((res) => {
            const monthlyProduction = res[0];
            const products = res[1];
            const productLine = res[2];
            this.monthlyProductionsSubject.next(monthlyProduction);
            this.productsSubject.next(products);
            this.productLineSubject.next(productLine);
        });
    }
    add(mProduction) {
        console.log(mProduction);
        this.http.post("monthly-production", mProduction).subscribe((res) => {
            res.map(e => {
                const newList = [e, ...this.monthlyProductionsSubject.value];
                this.monthlyProductionsSubject.next(newList);
            });
        });
    }
    update(monthlyProduction) {
        return this.http.patch("monthly-production", monthlyProduction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            const { value } = this.monthlyProductionsSubject;
            const index = value.findIndex(e => e.id == monthlyProduction.id);
            const newList = Object.assign({}, value);
            newList[index] = monthlyProduction;
            const product = this.productsSubject.value.find(e => e.id == monthlyProduction.p_id);
            monthlyProduction.products = product;
            const typeData1 = this.typeDataSubject.value.find(e => e.id == monthlyProduction.t_d_id);
            monthlyProduction.typeData = typeData1;
            this.monthlyProductionsSubject.next(newList);
        }));
    }
    delete(id) {
        this.http.delete("monthly-production/" + id).subscribe(res => {
            const { value } = this.monthlyProductionsSubject;
            const newList = value.filter(e => e.id != id);
            this.monthlyProductionsSubject.next(newList);
        });
    }
};
MonthlyProductionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _type_data_services_type_data_service__WEBPACK_IMPORTED_MODULE_5__["TypeDataService"] },
    { type: _products_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_7__["ProductLineService"] }
];
MonthlyProductionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MonthlyProductionService);



/***/ })

}]);
//# sourceMappingURL=modules-monthly-production-monthly-production-module-es2015.js.map