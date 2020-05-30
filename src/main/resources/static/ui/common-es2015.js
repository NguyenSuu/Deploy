(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], QuanHuyenService);



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
            res.map(e => {
                const newList = [e, ...this.typeDataSubject.value];
                this.typeDataSubject.next(newList);
            });
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TypeDataService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map