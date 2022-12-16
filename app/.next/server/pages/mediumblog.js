"use strict";
(() => {
var exports = {};
exports.id = 782;
exports.ids = [782,308,229,582];
exports.modules = {

/***/ 6015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mediumblog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/mediumblog/components/index.jsx
var components = __webpack_require__(6254);
;// CONCATENATED MODULE: ./functions/fetchData.js
async function fetchData({ url , args  }) {
    let parameters = "";
    if (args != null) parameters = Object.entries(args).map(([key, value])=>`${key}=${value}`).join("&");
    const dataitems = await fetch(`${url}?${parameters}`).then((data)=>data.json());
    return dataitems;
}


;// CONCATENATED MODULE: ./pages/mediumblog/index.jsx




const MediumBlogs = ()=>{
    const [items, setItems] = (0,external_react_.useState)({
        feed: "",
        items: [],
        status: "ok"
    });
    (0,external_react_.useEffect)(()=>{
        async function loadData() {
            let datas = await fetchData({
                url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emakas"
            });
            setItems(datas);
        }
        loadData();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full mx-auto md:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "list-none",
                    children: items.items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components["default"], {
                                item: item
                            })
                        }, index))
                })
            })
        })
    });
};
/* harmony default export */ const mediumblog = (MediumBlogs);


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
var __webpack_exports__ = __webpack_require__.X(0, [254], () => (__webpack_exec__(6015)));
module.exports = __webpack_exports__;

})();