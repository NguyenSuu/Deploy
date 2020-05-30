function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/modules/quan-huyen/services/quan-huyen.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/quan-huyen/services/quan-huyen.service.ts ***!
    \*******************************************************************/

  /*! exports provided: QuanHuyenService */

  /***/
  function srcAppModulesQuanHuyenServicesQuanHuyenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuanHuyenService", function () {
      return QuanHuyenService;
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

    var QuanHuyenService =
    /*#__PURE__*/
    function () {
      function QuanHuyenService(httpClient) {
        _classCallCheck(this, QuanHuyenService);

        this.httpClient = httpClient;
        this.districtsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(QuanHuyenService, [{
        key: "getList",
        value: function getList() {
          var _this = this;

          this.httpClient.get("districts").subscribe(function (res) {
            return _this.districtsSubject.next(res);
          });
        }
      }, {
        key: "add",
        value: function add(districts) {
          var _this2 = this;

          this.httpClient.post("districts", districts).subscribe(function (res) {
            var newList = [].concat(_toConsumableArray(res), _toConsumableArray(_this2.districtsSubject.value));

            _this2.districtsSubject.next(newList);
          });
        }
      }, {
        key: "update",
        value: function update(district) {
          var _this3 = this;

          return this.httpClient.patch("districts", district).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (r) {
            var value = _this3.districtsSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == district.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = district;

            _this3.districtsSubject.next(newList);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this4 = this;

          this.httpClient["delete"]("districts/" + id).subscribe(function (res) {
            var value = _this4.districtsSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this4.districtsSubject.next(newList);
          });
        }
      }, {
        key: "district$",
        get: function get() {
          return this.districtsSubject.asObservable();
        }
      }]);

      return QuanHuyenService;
    }();

    QuanHuyenService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuanHuyenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], QuanHuyenService);
    /***/
  },

  /***/
  "./src/app/modules/type-data/services/type-data.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/type-data/services/type-data.service.ts ***!
    \*****************************************************************/

  /*! exports provided: TypeDataService */

  /***/
  function srcAppModulesTypeDataServicesTypeDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeDataService", function () {
      return TypeDataService;
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

    var TypeDataService =
    /*#__PURE__*/
    function () {
      function TypeDataService(http) {
        _classCallCheck(this, TypeDataService);

        this.http = http;
        this.typeDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getList();
      }

      _createClass(TypeDataService, [{
        key: "getList",
        value: function getList() {
          var _this5 = this;

          this.http.get("type-data").subscribe(function (res) {
            return _this5.typeDataSubject.next(res);
          });
        }
      }, {
        key: "add",
        value: function add(typeData) {
          var _this6 = this;

          this.http.post("type-data", typeData).subscribe(function (res) {
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this6.typeDataSubject.value));

              _this6.typeDataSubject.next(newList);
            });
          });
        }
      }, {
        key: "update",
        value: function update(typeData) {
          var _this7 = this;

          return this.http.patch("type-data", typeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this7.typeDataSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == typeData.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = typeData;

            _this7.typeDataSubject.next(newList);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this8 = this;

          this.http["delete"]("type-data/" + id).subscribe(function (res) {
            var value = _this8.typeDataSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this8.typeDataSubject.next(newList);
          });
        }
      }, {
        key: "typeData$",
        get: function get() {
          return this.typeDataSubject.asObservable();
        }
      }]);

      return TypeDataService;
    }();

    TypeDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TypeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TypeDataService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map