function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-monthly-production-monthly-production-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.html":
  /*!****************************************************************************************************************************************************************************!*\
    !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.html ***!
    \****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMonthlyProductionDialogMpDialogMpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form\">\r\n    <h1 mat-dialog-title>Số liệu sản xuất theo tháng</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n           \r\n            <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                <mat-form-field>\r\n                    <mat-label>Năm</mat-label>\r\n                    <input matInput [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"10\" fxFlex.xs=\"10\"></div>\r\n            <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                <mat-form-field>\r\n                    <mat-label>Tháng</mat-label>\r\n                    <mat-select  [(ngModel)]=\"month_value\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let m of month\" [value]=\"m\">\r\n                            {{m}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div mat-dialog-content>\r\n        <div [formGroup]=\"form\">\r\n            <div formArrayName=\"mProduction\" *ngFor=\"let control of mProductionControl.controls;index as i\">\r\n                <form class=\"example-form\" [formGroupName]=\"i\">\r\n                    <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                        <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                            <mat-form-field>\r\n                                <mat-label> Tên sản phẩm</mat-label>\r\n                                <mat-select formControlName=\"p_id\">\r\n                                    <mat-option *ngFor=\"let p of mPSV.products$ | async\" [value]=\"p.id\">\r\n                                        {{p.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"50\" fxFlex.xs=\"50\">\r\n                            <mat-form-field>\r\n                                <mat-label>Số liệu</mat-label>\r\n                                <input matInput formControlName=\"data\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button (click)=\"addMore()\">Thêm nhiều</button>\r\n    <div mat-dialog-actions>\r\n        <button mat-button (click)=\"onNoClick()\">Hủy</button>\r\n        <button mat-button (click)=\"submit()\">Thêm</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/monthly-production.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/monthly-production.component.html ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMonthlyProductionMonthlyProductionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "        <button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-primary\">\r\n                <h4 class=\"card-title\">Số liệu sản xuất theo tháng</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table mat-table [dataSource]=\"monthlyProduction\" class=\"mat-elevation-z8\" matSort>\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Code Column -->\r\n                    <ng-container matColumnDef=\"month\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tháng </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as index\">\r\n                            <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentMonthlyProduction.month\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.month}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"years\">\r\n                        <th mat-header-cell *matHeaderCellDef>Năm </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentMonthlyProduction.year\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.year}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"product_id\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tên sản phẩm</th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <mat-form-field>\r\n                                    <mat-select [(ngModel)]=\"element.p_id\">\r\n                                        <mat-option *ngFor=\"let p of mPSV.products$ | async\" [value]=\"p.id\">\r\n                                            {{p.name}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element?.products?.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"productLine_id\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tên loại sản phẩm</th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <mat-form-field>\r\n                                    <mat-select [(ngModel)]=\"element.pL_id\">\r\n                                        <mat-option *ngFor=\"let pL of mPSV.productLine$ | async\" [value]=\"pL.id\">\r\n                                            {{ pL.name}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element?.products?.productLine?.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"data\">\r\n                        <th mat-header-cell *matHeaderCellDef> Số liệu </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentMonthlyProduction.data\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.data}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"delete\">\r\n                        <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                                <button mat-raised-button (click)=\"updateData()\">Xác nhận</button>\r\n                                <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                            </ng-container>\r\n                            <ng-template #acceptButton>\r\n                                <ng-container *ngIf=\"editIndex == null\">\r\n                                    <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                                    <button mat-raised-button (click)=\"deleteData(element.id)\">Xóa</button>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </div>\r\n        </div>";
    /***/
  },

  /***/
  "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMonthlyProductionDialogMpDialogMpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvbW9udGhseS1wcm9kdWN0aW9uL2RpYWxvZy1tcC9kaWFsb2ctbXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DialogMPComponent */

  /***/
  function srcAppModulesMonthlyProductionDialogMpDialogMpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogMPComponent", function () {
      return DialogMPComponent;
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


    var _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/monthly-production.service */
    "./src/app/modules/monthly-production/services/monthly-production.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var DialogMPComponent =
    /*#__PURE__*/
    function () {
      function DialogMPComponent(dialogRef, data, mPSV, formBuilder) {
        _classCallCheck(this, DialogMPComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.mPSV = mPSV;
        this.formBuilder = formBuilder;
        this.month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        this.year = null;
        this.month_value = null;
      }

      _createClass(DialogMPComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            mProduction: this.formBuilder.array([])
          });
          this.addMore(); // this.mPSV.monthlyProductionsSubject.subscribe(
          //   (res: any) => {
          //     const {productCode, typeDataCode} = res[0]
          //     this.form.patchValue({
          //       productCode,
          //       typeDataCode
          //     })
          //   }
          // )
        }
      }, {
        key: "addMore",
        value: function addMore() {
          this.mProductionControl.push(this.formBuilder.group({
            month: [''],
            year: [''],
            data: [''],
            p_id: ['']
          }));
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          var mProduction = this.form.value.mProduction;
          var newMProduction = mProduction.map(function (e) {
            return Object.assign({}, e, {
              month: _this.month_value,
              year: _this.year
            });
          });
          this.mPSV.add(newMProduction);
          this.dialogRef.close();
        }
      }, {
        key: "mProductionControl",
        get: function get() {
          return this.form.controls.mProduction;
        }
      }]);

      return DialogMPComponent;
    }();

    DialogMPComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_3__["MonthlyProductionService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    DialogMPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-mp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-mp.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-mp.component.scss */
      "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DialogMPComponent);
    /***/
  },

  /***/
  "./src/app/modules/monthly-production/monthly-production.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/monthly-production/monthly-production.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMonthlyProductionMonthlyProductionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  padding: 1rem;\n  display: block;\n}\n\ntable {\n  width: 100%;\n}\n\n#addNew {\n  width: 300px;\n  height: 50px;\n  margin: 5px;\n  background-color: #2020cf;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluL3NyYy9hcHAvbW9kdWxlcy9tb250aGx5LXByb2R1Y3Rpb24vQzpcXFVzZXJzXFxLSU5HXFxEZXNrdG9wXFxFY29ub21pYy1TdGF0aXN0aWNcXGUtc3RhdGlzdGljc1xcVUlcXHByb2plY3RzL0FkbWluXFxzcmNcXGFwcFxcbW9kdWxlc1xcbW9udGhseS1wcm9kdWN0aW9uXFxtb250aGx5LXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJBZG1pbi9zcmMvYXBwL21vZHVsZXMvbW9udGhseS1wcm9kdWN0aW9uL21vbnRobHktcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvbW9udGhseS1wcm9kdWN0aW9uL21vbnRobHktcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jYWRkTmV3e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDIwNyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYWRkTmV3IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMGNmO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/monthly-production/monthly-production.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/monthly-production/monthly-production.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MonthlyProductionComponent */

  /***/
  function srcAppModulesMonthlyProductionMonthlyProductionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyProductionComponent", function () {
      return MonthlyProductionComponent;
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


    var _dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialog-mp/dialog-mp.component */
    "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts");
    /* harmony import */


    var _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/monthly-production.service */
    "./src/app/modules/monthly-production/services/monthly-production.service.ts");
    /* harmony import */


    var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@lib/services/confirm-dialog.service */
    "./src/app/@lib/services/confirm-dialog.service.ts");

    var MonthlyProductionComponent =
    /*#__PURE__*/
    function () {
      function MonthlyProductionComponent(dialog, mPSV, confirmDialog) {
        _classCallCheck(this, MonthlyProductionComponent);

        this.dialog = dialog;
        this.mPSV = mPSV;
        this.confirmDialog = confirmDialog;
        this.displayedColumns = ["position", "month", "years", "product_id", "productLine_id", "data", "delete"];
        this.monthlyProduction = null;
        this.currentMonthlyProduction = null;
        this.oldMonthlyProduction = null;
        this.editIndex = null;
      }

      _createClass(MonthlyProductionComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_3__["DialogMPComponent"], {
            data: {
              monthlyProduction: this.monthlyProduction
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.mPSV.monthlyProduction$.subscribe(function (l) {
            return _this2.monthlyProduction = l;
          });
        }
      }, {
        key: "toggleEdit",
        value: function toggleEdit(index, monthlyProduction) {
          this.currentMonthlyProduction = monthlyProduction;
          this.editIndex = index;
          this.oldMonthlyProduction = Object.assign({}, monthlyProduction);
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.currentMonthlyProduction.month = this.oldMonthlyProduction.month;
          this.currentMonthlyProduction.year = this.oldMonthlyProduction.year; // this.currentMonthlyProduction.productCode = this.oldMonthlyProduction.productCode;
          // this.currentMonthlyProduction.typeDataCode = this.oldMonthlyProduction.typeDataCode;

          this.editIndex = this.currentMonthlyProduction = null;
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this3 = this;

          this.mPSV.update(this.currentMonthlyProduction).subscribe(function (_) {
            return _this3.currentMonthlyProduction = _this3.editIndex = null;
          });
        }
      }, {
        key: "deleteData",
        value: function deleteData(id) {
          var _this4 = this;

          this.confirmDialog.show().then(function (res) {
            if (res) {
              _this4.mPSV["delete"](id);
            }
          });
        }
      }]);

      return MonthlyProductionComponent;
    }();

    MonthlyProductionComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_4__["MonthlyProductionService"]
      }, {
        type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"]
      }];
    };

    MonthlyProductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monthly-production',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monthly-production.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/monthly-production/monthly-production.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monthly-production.component.scss */
      "./src/app/modules/monthly-production/monthly-production.component.scss"))["default"]]
    })], MonthlyProductionComponent);
    /***/
  },

  /***/
  "./src/app/modules/monthly-production/monthly-production.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/monthly-production/monthly-production.module.ts ***!
    \*************************************************************************/

  /*! exports provided: MonthlyProductionModule */

  /***/
  function srcAppModulesMonthlyProductionMonthlyProductionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyProductionModule", function () {
      return MonthlyProductionModule;
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


    var _monthly_production_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./monthly-production.component */
    "./src/app/modules/monthly-production/monthly-production.component.ts");
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


    var _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../@lib/lib.module */
    "./src/app/@lib/lib.module.ts");
    /* harmony import */


    var _services_monthly_production_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/monthly-production.service */
    "./src/app/modules/monthly-production/services/monthly-production.service.ts");
    /* harmony import */


    var _dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dialog-mp/dialog-mp.component */
    "./src/app/modules/monthly-production/dialog-mp/dialog-mp.component.ts");

    var ROUTES = [{
      path: '',
      component: _monthly_production_component__WEBPACK_IMPORTED_MODULE_3__["MonthlyProductionComponent"],
      children: []
    }];

    var MonthlyProductionModule = function MonthlyProductionModule() {
      _classCallCheck(this, MonthlyProductionModule);
    };

    MonthlyProductionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_monthly_production_component__WEBPACK_IMPORTED_MODULE_3__["MonthlyProductionComponent"], _dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_10__["DialogMPComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES), _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__["LibModule"]],
      providers: [_services_monthly_production_service__WEBPACK_IMPORTED_MODULE_9__["MonthlyProductionService"]],
      entryComponents: [_dialog_mp_dialog_mp_component__WEBPACK_IMPORTED_MODULE_10__["DialogMPComponent"]]
    })], MonthlyProductionModule);
    /***/
  },

  /***/
  "./src/app/modules/monthly-production/services/monthly-production.service.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/monthly-production/services/monthly-production.service.ts ***!
    \***********************************************************************************/

  /*! exports provided: MonthlyProductionService */

  /***/
  function srcAppModulesMonthlyProductionServicesMonthlyProductionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyProductionService", function () {
      return MonthlyProductionService;
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

    var DOMAIN = "";

    var MonthlyProductionService =
    /*#__PURE__*/
    function () {
      function MonthlyProductionService(http) {
        _classCallCheck(this, MonthlyProductionService);

        this.http = http;
        this.monthlyProductionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productLineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(MonthlyProductionService, [{
        key: "getList",
        value: function getList() {
          var _this5 = this;

          var request = [this.http.get("monthly-production"), this.http.get("products"), this.http.get("product-line")];
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(request).subscribe(function (res) {
            var monthlyProduction = res[0];
            var products = res[1];
            var productLine = res[2];

            _this5.monthlyProductionsSubject.next(monthlyProduction);

            _this5.productsSubject.next(products);

            _this5.productLineSubject.next(productLine);
          });
        }
      }, {
        key: "add",
        value: function add(mProduction) {
          var _this6 = this;

          console.log(mProduction);
          this.http.post("monthly-production", mProduction).subscribe(function (res) {
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this6.monthlyProductionsSubject.value));

              _this6.monthlyProductionsSubject.next(newList);
            });
          });
        }
      }, {
        key: "update",
        value: function update(monthlyProduction) {
          var _this7 = this;

          return this.http.patch("monthly-production", monthlyProduction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this7.monthlyProductionsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == monthlyProduction.id;
            });
            var newList = Object.assign({}, value);
            newList[index] = monthlyProduction;

            _this7.monthlyProductionsSubject.next(newList);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this8 = this;

          this.http["delete"]("monthly-production/" + id).subscribe(function (res) {
            var value = _this8.monthlyProductionsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this8.monthlyProductionsSubject.next(newList);
          });
        }
      }, {
        key: "monthlyProduction$",
        get: function get() {
          return this.monthlyProductionsSubject.asObservable();
        }
      }, {
        key: "products$",
        get: function get() {
          return this.productsSubject.asObservable();
        }
      }, {
        key: "productLine$",
        get: function get() {
          return this.productLineSubject.asObservable();
        }
      }]);

      return MonthlyProductionService;
    }();

    MonthlyProductionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    MonthlyProductionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MonthlyProductionService);
    /***/
  }
}]);
//# sourceMappingURL=modules-monthly-production-monthly-production-module-es5.js.map