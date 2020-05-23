(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-units-units-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/dialog-unit/dialog-unit.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/dialog-unit/dialog-unit.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\" [formGroup]=\"form\">\r\n    <h1 mat-dialog-title>Đơn vị tính</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n            <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n\r\n                <mat-form-field>\r\n                    <mat-label>Tên đơn vị tính</mat-label>\r\n                    <input matInput formControlName=\"code\" placeholder=\"Tấn\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                <mat-form-field>\r\n                    <mat-label>Mã đơn vị</mat-label>\r\n                    <input matInput formControlName=\"name\" placeholder=\"01\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                <mat-form-field>\r\n                    <mat-label>Kí hiệu</mat-label>\r\n                    <input matInput formControlName=\"sign\" placeholder=\"t\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n        <button mat-button (click)=\"onNoClick()\">Hủy</button>\r\n        <button mat-button (click)=\"submit()\">Thêm</button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/units.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/units.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-primary\">\r\n                <h4 class=\"card-title\">Đơn vị tính</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table mat-table [dataSource]=\"unit\" class=\"mat-elevation-z8\">\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Code Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mã đơn vị tính </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as index\">\r\n                            <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentUnit.code\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.code}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tên đơn vị tính</th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentUnit.name\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"sign\">\r\n                        <th mat-header-cell *matHeaderCellDef> Kí hiệu </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentUnit.sign\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.sign}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                                <button mat-raised-button (click)=\"updateUnit()\">Xác nhận</button>\r\n                                <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                            </ng-container>\r\n                            <ng-template #acceptButton>\r\n                                <ng-container *ngIf=\"editIndex == null\">\r\n                                    <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                                    <button mat-raised-button (click)=\"deleteUnit(element.id)\">Xóa</button>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/units/dialog-unit/dialog-unit.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/units/dialog-unit/dialog-unit.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvdW5pdHMvZGlhbG9nLXVuaXQvZGlhbG9nLXVuaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/units/dialog-unit/dialog-unit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/units/dialog-unit/dialog-unit.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUnitComponent", function() { return DialogUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/units.service */ "./src/app/modules/units/services/units.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");





let DialogUnitComponent = class DialogUnitComponent {
    constructor(dialogRef, data, unitSv, formBuider) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.unitSv = unitSv;
        this.formBuider = formBuider;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        const unit = this.form.value;
        this.unitSv.add(unit);
        this.dialogRef.close();
    }
    ngOnInit() {
        this.form = this.formBuider.group({
            code: [''],
            name: [''],
            sign: ['']
        });
    }
};
DialogUnitComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_units_service__WEBPACK_IMPORTED_MODULE_3__["UnitsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DialogUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-unit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-unit.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/dialog-unit/dialog-unit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-unit.component.scss */ "./src/app/modules/units/dialog-unit/dialog-unit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogUnitComponent);



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





const DOMAIN = "";
let UnitsService = class UnitsService {
    constructor(http) {
        this.http = http;
        this.unitsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
    }
    get unit$() {
        return this.unitsSubject.asObservable();
    }
    getList() {
        this.http.get(DOMAIN + "units").subscribe((res) => this.unitsSubject.next(res));
    }
    update(unit) {
        return this.http.patch(DOMAIN + "units", unit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            const { value } = this.unitsSubject;
            const index = value.findIndex(e => e.id == unit.id);
            const newList = [...value];
            newList[index] = unit;
            this.unitsSubject.next(newList);
        }));
    }
    add(unit) {
        this.http.post(DOMAIN + "units", unit).subscribe((res) => {
            const newList = [res, ...this.unitsSubject.value];
            {
                this.unitsSubject.next(newList);
            }
        });
    }
    delete(id) {
        this.http.delete(DOMAIN + "units/" + id).subscribe((res) => {
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UnitsService);



/***/ }),

