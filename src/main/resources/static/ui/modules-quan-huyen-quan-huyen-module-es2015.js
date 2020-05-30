(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-quan-huyen-quan-huyen-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/district-dialog/district-dialog.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/district-dialog/district-dialog.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Thêm mới huyện</h1>\r\n<div mat-dialog-content>\r\n    <div [formGroup]=\"form\">\r\n        <div formArrayName=\"districts\" *ngFor=\"let control of districtsControl.controls; index as i\">\r\n            <form class=\"example-form\" [formGroupName]=\"i\">\r\n                <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                    <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-label>Tên huyện/thị xã</mat-label>\r\n                            <input formControlName=\"name\" matInput placeholder=\"Thành phố Huế\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                    <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-label>Mã huyện/thị xã</mat-label>\r\n                            <input formControlName=\"code\" matInput placeholder=\"01\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<button mat-raised-button color=\"primary\" (click)=\"addMore()\">Thêm nhiều</button>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button (click)=\"onNoClick()\">Hủy</button>\r\n    <button mat-raised-button (click)=\"submit()\">Xác nhận</button>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/quan-huyen.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/quan-huyen.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Huyện</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table mat-table [dataSource]=\"showDistrict\" class=\"mat-elevation-z8\">\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let element;index as i\"> {{i+1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Code Column -->\r\n            <ng-container matColumnDef=\"code\">\r\n                <th mat-header-cell *matHeaderCellDef> Mã huyện </th>\r\n                <td mat-cell *matCellDef=\"let element;index as index\">\r\n                    <ng-container *ngIf=\"index==editCurrentIndex;else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentDistrict.code\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.code}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên huyện </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editCurrentIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentDistrict.name\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"delete\">\r\n                <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editCurrentIndex; else acceptButton\">\r\n                        <button mat-raised-button (click)=\"updateDistrict()\">Xác nhận</button>\r\n                        <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                    </ng-container>\r\n                    <ng-template #acceptButton>\r\n                        <ng-container *ngIf=\"editCurrentIndex == null\">\r\n                            <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                            <button mat-raised-button (click)=\"deleteDistrict(element.id)\">Xóa</button>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n        <mat-paginator [length]=\"district.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n            (page)=\"onChangePage($event)\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>\r\n");

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

/***/ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/quan-huyen/district-dialog/district-dialog.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy9xdWFuLWh1eWVuL2Rpc3RyaWN0LWRpYWxvZy9DOlxcVXNlcnNcXEtJTkdcXERlc2t0b3BcXEVjb25vbWljLVN0YXRpc3RpY1xcZS1zdGF0aXN0aWNzXFxVSS9wcm9qZWN0c1xcQWRtaW5cXHNyY1xcYXBwXFxtb2R1bGVzXFxxdWFuLWh1eWVuXFxkaXN0cmljdC1kaWFsb2dcXGRpc3RyaWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy9xdWFuLWh1eWVuL2Rpc3RyaWN0LWRpYWxvZy9kaXN0cmljdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvQWRtaW4vc3JjL2FwcC9tb2R1bGVzL3F1YW4taHV5ZW4vZGlzdHJpY3QtZGlhbG9nL2Rpc3RyaWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG59IiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/quan-huyen/district-dialog/district-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DistrictDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictDialogComponent", function() { return DistrictDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_quan_huyen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/quan-huyen.service */ "./src/app/modules/quan-huyen/services/quan-huyen.service.ts");





let DistrictDialogComponent = class DistrictDialogComponent {
    constructor(dialogRef, data, districtSv, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.districtSv = districtSv;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            districts: this.formBuilder.array([])
        });
        this.addMore();
    }
    get districtsControl() {
        return this.form.controls.districts;
    }
    addMore() {
        this.districtsControl.push(this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }));
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        const { districts } = this.form.value;
        this.districtSv.add(districts);
        this.dialogRef.close();
    }
};
DistrictDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _services_quan_huyen_service__WEBPACK_IMPORTED_MODULE_4__["QuanHuyenService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DistrictDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-district-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./district-dialog.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/district-dialog/district-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./district-dialog.component.scss */ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DistrictDialogComponent);



/***/ }),

