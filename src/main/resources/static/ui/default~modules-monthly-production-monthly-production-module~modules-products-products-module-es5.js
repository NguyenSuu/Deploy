function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-monthly-production-monthly-production-module~modules-products-products-module"], {
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
  "./src/app/modules/fields/services/fields.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/fields/services/fields.service.ts ***!
    \***********************************************************/

  /*! exports provided: FieldsService */

  /***/
  function srcAppModulesFieldsServicesFieldsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldsService", function () {
      return FieldsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var FieldsService =
    /*#__PURE__*/
    function () {
      function FieldsService(httpClient) {
        _classCallCheck(this, FieldsService);

        this.httpClient = httpClient;
        this.fieldsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(FieldsService, [{
        key: "getList",
        value: function getList() {
          var _this = this;

          this.httpClient.get("fields").subscribe(function (res) {
            return _this.fieldsSubject.next(res);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this2 = this;

          this.httpClient["delete"]('fields/' + id).subscribe(function (res) {
            var value = _this2.fieldsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this2.fieldsSubject.next(newList);
          });
        }
      }, {
        key: "update",
        value: function update(field) {
          var _this3 = this;

          return this.httpClient.patch("fields", field).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this3.fieldsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == field.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = field;

            _this3.fieldsSubject.next(newList);
          }));
        }
      }, {
        key: "addField",
        value: function addField(field) {
          var _this4 = this;

          this.httpClient.post("fields", field).subscribe(function (res) {
            var newList = [].concat(_toConsumableArray(res), _toConsumableArray(_this4.fieldsSubject.value));
            {
              _this4.fieldsSubject.next(newList);
            }
          });
        }
      }, {
        key: "fields$",
        get: function get() {
          return this.fieldsSubject.asObservable();
        }
      }]);

      return FieldsService;
    }();

    FieldsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], FieldsService);
    /***/
  },

  /***/
  "./src/app/modules/product-line/services/product-line.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/product-line/services/product-line.service.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductLineService */

  /***/
  function srcAppModulesProductLineServicesProductLineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductLineService", function () {
      return ProductLineService;
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
    /* harmony import */


    var _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../fields/services/fields.service */
    "./src/app/modules/fields/services/fields.service.ts");

    var ProductLineService =
    /*#__PURE__*/
    function () {
      function ProductLineService(httpClient, fieldSV) {
        _classCallCheck(this, ProductLineService);

        this.httpClient = httpClient;
        this.fieldSV = fieldSV;
        this.productLineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(ProductLineService, [{
        key: "add",
        value: function add(products) {
          var _this5 = this;

          this.httpClient.post("product-line", products).subscribe(function (res) {
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this5.productLineSubject.value));

              _this5.productLineSubject.next(newList);
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this6 = this;

          this.httpClient["delete"]("product-line/" + id).subscribe(function (res) {
            var value = _this6.productLineSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this6.productLineSubject.next(newList);
          });
        }
      }, {
        key: "update",
        value: function update(productL) {
          var _this7 = this;

          return this.httpClient.patch("product-line", productL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this7.productLineSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == productL.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = productL;

            _this7.fieldSV.fields$.subscribe(function (fieldList) {
              var fL = fieldList.find(function (e) {
                return e.id == productL.f_id;
              });
              productL.field = fL;
            });

            _this7.productLineSubject.next(newList);
          }));
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this8 = this;

          this.httpClient.get("product-line").subscribe(function (res) {
            return _this8.productLineSubject.next(res);
          });
        }
      }, {
        key: "productLine$",
        get: function get() {
          return this.productLineSubject.asObservable();
        }
      }]);

      return ProductLineService;
    }();

    ProductLineService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _fields_services_fields_service__WEBPACK_IMPORTED_MODULE_5__["FieldsService"]
      }];
    };

    ProductLineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductLineService);
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
    /* harmony import */


    var _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../product-line/services/product-line.service */
    "./src/app/modules/product-line/services/product-line.service.ts");
    /* harmony import */


    var _units_services_units_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../units/services/units.service */
    "./src/app/modules/units/services/units.service.ts");

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(httpCilent, productLineService, unitsService) {
        _classCallCheck(this, ProductService);

        this.httpCilent = httpCilent;
        this.productLineService = productLineService;
        this.unitsService = unitsService;
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(ProductService, [{
        key: "getList",
        value: function getList() {
          var _this9 = this;

          this.httpCilent.get("products").subscribe(function (res) {
            return _this9.productsSubject.next(res);
          });
        }
      }, {
        key: "add",
        value: function add(products) {
          var _this10 = this;

          this.httpCilent.post("products", products).subscribe(function (res) {
            console.log('them moi thanh cong');
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this10.productsSubject.value));

              _this10.productsSubject.next(newList);
            });
          });
        }
      }, {
        key: "update",
        value: function update(product) {
          var _this11 = this;

          return this.httpCilent.patch("products", product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this11.productsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == product.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = product;

            _this11.productLineService.productLine$.subscribe(function (pList) {
              var pL = pList.find(function (e) {
                return e.id == product.pL_id;
              });
              product.productLine = pL;
            });

            _this11.unitsService.units$.subscribe(function (uList) {
              var uL = uList.find(function (e) {
                return e.id == product.u_id;
              });
              product.units = uL;
            });

            _this11.productsSubject.next(newList);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this12 = this;

          this.httpCilent["delete"]("products/" + id).subscribe(function (res) {
            var value = _this12.productsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this12.productsSubject.next(newList);
          });
        }
      }, {
        key: "products$",
        get: function get() {
          return this.productsSubject.asObservable();
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _product_line_services_product_line_service__WEBPACK_IMPORTED_MODULE_5__["ProductLineService"]
      }, {
        type: _units_services_units_service__WEBPACK_IMPORTED_MODULE_6__["UnitsService"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProductService);
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
          var _this13 = this;

          this.http.get("units").subscribe(function (res) {
            return _this13.unitsSubject.next(res);
          });
        }
      }, {
        key: "update",
        value: function update(unit) {
          var _this14 = this;

          return this.http.patch("units", unit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this14.unitsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == unit.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = unit;

            _this14.unitsSubject.next(newList);
          }));
        }
      }, {
        key: "add",
        value: function add(unit) {
          var _this15 = this;

          this.http.post("units", unit).subscribe(function (res) {
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this15.unitsSubject.value));

              _this15.unitsSubject.next(newList);
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this16 = this;

          this.http["delete"]("units/" + id).subscribe(function (res) {
            var value = _this16.unitsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this16.unitsSubject.next(newList);
          });
        }
      }, {
        key: "units$",
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
  }
}]);
//# sourceMappingURL=default~modules-monthly-production-monthly-production-module~modules-products-products-module-es5.js.map