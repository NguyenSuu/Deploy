(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-type-data-type-data-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\" [formGroup]=\"form\">\r\n    <h1 mat-dialog-title>Sản phẩm</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n            <div fxFlex=\"45\" fxFlex.xs=\"45\">\r\n\r\n                <mat-form-field>\r\n                    <mat-label> Mã số liệu</mat-label>\r\n                    <input matInput formControlName=\"code\" placeholder=\"DL01\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"5\" fxFlex.xs=\"5\" ></div>\r\n            <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                <mat-form-field>\r\n                    <mat-label> Tên số liệu</mat-label>\r\n                    <input matInput formControlName=\"name\" placeholder=\"Thực tế\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n        <button mat-button (click)=\"onNoClick()\">Hủy</button>\r\n        <button mat-button (click)=\"submit()\">Xác nhận</button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/type-data/type-data.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/type-data/type-data.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-primary\">\r\n                <h4 class=\"card-title\">MÃ LOẠI SỐ LIỆU</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table mat-table [dataSource]=\"typeData\" class=\"mat-elevation-z8\">\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as i\"> {{i+1}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Code Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mã số liệu </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as index\">\r\n                            <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentTypeData.code\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.code}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tên số liệu </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentTypeData.name\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                                <button mat-raised-button (click)=\"updateTypeData()\">Xác nhận</button>\r\n                                <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                            </ng-container>\r\n                            <ng-template #acceptButton>\r\n                                <ng-container *ngIf=\"editIndex == null\">\r\n                                    <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                                    <button mat-raised-button (click)=\"deleteTyteData(element.id)\">Xóa</button>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvdHlwZS1kYXRhL2RpYWxvZy10eXBlLWRhdGEvZGlhbG9nLXR5cGUtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DialogTypeDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTypeDataComponent", function() { return DialogTypeDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_type_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/type-data.service */ "./src/app/modules/type-data/services/type-data.service.ts");





let DialogTypeDataComponent = class DialogTypeDataComponent {
    constructor(dialogRef, data, typeDataSv, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.typeDataSv = typeDataSv;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            code: [''],
            name: ['']
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        const typeData = this.form.value;
        this.typeDataSv.add(typeData);
        this.dialogRef.close();
    }
};
DialogTypeDataComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _services_type_data_service__WEBPACK_IMPORTED_MODULE_4__["TypeDataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DialogTypeDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-type-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-type-data.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-type-data.component.scss */ "./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogTypeDataComponent);



/***/ }),

/***/ "./src/app/modules/type-data/services/type-data.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/type-data/services/type-data.service.ts ***!
  \*****************************************************************/
/*! exports provided: TypeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDataService", function() { return TypeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





const DOMAIN = "";
let TypeDataService = class TypeDataService {
    constructor(http) {
        this.http = http;
        this.typeDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getList();
    }
    get typeData$() {
        return this.typeDataSubject.asObservable();
    }
    getList() {
        this.http.get("type-data").subscribe((res) => this.typeDataSubject.next(res));
    }
    add(typeData) {
        this.http.post("type-data", typeData).subscribe((res) => {
            const newList = [res, ...this.typeDataSubject.value];
            {
                this.typeDataSubject.next(newList);
            }
        });
    }
    update(typeData) {
        return this.http.patch("type-data", typeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            const { value } = this.typeDataSubject;
            const index = value.findIndex(e => e.id == typeData.id);
            const newList = [...value];
            newList[index] = typeData;
            this.typeDataSubject.next(newList);
        }));
    }
    delete(id) {
        this.http.delete("type-data/" + id).subscribe((res) => {
            const { value } = this.typeDataSubject;
            const newList = value.filter(e => e.id != id);
            this.typeDataSubject.next(newList);
        });
    }
};
TypeDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TypeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TypeDataService);



/***/ }),

