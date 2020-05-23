function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-products-products-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/dialog/dialog.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/dialog/dialog.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form\" [formGroup]=\"form\">\r\n    <h1 mat-dialog-title>Sản phẩm</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n            <div fxFlex=\"10\" fxFlex.xs=\"10\"></div>\r\n            <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                <mat-form-field>\r\n                    <mat-label>Tên ngành</mat-label>\r\n                    <mat-select [(ngModel)]=\"fieldSelectedId\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let f of productSv.fields$ | async\" [value]=\"f.id\">\r\n                            {{f.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"10\" fxFlex.xs=\"10\"></div>\r\n            <div fxFlex=\"40\" fxFlex.xs=\"40\">\r\n                <mat-form-field>\r\n                    <mat-label>Tên dòng sản phẩm</mat-label>\r\n                    <mat-select [(ngModel)]=\"plId\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let pL of nganhHienThi$ | async\" [value]=\"pL.id\">\r\n                            {{pL.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div mat-dialog-content>\r\n        <div [formGroup]=\"form\">\r\n            <div formArrayName=\"products\" *ngFor=\"let control of productsControl.controls; index as i\">\r\n                <form class=\"example-form\" [formGroupName]=\"i\">\r\n                    <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\r\n                        <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                            <mat-form-field>\r\n                                <mat-label>Tên sản phẩm</mat-label>\r\n                                <input matInput formControlName=\"name\" placeholder=\"Coffee\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                        <div fxFlex=\"30\" fxFlex.xs=\"30\">\r\n                            <mat-form-field>\r\n                                <mat-label>Mã sản phẩm</mat-label>\r\n                                <input matInput formControlName=\"code\" placeholder=\"02\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"5\" fxFlex.xs=\"5\"></div>\r\n                        <div fxFlex=\"20\" fxFlex.xs=\"20\">\r\n                            <mat-form-field>\r\n                                <mat-label>Đơn vị tính</mat-label>\r\n                                <mat-select formControlName=\"u_id\">\r\n                                    <mat-option *ngFor=\"let u of productSv.units$ | async\" [value]=\"u.id\">\r\n                                        {{u.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button (click)=\"addMore()\">Thêm nhiều</button>\r\n    <div mat-dialog-actions>\r\n        <button mat-button (click)=\"onNoClick()\">Hủy</button>\r\n        <button mat-button (click)=\"submit()\">Xác nhận</button>\r\n    </div>\r\n\r\n</form>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** C:/Users/KING/Desktop/Economic-Statistic/e-statistics/UI/node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <button id=\"addNew\" mat-raised-button (click)=\"openDialog()\">Thêm mới</button>\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-primary\">\r\n                <h4 class=\"card-title\">Sản phẩm</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table mat-table [dataSource]=\"product\" class=\"mat-elevation-z8\">\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as i\"> {{i + 1}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Code Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mã sản phẩm </th>\r\n                        <td mat-cell *matCellDef=\"let element;index as index\">\r\n                            <ng-container *ngIf=\"index==editIndex;else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentProduct.code\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.code}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef> Tên sản phẩm </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <input type=\"text\" [(ngModel)]=\"currentProduct.name\" />\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"units_id\">\r\n                        <th mat-header-cell *matHeaderCellDef> Đơn vị tính </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <mat-form-field>\r\n                                    <mat-select [(ngModel)]=\"element.u_id\">\r\n                                        <mat-option *ngFor=\"let u of productService.units$ | async\" [value]=\"u.id\">\r\n                                            {{ u.name}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element?.units?.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"product_line_id\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mã dòng sản phẩm </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else editInput\">\r\n                                <mat-form-field>\r\n                                    <mat-select [(ngModel)]=\"element.pL_id\">\r\n                                        <mat-option *ngFor=\"let pL of productService.productLine$ | async\"\r\n                                            [value]=\"pL.id\">\r\n                                            {{pL.name}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </ng-container>\r\n                            <ng-template #editInput>\r\n                                {{element?.productLine?.name}}\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"delete\">\r\n                        <th mat-header-cell *matHeaderCellDef> Thao tác </th>\r\n                        <td mat-cell *matCellDef=\"let element; index as index\">\r\n                            <ng-container *ngIf=\"index == editIndex; else acceptButton\">\r\n                                <button mat-raised-button (click)=\"updateProduct()\">Xác nhận</button>\r\n                                <button mat-raised-button (click)=\"cancelEdit()\">Hủy</button>\r\n                            </ng-container>\r\n                            <ng-template #acceptButton>\r\n                                <ng-container *ngIf=\"editIndex == null\">\r\n                                    <button mat-raised-button (click)=\"toggleEdit(index, element)\">Sửa</button>\r\n                                    <button mat-raised-button (click)=\"deleteProduct(element.id)\">Xóa</button>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/products/dialog/dialog.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/products/dialog/dialog.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsDialogDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/products/dialog/dialog.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/products/dialog/dialog.component.ts ***!
    \*************************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppModulesProductsDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/modules/products/services/product.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(dialogRef, data, productSv, formBuilder) {
        _classCallCheck(this, DialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.productSv = productSv;
        this.formBuilder = formBuilder;
        this.plId = null;
        this.fieldSelectedId = null;
      }

      _createClass(DialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close({});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            products: this.formBuilder.array([])
          });
          this.addMore();
        }
      }, {
        key: "addMore",
        value: function addMore() {
          this.productsControl.push(this.formBuilder.group({
            name: [''],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            u_id: [''],
            pL_id: ['']
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          var products = this.form.value.products;
          var newProducts = products.map(function (e) {
            return Object.assign({}, e, {
              pL_id: _this.plId
            });
          });
          this.productSv.add(newProducts);
          this.dialogRef.close();
        }
      }, {
        key: "nganhHienThi$",
        get: function get() {
          var _this2 = this;

          return this.productSv.productLine$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (listNganh) {
            return listNganh.filter(function (e) {
              return e.f_id == _this2.fieldSelectedId;
            });
          }));
        }
      }, {
        key: "productsControl",
        get: function get() {
          return this.form.controls.products;
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/dialog/dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.component.scss */
      "./src/app/modules/products/dialog/dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], DialogComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/products.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/products/products.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n#addNew {\n  width: 300px;\n  height: 50px;\n  margin: 5px;\n  background-color: #2020cf;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9DOlxcVXNlcnNcXEtJTkdcXERlc2t0b3BcXEVjb25vbWljLVN0YXRpc3RpY1xcZS1zdGF0aXN0aWNzXFxVSVxccHJvamVjdHMvQWRtaW5cXHNyY1xcYXBwXFxtb2R1bGVzXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJBZG1pbi9zcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJBZG1pbi9zcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNhZGROZXd7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMjA3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhZGROZXcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwY2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/products/products.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/products/products.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppModulesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
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


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/modules/products/services/product.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/modules/products/dialog/dialog.component.ts");
    /* harmony import */


    var _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@lib/services/confirm-dialog.service */
    "./src/app/@lib/services/confirm-dialog.service.ts");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(productService, dialog, confirmDialog) {
        _classCallCheck(this, ProductsComponent);

        this.productService = productService;
        this.dialog = dialog;
        this.confirmDialog = confirmDialog;
        this.displayedColumns = ['position', 'code', 'name', 'units_id', 'product_line_id', 'delete'];
        this.product = null;
        this.editIndex = null;
        this.currentProduct = null;
        this.oldProduct = null;
      }

      _createClass(ProductsComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            data: {
              product: this.product
            }
          });
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.currentProduct.code = this.oldProduct.code;
          this.currentProduct.name = this.oldProduct.name;
          this.currentProduct.pL_id = this.oldProduct.pL_id;
          this.currentProduct.u_id = this.oldProduct.u_id;
          this.editIndex = this.currentProduct = null;
        }
      }, {
        key: "updateProduct",
        value: function updateProduct() {
          var _this3 = this;

          this.productService.update(this.currentProduct).subscribe(function (_) {
            return _this3.currentProduct = _this3.editIndex = null;
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.confirmDialog.show('Bạn chắc chắn muốn xóa?').then(function (res) {
                      if (res) {
                        _this4.productService["delete"](id);
                      }
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "toggleEdit",
        value: function toggleEdit(index, product) {
          this.editIndex = index;
          this.currentProduct = product;
          this.oldProduct = Object.assign({}, product);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.productService.product$.subscribe(function (l) {
            return _this5.product = l;
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _lib_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/modules/products/products.component.scss"))["default"]]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/products.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/products/products.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppModulesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
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


    var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/modules/products/products.component.ts");
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


    var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/modules/products/services/product.service.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/modules/products/dialog/dialog.component.ts");
    /* harmony import */


    var _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../@lib/lib.module */
    "./src/app/@lib/lib.module.ts");

    var ROUTES = [{
      path: '',
      component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
      children: []
    }];

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROUTES), _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__["LibModule"]],
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]],
      entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]]
    })], ProductsModule);
    /***/
  },

  /***/
  "./src/app/modules/products/services/product.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/products/services/product.service.ts ***!
    \**************************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppModulesProductsServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
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

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(httpCilent) {
        _classCallCheck(this, ProductService);

        this.httpCilent = httpCilent;
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.unitsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productLinesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.fieldsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(ProductService, [{
        key: "getList",
        value: function getList() {
          var _this6 = this;

          var http = this.httpCilent;
          var requests = [http.get("products"), http.get("units"), http.get("product-line"), http.get("fields")];
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(requests.map(function (rq) {
            return rq.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
          })).subscribe(function (res) {
            var products = res[0];
            var productLine = res[1];
            var units = res[2];
            var fields = res[3];

            _this6.productsSubject.next(products);

            _this6.productLinesSubject.next(units);

            _this6.unitsSubject.next(productLine);

            _this6.fieldsSubject.next(fields);
          });
        }
      }, {
        key: "add",
        value: function add(products) {
          var _this7 = this;

          this.httpCilent.post("products", products).subscribe(function (res) {
            console.log('them moi thanh cong');
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this7.productsSubject.value));

              _this7.productsSubject.next(newList);
            });
          });
        }
      }, {
        key: "update",
        value: function update(product) {
          var _this8 = this;

          return this.httpCilent.patch("products", product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this8.productsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == product.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = product;

            var pL = _this8.productLinesSubject.value.find(function (e) {
              return e.id == product.pL_id;
            });

            product.productLine = pL;

            _this8.productsSubject.next(newList);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this9 = this;

          this.httpCilent["delete"]("products/" + id).subscribe(function (res) {
            var value = _this9.productsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this9.productsSubject.next(newList);
          });
        }
      }, {
        key: "product$",
        get: function get() {
          return this.productsSubject.asObservable();
        }
      }, {
        key: "productLine$",
        get: function get() {
          return this.productLinesSubject.asObservable();
        }
      }, {
        key: "units$",
        get: function get() {
          return this.unitsSubject.asObservable();
        }
      }, {
        key: "fields$",
        get: function get() {
          return this.fieldsSubject.asObservable();
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProductService);
    /***/
  }
}]);
//# sourceMappingURL=modules-products-products-module-es5.js.map