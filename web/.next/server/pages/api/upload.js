"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/upload.js":
/*!*********************************!*\
  !*** ./src/pages/api/upload.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);\nformidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    console.log(\"зашел в функцию\");\n    let filedata = req.body;\n    // подключаем модуль для работы с файловой системой\n    const fs = __webpack_require__(/*! fs */ \"fs\");\n    // имя файла, в который нужно сохранить данные\n    //const fileName = 'file.mp4';\n    const form = (0,formidable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        multiples: true\n    });\n    console.log(\"form\", form.parse);\n    return new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            console.log(\"ffffff\");\n            console.log(\"files\", files);\n            if (files !== {} && files.video !== undefined) {\n                console.log(\"Файлы есть!\");\n                console.log(\"filepath\", files.video[0].filepath);\n                fs.readFile(files.video[0].filepath, async (err, data)=>{\n                    if (!err) {\n                        const fileName = files.video[0].originalFilename;\n                        fs.writeFile(\"public/static/videos/\" + fileName, data, (err)=>{\n                            // если произошла ошибка, выбрасываем исключение\n                            if (err) throw err;\n                            // выводим сообщение об успешной записи\n                            console.log(\"Данные сохранены в файл\");\n                        });\n                    }\n                });\n            }\n            resolve();\n        });\n    }).then(()=>{\n        res.status(200).json(\"ok\");\n        console.log(\"Запрос приннят\");\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VwbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvQztBQUNSO0FBRXJCLE1BQU1FLFNBQVM7SUFDcEJDLEtBQUs7UUFDREMsWUFBWTtJQUNoQjtBQUNGLEVBQUM7QUFDYyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUNDLFFBQVFDLElBQUk7SUFFWixJQUFJQyxXQUFXSixJQUFJSztJQUNuQixtREFBbUQ7SUFDbkQsTUFBTUMsS0FBS0MsbUJBQU9BLENBQUM7SUFFbkIsOENBQThDO0lBQzlDLDhCQUE4QjtJQUM5QixNQUFNQyxPQUFPZCxzREFBVUEsQ0FBQztRQUFDZSxXQUFVO0lBQUk7SUFDdkNQLFFBQVFDLElBQUksUUFBT0ssS0FBS0U7SUFFeEIsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQzNCTCxLQUFLRSxNQUFNVixLQUFLLENBQUNjLEtBQUtDLFFBQVFDO1lBQzVCZCxRQUFRQyxJQUFJO1lBQ1pELFFBQVFDLElBQUksU0FBUWE7WUFDbEIsSUFBSSxVQUFXLENBQUMsS0FBT0EsTUFBTUMsVUFBVUMsV0FBWTtnQkFDakRoQixRQUFRQyxJQUFJO2dCQUNaRCxRQUFRQyxJQUFJLFlBQVdhLE1BQU1DLEtBQUssQ0FBQyxFQUFFLENBQUNFO2dCQUN0Q2IsR0FBR2MsU0FBU0osTUFBTUMsS0FBSyxDQUFDLEVBQUUsQ0FBQ0UsVUFBVSxPQUFPTCxLQUFLTztvQkFDL0MsSUFBSSxDQUFDUCxLQUFLO3dCQUNKLE1BQU1RLFdBQVdOLE1BQU1DLEtBQUssQ0FBQyxFQUFFLENBQUNNO3dCQUNoQ2pCLEdBQUdrQixVQUFVLDBCQUF3QkYsVUFBVUQsTUFBTSxDQUFDUDs0QkFDcEQsZ0RBQWdEOzRCQUNoRCxJQUFJQSxLQUFLLE1BQU1BOzRCQUNmLHVDQUF1Qzs0QkFDdkNaLFFBQVFDLElBQUk7d0JBQ2Q7b0JBQ0Y7Z0JBQUM7WUFDVDtZQUNBUztRQUNGO0lBRUYsR0FBR2EsS0FBSztRQUNOeEIsSUFBSXlCLE9BQU8sS0FBS0MsS0FBSztRQUNyQnpCLFFBQVFDLElBQUk7SUFBaUI7QUFDbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXR1cmUvLi9zcmMvcGFnZXMvYXBpL3VwbG9hZC5qcz81MzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtaWRhYmxlIGZyb20gJ2Zvcm1pZGFibGUnO1xuaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICAgIGJvZHlQYXJzZXI6IGZhbHNlXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coJ9C30LDRiNC10Lsg0LIg0YTRg9C90LrRhtC40Y4nKVxuXG4gIGxldCBmaWxlZGF0YSA9IHJlcS5ib2R5O1xuICAvLyDQv9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Ywg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDRhNCw0LnQu9C+0LLQvtC5INGB0LjRgdGC0LXQvNC+0LlcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuICBcbiAgLy8g0LjQvNGPINGE0LDQudC70LAsINCyINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0YHQvtGF0YDQsNC90LjRgtGMINC00LDQvdC90YvQtVxuICAvL2NvbnN0IGZpbGVOYW1lID0gJ2ZpbGUubXA0JztcbiAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoe211bHRpcGxlczp0cnVlfSlcbiAgY29uc29sZS5sb2coXCJmb3JtXCIsZm9ybS5wYXJzZSlcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImZmZmZmZlwiKVxuICAgICAgY29uc29sZS5sb2coJ2ZpbGVzJyxmaWxlcylcbiAgICAgICAgaWYgKChmaWxlcyAhPT0ge30pICYmIChmaWxlcy52aWRlbyAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfQpNCw0LnQu9GLINC10YHRgtGMIScpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVwYXRoJyxmaWxlcy52aWRlb1swXS5maWxlcGF0aClcbiAgICAgICAgICBmcy5yZWFkRmlsZShmaWxlcy52aWRlb1swXS5maWxlcGF0aCwgYXN5bmMgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZXMudmlkZW9bMF0ub3JpZ2luYWxGaWxlbmFtZVxuICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlKFwicHVibGljL3N0YXRpYy92aWRlb3MvXCIrZmlsZU5hbWUsIGRhdGEsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0LXRgdC70Lgg0L/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCwg0LLRi9Cx0YDQsNGB0YvQstCw0LXQvCDQuNGB0LrQu9GO0YfQtdC90LjQtVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIC8vINCy0YvQstC+0LTQuNC8INGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINGD0YHQv9C10YjQvdC+0Lkg0LfQsNC/0LjRgdC4XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQlNCw0L3QvdGL0LUg0YHQvtGF0YDQsNC90LXQvdGLINCyINGE0LDQudC7Jyk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG5cbiAgICB9KS50aGVuKCgpPT57XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbignb2snKVxuICAgICAgY29uc29sZS5sb2coJ9CX0LDQv9GA0L7RgSDQv9GA0LjQvdC90Y/RgicpfSlcbn1cbiJdLCJuYW1lcyI6WyJmb3JtaWRhYmxlIiwibXVsdGVyIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZWRhdGEiLCJib2R5IiwiZnMiLCJyZXF1aXJlIiwiZm9ybSIsIm11bHRpcGxlcyIsInBhcnNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsInZpZGVvIiwidW5kZWZpbmVkIiwiZmlsZXBhdGgiLCJyZWFkRmlsZSIsImRhdGEiLCJmaWxlTmFtZSIsIm9yaWdpbmFsRmlsZW5hbWUiLCJ3cml0ZUZpbGUiLCJ0aGVuIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/upload.js"));
module.exports = __webpack_exports__;

})();