function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-units-units-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/dialog-unit/dialog-unit.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/dialog-unit/dialog-unit.component.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUnitsDialogUnitDialogUnitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Thêm mới đơn vị tính</h1>\r\n<div mat-dialog-content>\r\n    <div [formGroup]=\"form\">\r\n        <div formArrayName=\"units\" *ngFor=\"let control of UnitsControl.controls; index as i\">\r\n            <form [formGroupName]=\"i\">\r\n                <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                        <mat-form-field>\r\n                            <mat-label>Tên đơn vị tính</mat-label>\r\n                            <input matInput formControlName=\"name\" placeholder=\"Tấn\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                        <mat-form-field>\r\n                            <mat-label>Mã đơn vị</mat-label>\r\n                            <input matInput formControlName=\"code\" placeholder=\"01\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                        <mat-form-field>\r\n                            <mat-label>Kí hiệu</mat-label>\r\n                            <input matInput formControlName=\"sign\" placeholder=\"t\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<button mat-raised-button color=\"primary\" (click)=\"addMore()\">Thêm nhiều</button>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button (click)=\"onNoClick()\">Hủy</button>\r\n    <button mat-raised-button (click)=\"submit()\">Xác nhận</button>\r\n</div>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/units.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/units.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUnitsUnitsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Đơn vị tính</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table mat-table [dataSource]=\"showUnit\" class=\"mat-elevation-z8\">\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Code Column -->\r\n            <ng-container matColumnDef=\"code\">\r\n                <th mat-header-cell *matHeaderCellDef> Mã đơn vị tính </th>\r\n                <td mat-cell *matCellDef=\"let element;index as index\">\r\n                    <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentUnit.code\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.code}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Tên đơn vị tính</th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentUnit.name\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.name}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"sign\">\r\n                <th mat-header-cell *matHeaderCellDef> Kí hiệu </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                        <input type=\"text\" [(ngModel)]=\"currentUnit.sign\" />\r\n                    </ng-container>\r\n                    <ng-template #editInput>\r\n                        {{element.sign}}\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                <td mat-cell *matCellDef=\"let element; index as index\">\r\n                    <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                        <button mat-raised-button (click)=\"updateUnit()\">Xác nhận</button>\r\n                        <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                    </ng-container>\r\n                    <ng-template #acceptButton>\r\n                        <ng-container *ngIf=\"editIndex == null\">\r\n                            <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                            <button mat-raised-button (click)=\"deleteUnit(element.id)\">Xóa</button>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"unit.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n            (page)=\"onChangePage($event)\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/@lib/components/confirm/confirm.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/@lib/components/confirm/confirm.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConfirmComponent */

  /***/
  function srcAppLibComponentsConfirmConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
      return ConfirmComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var ConfirmComponent =
    /*#__PURE__*/
    function () {
      function ConfirmComponent(data, dialogRef) {
        _classCallCheck(this, ConfirmComponent);

        this.data = data;
        this.dialogRef = dialogRef;
      }

      _createClass(ConfirmComponent, [{
        key: "confirm",
        value: function confirm() {
          this.dialogRef.close(true);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return ConfirmComponent;
    }();

    ConfirmComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm',
      template: "\n    <p>\n      {{ data.message }}\n    </p>\n\n    <div>\n      <button mat-button (click)=\"confirm()\">C\xF3</button>\n\n      <button mat-button (click)=\"onNoClick()\" >H\u1EE7y</button>\n    </div>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmComponent);
    /***/
  },

  /***/
  "./src/app/@lib/lib.module.ts":
  /*!************************************!*\
    !*** ./src/app/@lib/lib.module.ts ***!
    \************************************/

  /*! exports provided: LibModule */

  /***/
  function srcAppLibLibModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibModule", function () {
      return LibModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/confirm/confirm.component */
    "./src/app/@lib/components/confirm/confirm.component.ts");
    /* harmony import */


    var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/confirm-dialog.service */
    "./src/app/@lib/services/confirm-dialog.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var LibModule = function LibModule() {
      _classCallCheck(this, LibModule);
    };

    LibModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]],
      providers: [_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogService"]],
      entryComponents: [_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]]
    })], LibModule);
    /***/
  },

  /***/
  "./src/app/@lib/services/confirm-dialog.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@lib/services/confirm-dialog.service.ts ***!
    \*********************************************************/

  /*! exports provided: ConfirmDialogService */

  /***/
  function srcAppLibServicesConfirmDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function () {
      return ConfirmDialogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/confirm/confirm.component */
    "./src/app/@lib/components/confirm/confirm.component.ts");

    var ConfirmDialogService =
    /*#__PURE__*/
    function () {
      function ConfirmDialogService(dialog) {
        _classCallCheck(this, ConfirmDialogService);

        this.dialog = dialog;
      }

      _createClass(ConfirmDialogService, [{
        key: "show",
        value: function show() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Xác nhận";
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var dialogRef, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    dialogRef = this.dialog.open(_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
                      data: {
                        message: message
                      }
                    });
                    _context.next = 3;
                    return dialogRef.afterClosed().toPromise();

                  case 3:
                    result = _context.sent;
                    return _context.abrupt("return", new Promise(function (res, rej) {
                      if (result) {
                        res(true);
                      }
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ConfirmDialogService;
    }();

    ConfirmDialogService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    ConfirmDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ConfirmDialogService);
    /***/
  },

  /***/
  "./src/app/modules/units/dialog-unit/dialog-unit.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/units/dialog-unit/dialog-unit.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUnitsDialogUnitDialogUnitComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  margin: 0.5rem;\n}\n\nform > * {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy91bml0cy9kaWFsb2ctdW5pdC9DOlxcVXNlcnNcXEtJTkdcXERlc2t0b3BcXEVjb25vbWljLVN0YXRpc3RpY1xcZS1zdGF0aXN0aWNzXFxVSS9wcm9qZWN0c1xcQWRtaW5cXHNyY1xcYXBwXFxtb2R1bGVzXFx1bml0c1xcZGlhbG9nLXVuaXRcXGRpYWxvZy11bml0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvQWRtaW4vc3JjL2FwcC9tb2R1bGVzL3VuaXRzL2RpYWxvZy11bml0L2RpYWxvZy11bml0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKIiwiZmlsZSI6InByb2plY3RzL0FkbWluL3NyYy9hcHAvbW9kdWxlcy91bml0cy9kaWFsb2ctdW5pdC9kaWFsb2ctdW5pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG59XHJcbmZvcm0gPiAqIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfSIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG5mb3JtID4gKiB7XG4gIG1hcmdpbjogNXB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/units/dialog-unit/dialog-unit.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/units/dialog-unit/dialog-unit.component.ts ***!
    \********************************************************************/

  /*! exports provided: DialogUnitComponent */

  /***/
  function srcAppModulesUnitsDialogUnitDialogUnitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogUnitComponent", function () {
      return DialogUnitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_units_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/units.service */
    "./src/app/modules/units/services/units.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var DialogUnitComponent =
    /*#__PURE__*/
    function () {
      function DialogUnitComponent(dialogRef, data, unitSv, formBuider) {
        _classCallCheck(this, DialogUnitComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.unitSv = unitSv;
        this.formBuider = formBuider;
      }

      _createClass(DialogUnitComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "submit",
        value: function submit() {
          var units = this.form.value.units;
          this.unitSv.add(units);
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuider.group({
            units: this.formBuider.array([])
          });
          this.addMore();
        }
      }, {
        key: "addMore",
        value: function addMore() {
          this.UnitsControl.push(this.formBuider.group({
            name: [''],
            code: [''],
            sign: ['']
          }));
        }
      }, {
        key: "UnitsControl",
        get: function get() {
          return this.form.controls.units;
        }
      }]);

      return DialogUnitComponent;
    }();

    DialogUnitComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_units_service__WEBPACK_IMPORTED_MODULE_3__["UnitsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    DialogUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-unit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-unit.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/dialog-unit/dialog-unit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-unit.component.scss */
      "./src/app/modules/units/dialog-unit/dialog-unit.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DialogUnitComponent);
    /***/
  },

  /***/
  "./src/app/modules/units/services/units.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/units/services/units.service.ts ***!
    \*********************************************************/

  /*! exports provided: UnitsService */

  /***/
  function srcAppModulesUnitsServicesUnitsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsService", function () {
      return UnitsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var UnitsService =
    /*#__PURE__*/
    function () {
      function UnitsService(http) {
        _classCallCheck(this, UnitsService);

        this.http = http;
        this.unitsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(UnitsService, [{
        key: "getList",
        value: function getList() {
          var _this = this;

          this.http.get("units").subscribe(function (res) {
            return _this.unitsSubject.next(res);
          });
        }
      }, {
        key: "update",
        value: function update(unit) {
          var _this2 = this;

          return this.http.patch("units", unit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this2.unitsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == unit.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = unit;

            _this2.unitsSubject.next(newList);
          }));
        }
      }, {
        key: "add",
        value: function add(unit) {
          var _this3 = this;

          this.http.post("units", unit).subscribe(function (res) {
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this3.unitsSubject.value));

              _this3.unitsSubject.next(newList);
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this4 = this;

          this.http["delete"]("units/" + id).subscribe(function (res) {
            var value = _this4.unitsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this4.unitsSubject.next(newList);
          });
        }
      }, {
        key: "unit$",
        get: function get() {
          return this.unitsSubject.asObservable();
        }
      }]);

      return UnitsService;
    }();

    UnitsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UnitsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UnitsService);
    /***/
  },

  /***/
  "./src/app/modules/units/units.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/modules/units/units.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUnitsUnitsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9BZG1pbi9zcmMvYXBwL21vZHVsZXMvdW5pdHMvdW5pdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/units/units.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/units/units.component.ts ***!
    \**************************************************/

  /*! exports provided: UnitsComponent */

  /***/
  function srcAppModulesUnitsUnitsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsComponent", function () {
      return UnitsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/units.service */
    "./src/app/modules/units/services/units.service.ts");
    /* harmony import */


    var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../@lib/services/confirm-dialog.service */
    "./src/app/@lib/services/confirm-dialog.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dialog-unit/dialog-unit.component */
    "./src/app/modules/units/dialog-unit/dialog-unit.component.ts");

    var UnitsComponent =
    /*#__PURE__*/
    function () {
      function UnitsComponent(unitsSv, dialog, confirm) {
        _classCallCheck(this, UnitsComponent);

        this.unitsSv = unitsSv;
        this.dialog = dialog;
        this.confirm = confirm;
        this.displayedColumns = ["position", "code", "name", "sign", "action"];
        this.unit = null;
        this.showUnit = null;
        this.editIndex = null;
        this.currentUnit = null;
        this.oldUnit = null;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 25];
        this.length = 1000;
      }

      _createClass(UnitsComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_5__["DialogUnitComponent"], {
            data: {
              unit: this.unit
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.unitsSv.unit$.subscribe(function (l) {
            _this5.unit = l;
            var pageSize = _this5.pageSize;

            _this5.onChangePage({
              length: _this5.unit.length,
              pageSize: pageSize,
              pageIndex: 0,
              previousPageIndex: null
            });
          });
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(_ref) {
          var length = _ref.length,
              pageIndex = _ref.pageIndex,
              pageSize = _ref.pageSize,
              previousPageIndex = _ref.previousPageIndex;
          this.showUnit = _toConsumableArray(this.unit).slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
        }
      }, {
        key: "toggleEdit",
        value: function toggleEdit(index, unit) {
          this.editIndex = index;
          this.currentUnit = unit;
          this.oldUnit = Object.assign({}, unit);
        }
      }, {
        key: "updateUnit",
        value: function updateUnit() {
          var _this6 = this;

          this.unitsSv.update(this.currentUnit).subscribe(function (_) {
            return _this6.currentUnit = _this6.editIndex = null;
          });
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.currentUnit.code = this.oldUnit.code;
          this.currentUnit.name = this.oldUnit.name;
          this.currentUnit.sign = this.oldUnit.sign;
          this.editIndex = this.currentUnit = null;
        }
      }, {
        key: "deleteUnit",
        value: function deleteUnit(id) {
          var _this7 = this;

          this.confirm.show().then(function (res) {
            if (res) {
              _this7.unitsSv["delete"](id);
            }
          });
        }
      }]);

      return UnitsComponent;
    }();

    UnitsComponent.ctorParameters = function () {
      return [{
        type: _services_units_service__WEBPACK_IMPORTED_MODULE_2__["UnitsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogService"]
      }];
    };

    UnitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-units',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./units.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/units/units.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./units.component.scss */
      "./src/app/modules/units/units.component.scss"))["default"]]
    })], UnitsComponent);
    /***/
  },

  /***/
  "./src/app/modules/units/units.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/units/units.module.ts ***!
    \***********************************************/

  /*! exports provided: UnitsModule */

  /***/
  function srcAppModulesUnitsUnitsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsModule", function () {
      return UnitsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _units_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./units.component */
    "./src/app/modules/units/units.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _services_units_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/units.service */
    "./src/app/modules/units/services/units.service.ts");
    /* harmony import */


    var _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../@lib/lib.module */
    "./src/app/@lib/lib.module.ts");
    /* harmony import */


    var _dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dialog-unit/dialog-unit.component */
    "./src/app/modules/units/dialog-unit/dialog-unit.component.ts");

    var ROUTES = [{
      path: '',
      component: _units_component__WEBPACK_IMPORTED_MODULE_3__["UnitsComponent"]
    }];

    var UnitsModule = function UnitsModule() {
      _classCallCheck(this, UnitsModule);
    };

    UnitsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_units_component__WEBPACK_IMPORTED_MODULE_3__["UnitsComponent"], _dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_10__["DialogUnitComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES), _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _lib_lib_module__WEBPACK_IMPORTED_MODULE_9__["LibModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"]],
      providers: [_services_units_service__WEBPACK_IMPORTED_MODULE_8__["UnitsService"]],
      entryComponents: [_dialog_unit_dialog_unit_component__WEBPACK_IMPORTED_MODULE_10__["DialogUnitComponent"]]
    })], UnitsModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-units-units-module-es5.js.map