"use strict";
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Home = ()=>{
    let links = [
        {
            title: "Github",
            link: "https://www.github.com/rasnesakam",
            desc: ""
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/ensar-makas-a16b69199/",
            desc: ""
        },
        {
            title: "VSCO",
            link: "https://www.vsco.co/rasnesakam/gallery",
            desc: ""
        },
        {
            title: "HackerRank",
            link: "https://www.hackerrank.com/ensar_makas",
            desc: ""
        },
        {
            title: "LeetCode",
            link: "https://leetcode.com/emakas/",
            desc: ""
        },
        {
            title: "Medium",
            link: "https://medium.com/@emakas",
            desc: ""
        },
        {
            title: "Instagram",
            link: "https://instagram.com/prilog.e?igshid=Y\xe7mMyMTA2M2Y=",
            desc: ""
        },
        {
            title: "Twitter",
            link: "https://twitter.com/ensar_makas",
            desc: ""
        },
        {
            title: "Buy me a coffee",
            link: "https://www.buymeacoffee.com/emakas",
            desc: ""
        }
    ];
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(links);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((item)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: item.link,
                target: "_blank",
                className: "my-5 mx-auto block sm:w-1/2 md:w-3/4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row justify-center border-2 border-secondary bg-secondary transform transition duration-500 hover:scale-105",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center m-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "uppercase text-lg font-bold p-2",
                                children: item.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-base italic",
                                children: item.desc
                            })
                        ]
                    })
                })
            });
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

};
;