/***/ "./src/app/modules/type-data/type-data.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/type-data/type-data.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n#addNew {\n  width: 300px;\n  height: 50px;\n  margin: 5px;\n  background-color: #2020cf;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluL3NyYy9hcHAvbW9kdWxlcy90eXBlLWRhdGEvQzpcXFVzZXJzXFxLSU5HXFxEZXNrdG9wXFxFY29ub21pYy1TdGF0aXN0aWNcXGUtc3RhdGlzdGljc1xcVUlcXHByb2plY3RzL0FkbWluXFxzcmNcXGFwcFxcbW9kdWxlc1xcdHlwZS1kYXRhXFx0eXBlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJBZG1pbi9zcmMvYXBwL21vZHVsZXMvdHlwZS1kYXRhL3R5cGUtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6IkFkbWluL3NyYy9hcHAvbW9kdWxlcy90eXBlLWRhdGEvdHlwZS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jYWRkTmV3e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDIwNyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYWRkTmV3IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMGNmO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/type-data/type-data.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/type-data/type-data.component.ts ***!
  \**********************************************************/
/*! exports provided: TypeDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDataComponent", function() { return TypeDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_type_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/type-data.service */ "./src/app/modules/type-data/services/type-data.service.ts");
/* harmony import */ var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@lib/services/confirm-dialog.service */ "./src/app/@lib/services/confirm-dialog.service.ts");
/* harmony import */ var _dialog_type_data_dialog_type_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-type-data/dialog-type-data.component */ "./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");






let TypeDataComponent = class TypeDataComponent {
    constructor(typeDataSv, confirmDialog, dialog) {
        this.typeDataSv = typeDataSv;
        this.confirmDialog = confirmDialog;
        this.dialog = dialog;
        this.displayedColumns = ["position", "code", "name", "action"];
        this.typeData = null;
        this.editIndex = null;
        this.currentTypeData = null;
        this.oldTypeData = null;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_type_data_dialog_type_data_component__WEBPACK_IMPORTED_MODULE_4__["DialogTypeDataComponent"], {
            data: { typeData: this.typeData }
        });
    }
    ngOnInit() {
        this.typeDataSv.typeData$.subscribe(l => this.typeData = l);
    }
    toggleEdit(id, typeData) {
        this.editIndex = id;
        this.currentTypeData = typeData;
        this.oldTypeData = Object.assign({}, typeData);
    }
    cancelEdit() {
        this.currentTypeData.code = this.oldTypeData.code;
        this.currentTypeData.name = this.oldTypeData.name;
        this.editIndex = this.currentTypeData = null;
    }
    updateTypeData() {
        this.typeDataSv.update(this.currentTypeData).subscribe(_ => this.currentTypeData = this.editIndex = null);
    }
    deleteTyteData(id) {
        this.confirmDialog.show().then(res => {
            if (res) {
                this.typeDataSv.delete(id);
            }
        });
    }
};
TypeDataComponent.ctorParameters = () => [
    { type: _services_type_data_service__WEBPACK_IMPORTED_MODULE_2__["TypeDataService"] },
    { type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
TypeDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type-data.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/type-data/type-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type-data.component.scss */ "./src/app/modules/type-data/type-data.component.scss")).default]
    })
], TypeDataComponent);



/***/ }),

/***/ "./src/app/modules/type-data/type-data.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/type-data/type-data.module.ts ***!
  \*******************************************************/
/*! exports provided: TypeDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDataModule", function() { return TypeDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _type_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-data.component */ "./src/app/modules/type-data/type-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");
/* harmony import */ var _services_type_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/type-data.service */ "./src/app/modules/type-data/services/type-data.service.ts");
/* harmony import */ var _dialog_type_data_dialog_type_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-type-data/dialog-type-data.component */ "./src/app/modules/type-data/dialog-type-data/dialog-type-data.component.ts");











const ROUTES = [
    {
        path: '',
        component: _type_data_component__WEBPACK_IMPORTED_MODULE_3__["TypeDataComponent"],
        children: []
    }
];
let TypeDataModule = class TypeDataModule {
};
TypeDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_data_component__WEBPACK_IMPORTED_MODULE_3__["TypeDataComponent"], _dialog_type_data_dialog_type_data_component__WEBPACK_IMPORTED_MODULE_10__["DialogTypeDataComponent"]],
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
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__["LibModule"]
        ],
        providers: [_services_type_data_service__WEBPACK_IMPORTED_MODULE_9__["TypeDataService"]],
        entryComponents: [_dialog_type_data_dialog_type_data_component__WEBPACK_IMPORTED_MODULE_10__["DialogTypeDataComponent"]]
    })
], TypeDataModule);



/***/ })

}]);
//# sourceMappingURL=modules-type-data-type-data-module-es2015.js.map