"use strict";
(() => {
var exports = {};
exports.id = 118;
exports.ids = [118,308,229,582];
exports.modules = {

/***/ 9739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unauthorized)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/UnAuthorized/index.jsx


const HoldOn = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl text-center fot-bold",
                children: "Hold on..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg text-center",
                children: props.message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "mx-auto",
                src: "/images/woah.gif",
                width: 500,
                height: 500,
                alt: "Woah woah woah..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg text-center",
                children: "And, this is not Peter's Batman glass"
            })
        ]
    });
};


;// CONCATENATED MODULE: ./pages/unauthorized/index.jsx


const Unauthorized = ()=>{
    let message = "The page you want to visit is forbidden";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(HoldOn, {
            message: message
        })
    });
};
/* harmony default export */ const unauthorized = (Unauthorized);


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675], () => (__webpack_exec__(9739)));
module.exports = __webpack_exports__;

})();