/***/ "./src/app/modules/quan-huyen/quan-huyen.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/quan-huyen/quan-huyen.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvcXVhbi1odXllbi9xdWFuLWh1eWVuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/quan-huyen/quan-huyen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/quan-huyen/quan-huyen.component.ts ***!
  \************************************************************/
/*! exports provided: QuanHuyenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanHuyenComponent", function() { return QuanHuyenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_quan_huyen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/quan-huyen.service */ "./src/app/modules/quan-huyen/services/quan-huyen.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./district-dialog/district-dialog.component */ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.ts");






let QuanHuyenComponent = class QuanHuyenComponent {
    constructor(formBuilder, quanHuyenService, dialog) {
        this.formBuilder = formBuilder;
        this.quanHuyenService = quanHuyenService;
        this.dialog = dialog;
        this.displayedColumns = ['position', 'code', 'name', 'delete'];
        this.district = null;
        this.showDistrict = [];
        this.editCurrentIndex = null;
        this.oldCurrentDstrict = null;
        this.currentDistrict = null;
        // Pagination
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 25];
        this.length = 1000;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DistrictDialogComponent"], {
            data: { district: this.district }
        });
    }
    addDistrict() {
        const { districts } = this.form.value;
        this.quanHuyenService.add(districts);
    }
    cancelEdit() {
        this.currentDistrict.name = this.oldCurrentDstrict.name;
        this.currentDistrict.code = this.oldCurrentDstrict.code;
        this.editCurrentIndex = this.currentDistrict = null;
    }
    toggleEdit(index, district) {
        this.editCurrentIndex = index;
        this.currentDistrict = district;
        this.oldCurrentDstrict = Object.assign({}, district);
    }
    deleteDistrict(id) {
        this.quanHuyenService.delete(id);
    }
    updateDistrict() {
        this.quanHuyenService.update(this.currentDistrict).subscribe(_ => this.currentDistrict = this.editCurrentIndex = null);
    }
    ngOnInit() {
        this.quanHuyenService.district$
            .subscribe(l => {
            this.district = l;
            const { pageSize, } = this;
            this.onChangePage({
                length: this.district.length,
                pageSize,
                pageIndex: 0,
                previousPageIndex: null
            });
        });
    }
    onChangePage({ length, pageIndex, pageSize, previousPageIndex }) {
        console.log(length, pageIndex, pageSize, previousPageIndex);
        this.showDistrict = [...this.district].slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    }
};
QuanHuyenComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_quan_huyen_service__WEBPACK_IMPORTED_MODULE_3__["QuanHuyenService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
QuanHuyenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quan-huyen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quan-huyen.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/quan-huyen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quan-huyen.component.scss */ "./src/app/modules/quan-huyen/quan-huyen.component.scss")).default]
    })
], QuanHuyenComponent);



/***/ }),

/***/ "./src/app/modules/quan-huyen/quan-huyen.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/quan-huyen/quan-huyen.module.ts ***!
  \*********************************************************/
/*! exports provided: QuanHuyenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanHuyenModule", function() { return QuanHuyenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _quan_huyen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quan-huyen.component */ "./src/app/modules/quan-huyen/quan-huyen.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./district-dialog/district-dialog.component */ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.ts");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");











const ROUTES = [
    {
        path: '',
        component: _quan_huyen_component__WEBPACK_IMPORTED_MODULE_3__["QuanHuyenComponent"]
    }
];
let QuanHuyenModule = class QuanHuyenModule {
};
QuanHuyenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_quan_huyen_component__WEBPACK_IMPORTED_MODULE_3__["QuanHuyenComponent"], _district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DistrictDialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES),
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__["LibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
        ],
        entryComponents: [_district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DistrictDialogComponent"]]
    })
], QuanHuyenModule);



/***/ })

}]);
//# sourceMappingURL=modules-quan-huyen-quan-huyen-module-es2015.js.map