"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 7317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbar/index.jsx


function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "bg-secondary border-primary flex flex-row justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col pl-2 justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("big", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                children: "ensar makas"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-row justify-around align-items items-stretch",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "",
                            children: "Ana Sayfa"
                        })
                    }, "1"),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "mediumblog",
                            className: "",
                            children: "Blog"
                        })
                    }, "2"),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "unauthorized",
                            className: "",
                            children: "Servisler"
                        })
                    }, "3"),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "about",
                            children: "Hakkında"
                        })
                    }, "4")
                ]
            })
        ]
    });
}


;// CONCATENATED MODULE: ./components/Footer/index.jsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}


;// CONCATENATED MODULE: ./pages/layout.jsx



function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-ground",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " min-h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "px-10",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;