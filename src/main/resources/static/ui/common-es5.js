function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
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
          var _this = this;

          this.http.get("type-data").subscribe(function (res) {
            return _this.typeDataSubject.next(res);
          });
        }
      }, {
        key: "add",
        value: function add(typeData) {
          var _this2 = this;

          this.http.post("type-data", typeData).subscribe(function (res) {
            res.map(function (e) {
              var newList = [e].concat(_toConsumableArray(_this2.typeDataSubject.value));

              _this2.typeDataSubject.next(newList);
            });
          });
        }
      }, {
        key: "update",
        value: function update(typeData) {
          var _this3 = this;

          return this.http.patch("type-data", typeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var value = _this3.typeDataSubject.value;
            var index = value.findIndex(function (e) {
              return e.id == typeData.id;
            });

            var newList = _toConsumableArray(value);

            newList[index] = typeData;

            _this3.typeDataSubject.next(newList);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this4 = this;

          this.http["delete"]("type-data/" + id).subscribe(function (res) {
            var value = _this4.typeDataSubject.value;
            var newList = value.filter(function (e) {
              return e.id != id;
            });

            _this4.typeDataSubject.next(newList);
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