/***/ "./src/app/modules/units/units.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/units/units.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n#addNew {\n  width: 300px;\n  height: 50px;\n  margin: 5px;\n  background-color: #2020cf;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluL3NyYy9hcHAvbW9kdWxlcy91bml0cy9DOlxcVXNlcnNcXEtJTkdcXERlc2t0b3BcXEVjb25vbWljLVN0YXRpc3RpY1xcZS1zdGF0aXN0aWNzXFxVSVxccHJvamVjdHMvQWRtaW5cXHNyY1xcYXBwXFxtb2R1bGVzXFx1bml0c1xcdW5pdHMuY29tcG9uZW50LnNjc3MiLCJBZG1pbi9zcmMvYXBwL21vZHVsZXMvdW5pdHMvdW5pdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvdW5pdHMvdW5pdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNhZGROZXd7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMjA3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhZGROZXcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwY2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/units/units.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/units/units.component.ts ***!
  \**************************************************/
/*! exports provided: UnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsComponent", function() { return UnitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/units.service */ "./src/app/modules/units/services/units.service.ts");
/* harmony import */ var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@lib/services/confirm-dialog.service */ "./src/app/@lib/services/confirm-dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-unit/dialog-unit.component */ "./src/app/modules/units/dialog-unit/dialog-unit.component.ts");






let UnitsComponent = class UnitsComponent {
    constructor(unitsSv, dialog, confirm) {
        this.unitsSv = unitsSv;
        this.dialog = dialog;
        this.confirm = confirm;
        this.displayedColumns = ["position", "code", "name", "sign", "action"];
        this.unit = null;
        this.editIndex = null;
        this.currentUnit = null;
        this.oldUnit = null;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_5__["DialogUnitComponent"], {
            width: '750px',
            height: '200px',
            data: { unit: this.unit }
        });
    }
    ngOnInit() {
        this.unitsSv.unit$.subscribe(l => this.unit = l);
    }
    toggleEdit(index, unit) {
        this.editIndex = index;
        this.currentUnit = unit;
        this.oldUnit = Object.assign({}, unit);
    }
    updateUnit() {
        this.unitsSv.update(this.currentUnit).subscribe(_ => this.currentUnit = this.editIndex = null);
    }
    cancelEdit() {
        this.currentUnit.code = this.oldUnit.code;
        this.currentUnit.name = this.oldUnit.name;
        this.currentUnit.sign = this.oldUnit.sign;
        this.editIndex = this.currentUnit = null;
    }
    deleteUnit(id) {
        this.confirm.show().then(res => {
            if (res) {
                this.unitsSv.delete(id);
            }
        });
    }
};
UnitsComponent.ctorParameters = () => [
    { type: _services_units_service__WEBPACK_IMPORTED_MODULE_2__["UnitsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogService"] }
];
UnitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-units',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./units.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/units.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./units.component.scss */ "./src/app/modules/units/units.component.scss")).default]
    })
], UnitsComponent);



/***/ }),

/***/ "./src/app/modules/units/units.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/units/units.module.ts ***!
  \***********************************************/
/*! exports provided: UnitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsModule", function() { return UnitsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _units_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units.component */ "./src/app/modules/units/units.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/units.service */ "./src/app/modules/units/services/units.service.ts");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@lib/lib.module */ "./src/app/@lib/lib.module.ts");
/* harmony import */ var _dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-unit/dialog-unit.component */ "./src/app/modules/units/dialog-unit/dialog-unit.component.ts");











const ROUTES = [
    {
        path: '',
        component: _units_component__WEBPACK_IMPORTED_MODULE_3__["UnitsComponent"]
    }
];
let UnitsModule = class UnitsModule {
};
UnitsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_units_component__WEBPACK_IMPORTED_MODULE_3__["UnitsComponent"], _dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_10__["DialogUnitComponent"]],
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
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__["LibModule"]
        ],
        providers: [_services_units_service__WEBPACK_IMPORTED_MODULE_8__["UnitsService"]],
        entryComponents: [_dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_10__["DialogUnitComponent"]]
    })
], UnitsModule);



/***/ })

}]);
//# sourceMappingURL=modules-units-units-module-es2015.js.map