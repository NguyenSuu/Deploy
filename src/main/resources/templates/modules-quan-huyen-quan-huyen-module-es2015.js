(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-quan-huyen-quan-huyen-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/district-dialog/district-dialog.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/district-dialog/district-dialog.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Thêm mới huyện</h1>\r\n<button (click)=\"addMore()\">Thêm nhiều</button>\r\n<div [formGroup]=\"form\">\r\n    <div formArrayName=\"districts\" *ngFor=\"let control of districtsControl.controls; index as i\">\r\n        <form class=\"example-form\" [formGroupName]=\"i\">\r\n            <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <mat-label>District</mat-label>\r\n                        <input formControlName=\"name\" matInput placeholder=\"Thành phố Huế\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <mat-label>Code</mat-label>\r\n                        <input formControlName=\"code\" matInput placeholder=\"01\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n    <div fxFlex=\"20\" fxFlex.xs=\"80\">\r\n    </div>\r\n    <div fxFlex=\"80\" fxFlex.xs=\"20\">\r\n        <button (click)=\"submit()\">Xác nhận</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/quan-huyen.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/quan-huyen/quan-huyen.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-primary\">\r\n                <h4 class=\"card-title\">Huyện</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table mat-table [dataSource]=\"showDistrict\" class=\"mat-elevation-z8\">\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as i\"> {{i+1}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Code Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mã huyện </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as index\">\r\n                            <ng-container *ngIf=\"index==editCurrentIndex;else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentDistrict.code\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.code}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tên huyện </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editCurrentIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentDistrict.name\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"delete\">\r\n                        <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editCurrentIndex; else acceptButton\">\r\n                                <button mat-raised-button (click)=\"updateDistrict()\">Xác nhận</button>\r\n                                <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                            </ng-container>\r\n                            <ng-template #acceptButton>\r\n                                <ng-container *ngIf=\"editCurrentIndex == null\">\r\n                                    <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                                    <button mat-raised-button (click)=\"deleteDistrict(element.id)\">Xóa</button>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n\r\n                <mat-paginator [length]=\"district.length\"\r\n                    [pageSize]=\"pageSize\"\r\n                    [pageSizeOptions]=\"pageSizeOptions\"\r\n                    (page)=\"onChangePage($event)\">\r\n                </mat-paginator>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/quan-huyen/district-dialog/district-dialog.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvcXVhbi1odXllbi9kaXN0cmljdC1kaWFsb2cvZGlzdHJpY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

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
            name: [''],
            code: [''],
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
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n#addNew {\n  width: 300px;\n  height: 50px;\n  margin: 5px;\n  background-color: #2020cf;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluL3NyYy9hcHAvbW9kdWxlcy9xdWFuLWh1eWVuL0M6XFxVc2Vyc1xcS0lOR1xcRGVza3RvcFxcRWNvbm9taWMtU3RhdGlzdGljXFxlLXN0YXRpc3RpY3NcXFVJXFxwcm9qZWN0cy9BZG1pblxcc3JjXFxhcHBcXG1vZHVsZXNcXHF1YW4taHV5ZW5cXHF1YW4taHV5ZW4uY29tcG9uZW50LnNjc3MiLCJBZG1pbi9zcmMvYXBwL21vZHVsZXMvcXVhbi1odXllbi9xdWFuLWh1eWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoiQWRtaW4vc3JjL2FwcC9tb2R1bGVzL3F1YW4taHV5ZW4vcXVhbi1odXllbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgI2FkZE5ld3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAyMDcpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2FkZE5ldyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjBjZjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

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
/* harmony import */ var _services_quan_huyen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/quan-huyen.service */ "./src/app/modules/quan-huyen/services/quan-huyen.service.ts");
/* harmony import */ var _district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./district-dialog/district-dialog.component */ "./src/app/modules/quan-huyen/district-dialog/district-dialog.component.ts");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");












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
        declarations: [_quan_huyen_component__WEBPACK_IMPORTED_MODULE_3__["QuanHuyenComponent"], _district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DistrictDialogComponent"]],
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
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__["LibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
        ],
        providers: [
            _services_quan_huyen_service__WEBPACK_IMPORTED_MODULE_9__["QuanHuyenService"]
        ],
        entryComponents: [_district_dialog_district_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DistrictDialogComponent"]]
    })
], QuanHuyenModule);



/***/ }),

/***/ "./src/app/modules/quan-huyen/services/quan-huyen.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/quan-huyen/services/quan-huyen.service.ts ***!
  \*******************************************************************/
/*! exports provided: QuanHuyenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanHuyenService", function() { return QuanHuyenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





const DOMAIN = "";
let QuanHuyenService = class QuanHuyenService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.districtsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getList();
    }
    get district$() {
        return this.districtsSubject.asObservable();
    }
    getList() {
        this.httpClient.get("districts").subscribe((res) => this.districtsSubject.next(res));
    }
    add(districts) {
        this.httpClient.post("districts", districts).subscribe((res) => {
            const newList = [...res, ...this.districtsSubject.value];
            this.districtsSubject.next(newList);
        });
    }
    update(district) {
        return this.httpClient.patch("districts", district).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((r) => {
            const { value } = this.districtsSubject;
            const index = value.findIndex(e => e.id == district.id);
            const newList = [...value];
            newList[index] = district;
            this.districtsSubject.next(newList);
        }));
    }
    delete(id) {
        this.httpClient.delete("districts/" + id).subscribe((res) => {
            const { value } = this.districtsSubject;
            const newList = value.filter(e => e.id != id);
            this.districtsSubject.next(newList);
        });
    }
};
QuanHuyenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuanHuyenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], QuanHuyenService);



/***/ })

}]);
//# sourceMappingURL=modules-quan-huyen-quan-huyen-module-es2015.js.map