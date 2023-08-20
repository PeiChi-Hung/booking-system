(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9672)), "C:\\Users\\ASUS\\Documents\\booking-system\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3122)), "C:\\Users\\ASUS\\Documents\\booking-system\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["C:\\Users\\ASUS\\Documents\\booking-system\\src\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 1042:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2304))

/***/ }),

/***/ 4710:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8886));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5621))

/***/ }),

/***/ 2304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-avatar/dist/index.mjs
var dist = __webpack_require__(2129);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(2019);
;// CONCATENATED MODULE: ./src/components/ui/avatar.tsx
/* __next_internal_client_entry_do_not_use__ Avatar,AvatarImage,AvatarFallback auto */ 



const Avatar = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }));
Avatar.displayName = dist/* Root */.fC.displayName;
const AvatarImage = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Image */.Ee, {
        ref: ref,
        className: (0,utils.cn)("aspect-square h-full w-full", className),
        ...props
    }));
AvatarImage.displayName = dist/* Image */.Ee.displayName;
const AvatarFallback = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Fallback */.NY, {
        ref: ref,
        className: (0,utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }));
AvatarFallback.displayName = dist/* Fallback */.NY.displayName;


;// CONCATENATED MODULE: ./src/components/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Navbar() {
    const [isOpen, setisOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: ()=>setisOpen(!isOpen),
                className: "flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: `fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`,
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: `fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`,
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: isOpen ? "block" : "hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-1 px-2 pb-3 pt-2 w-[200px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Avatar, {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AvatarImage, {
                                    src: "https://github.com/shadcn.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(AvatarFallback, {
                                    children: "CN"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium",
                            "aria-current": "page",
                            children: "Orders"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",
                            children: "Reports"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 8886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NewOrder)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 5 modules
var dist = __webpack_require__(6980);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js + 2 modules
var x = __webpack_require__(7403);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(2019);
;// CONCATENATED MODULE: ./src/components/ui/dialog.tsx
/* __next_internal_client_entry_do_not_use__ Dialog,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = dist/* Root */.fC;
const DialogTrigger = dist/* Trigger */.xz;
const DialogPortal = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Portal */.h_, {
        className: (0,utils.cn)(className),
        ...props
    });
DialogPortal.displayName = dist/* Portal */.h_.displayName;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
        ref: ref,
        className: (0,utils.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = dist/* Overlay */.aV.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Content */.VY, {
                ref: ref,
                className: (0,utils.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(x/* default */.Z, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = dist/* Content */.VY.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = dist/* Title */.Dx.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var react_label_dist = __webpack_require__(3618);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(1971);
;// CONCATENATED MODULE: ./src/components/ui/label.tsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority_dist/* cva */.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_label_dist/* Root */.f, {
        ref: ref,
        className: (0,utils.cn)(labelVariants(), className),
        ...props
    }));
Label.displayName = react_label_dist/* Root */.f.displayName;


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(1085);
;// CONCATENATED MODULE: ./src/components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? react_slot_dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: (0,utils.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./src/components/ui/input.tsx



const Input = /*#__PURE__*/ react_.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: (0,utils.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


;// CONCATENATED MODULE: ./src/components/NewOrder.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function NewOrder() {
    return(// TODO: wrap dialog with form
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dialog, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogTrigger, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    children: "New Order"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
                className: "max-w-[425px] md:max-w-[600px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DialogHeader, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                            children: "Make a new order"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "customer_id",
                                        className: "text-right",
                                        children: "Customer ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "customer_id",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "customer_name",
                                        className: "text-right",
                                        children: "Customer name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "name",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "order_type",
                                        className: "text-right",
                                        children: "Order Type"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "order_type",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "location",
                                        className: "text-right",
                                        children: "Location"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "location",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "start_date",
                                        className: "text-right",
                                        children: "Start Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "start_date",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "end_date",
                                        className: "text-right",
                                        children: "End Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "end_date",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "start_time",
                                        className: "text-right",
                                        children: "Start Time"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "start_time",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "end_time",
                                        className: "text-right",
                                        children: "End Time"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "end_time",
                                        className: "col-span-3"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DialogFooter, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            type: "submit",
                            children: "Create"
                        })
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs),
/* harmony export */   TabsContent: () => (/* binding */ TabsContent),
/* harmony export */   TabsList: () => (/* binding */ TabsList),
/* harmony export */   TabsTrigger: () => (/* binding */ TabsTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4649);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2019);
/* __next_internal_client_entry_do_not_use__ Tabs,TabsList,TabsTrigger,TabsContent auto */ 



const Tabs = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const TabsList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }));
TabsList.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV.displayName;
const TabsTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }));
TabsTrigger.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const TabsContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }));
TabsContent.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



/***/ }),

/***/ 2019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9610);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 3122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4490);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\ASUS\Documents\booking-system\src\components\Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Booking system",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} px-6 pt-6`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 9672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/ui/tabs.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\ASUS\Documents\booking-system\src\components\ui\tabs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Tabs"];

const e1 = proxy["TabsList"];

const e2 = proxy["TabsTrigger"];

const e3 = proxy["TabsContent"];

;// CONCATENATED MODULE: ./src/components/NewOrder.tsx

const NewOrder_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\ASUS\Documents\booking-system\src\components\NewOrder.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: NewOrder_esModule, $$typeof: NewOrder_$$typeof } = NewOrder_proxy;
const NewOrder_default_ = NewOrder_proxy.default;


/* harmony default export */ const NewOrder = (NewOrder_default_);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(5182);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(2794);
;// CONCATENATED MODULE: ./src/lib/utils.ts


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}

;// CONCATENATED MODULE: ./src/components/ui/table.tsx



const Table = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full overflow-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
            ref: ref,
            className: cn("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("thead", {
        ref: ref,
        className: cn("[&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        ref: ref,
        className: cn("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tfoot", {
        ref: ref,
        className: cn("bg-primary font-medium text-primary-foreground", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
        ref: ref,
        className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
        ref: ref,
        className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
        ref: ref,
        className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("caption", {
        ref: ref,
        className: cn("mt-4 text-sm text-muted-foreground", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 2 modules
var dist = __webpack_require__(3809);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(8668);
;// CONCATENATED MODULE: ./src/components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./src/components/RunningTask.tsx



const orders = [
    {
        order_id: "ORD001",
        order_date: "2023/04/01",
        customer_id: "1",
        customer_name: "Alpha",
        start_dates: [
            "2023/05/01"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/05/10"
        ],
        end_times: [
            "13:00"
        ],
        order_type: "Type 1",
        locations: [
            "Springvale"
        ]
    },
    {
        order_id: "ORD002",
        order_date: "2023/05/01",
        customer_id: "2",
        customer_name: "Beta",
        start_dates: [
            "2023/05/04",
            "2023/05/19"
        ],
        start_times: [
            "09:00",
            "09:00"
        ],
        end_dates: [
            "2023/11/20",
            "2024/01/01"
        ],
        end_times: [
            "11:00",
            "11:00"
        ],
        order_type: "Type 2",
        locations: [
            "CBD",
            "Westall"
        ]
    },
    {
        order_id: "ORD003",
        order_date: "2023/05/04",
        customer_id: "3",
        customer_name: "Gamma",
        start_dates: [
            "2023/07/29"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/09/29"
        ],
        end_times: [
            "23:00"
        ],
        order_type: "Type 3",
        locations: [
            "Wheelers Hill"
        ]
    },
    {
        order_id: "ORD004",
        order_date: "2023/05/11",
        customer_id: "4",
        customer_name: "Lambda",
        start_dates: [
            "2023/07/04"
        ],
        start_times: [
            "07:00"
        ],
        end_dates: [
            "2023/09/04"
        ],
        end_times: [
            "09:00"
        ],
        order_type: "Type 4",
        locations: [
            "Clayton"
        ]
    }
];
function RunningTask() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "w-[100px]",
                            children: "Order Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer ID"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Order Type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Location"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Action"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                children: orders.map((order)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "font-medium",
                                children: order.order_date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.order_type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.locations.map((location)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: location
                                    }, location))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableCell, {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        children: "Update"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        className: "mx-1",
                                        children: "Pause"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }, order.order_id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/CancelledTask.tsx


// type OrderProps = {
//   order_id: string
//   order_date: string
//   customer_id: string
//   customer_name:string
//   start_dates: string[]
//   start_times: string[]
//   end_dates: string[]
//   end_times: string[]
//   order_type: string
//   location: string
//   service_fee: string
//   cancel_date: string
// }
const CancelledTask_orders = [
    {
        order_id: "ORD001",
        order_date: "2023/04/01",
        customer_id: "1",
        customer_name: "Alpha",
        start_dates: [
            "2023/05/01",
            "2023/05/02"
        ],
        start_times: [
            "09:00",
            "09:00"
        ],
        end_dates: [
            "2023/05/10",
            "2023/05/11"
        ],
        end_times: [
            "13:00",
            "14:00"
        ],
        order_type: "Type 1",
        location: "Springvale",
        service_fee: "$250",
        cancel_date: "2023/05/10"
    },
    {
        order_id: "ORD002",
        order_date: "2023/05/01",
        customer_id: "2",
        customer_name: "Beta",
        start_dates: [
            "2023/05/04"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/11/20"
        ],
        end_times: [
            "11:00"
        ],
        order_type: "Type 2",
        location: "CBD",
        service_fee: "$350",
        cancel_date: "2023/10/10"
    },
    {
        order_id: "ORD003",
        order_date: "2023/05/04",
        customer_id: "3",
        customer_name: "Gamma",
        start_dates: [
            "2023/07/29"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/09/29"
        ],
        end_times: [
            "23:00"
        ],
        order_type: "Type 3",
        location: "Wheelers Hill",
        service_fee: "$240",
        cancel_date: "2023/11/10"
    },
    {
        order_id: "ORD004",
        order_date: "2023/05/11",
        customer_id: "4",
        customer_name: "Lambda",
        start_dates: [
            "2023/07/04"
        ],
        start_times: [
            "07:00"
        ],
        end_dates: [
            "2023/09/04"
        ],
        end_times: [
            "09:00"
        ],
        order_type: "Type 4",
        location: "Clayton",
        service_fee: "$200",
        cancel_date: "2024/01/10"
    }
];
function CancelledTask() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "w-[100px]",
                            children: "Order Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer ID"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Order Type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Location"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Service Fee"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Cancel Date"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                children: CancelledTask_orders.map((order)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "font-medium",
                                children: order.order_date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.order_type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.location
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.service_fee
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.cancel_date
                            })
                        ]
                    }, order.order_id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/PauseTask.tsx



const PauseTask_orders = [
    {
        order_id: "ORD001",
        order_date: "2023/04/01",
        customer_id: "1",
        customer_name: "Alpha",
        start_dates: [
            "2023/05/01"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/05/10"
        ],
        end_times: [
            "13:00"
        ],
        order_type: "Type 1",
        locations: [
            "Springvale"
        ]
    },
    {
        order_id: "ORD002",
        order_date: "2023/05/01",
        customer_id: "2",
        customer_name: "Beta",
        start_dates: [
            "2023/05/04",
            "2023/05/19"
        ],
        start_times: [
            "09:00",
            "09:00"
        ],
        end_dates: [
            "2023/11/20",
            "2024/01/01"
        ],
        end_times: [
            "11:00",
            "11:00"
        ],
        order_type: "Type 2",
        locations: [
            "CBD",
            "Westall"
        ]
    },
    {
        order_id: "ORD003",
        order_date: "2023/05/04",
        customer_id: "3",
        customer_name: "Gamma",
        start_dates: [
            "2023/07/29"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/09/29"
        ],
        end_times: [
            "23:00"
        ],
        order_type: "Type 3",
        locations: [
            "Wheelers Hill"
        ]
    },
    {
        order_id: "ORD004",
        order_date: "2023/05/11",
        customer_id: "4",
        customer_name: "Lambda",
        start_dates: [
            "2023/07/04"
        ],
        start_times: [
            "07:00"
        ],
        end_dates: [
            "2023/09/04"
        ],
        end_times: [
            "09:00"
        ],
        order_type: "Type 4",
        locations: [
            "Clayton"
        ]
    }
];
function PauseTask() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "w-[100px]",
                            children: "Order Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer ID"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Order Type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Location"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Action"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                children: PauseTask_orders.map((order)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "font-medium",
                                children: order.order_date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.order_type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.locations.map((location)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: location
                                    }, location))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableCell, {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        children: "Update"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        className: "mx-1",
                                        children: "Resume"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }, order.order_id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/PaidTask.tsx


// type OrderProps = {
//   order_id: string
//   order_date: string
//   customer_id: string
//   customer_name:string
//   start_dates: string[]
//   start_times: string[]
//   end_dates: string[]
//   end_times: string[]
//   order_type: string
//   location: string
//   service_fee: string
//   paid_date: string
// }
const PaidTask_orders = [
    {
        order_id: "ORD001",
        order_date: "2023/04/01",
        customer_id: "1",
        customer_name: "Alpha",
        start_dates: [
            "2023/05/01",
            "2023/05/02"
        ],
        start_times: [
            "09:00",
            "09:00"
        ],
        end_dates: [
            "2023/05/10",
            "2023/05/11"
        ],
        end_times: [
            "13:00",
            "14:00"
        ],
        order_type: "Type 1",
        location: "Springvale",
        service_fee: "$250",
        paid_date: "2023/05/10"
    },
    {
        order_id: "ORD002",
        order_date: "2023/05/01",
        customer_id: "2",
        customer_name: "Beta",
        start_dates: [
            "2023/05/04"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/11/20"
        ],
        end_times: [
            "11:00"
        ],
        order_type: "Type 2",
        location: "CBD",
        service_fee: "$350",
        paid_date: "2023/10/10"
    },
    {
        order_id: "ORD003",
        order_date: "2023/05/04",
        customer_id: "3",
        customer_name: "Gamma",
        start_dates: [
            "2023/07/29"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/09/29"
        ],
        end_times: [
            "23:00"
        ],
        order_type: "Type 3",
        location: "Wheelers Hill",
        service_fee: "$240",
        paid_date: "2023/11/10"
    },
    {
        order_id: "ORD004",
        order_date: "2023/05/11",
        customer_id: "4",
        customer_name: "Lambda",
        start_dates: [
            "2023/07/04"
        ],
        start_times: [
            "07:00"
        ],
        end_dates: [
            "2023/09/04"
        ],
        end_times: [
            "09:00"
        ],
        order_type: "Type 4",
        location: "Clayton",
        service_fee: "$200",
        paid_date: "2024/01/10"
    }
];
function PaidTask() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "w-[100px]",
                            children: "Order Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer ID"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Order Type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Location"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Service Fee"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Paid Date"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                children: PaidTask_orders.map((order)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "font-medium",
                                children: order.order_date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.order_type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.location
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.service_fee
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.paid_date
                            })
                        ]
                    }, order.order_id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/UnpaidTask.tsx


// type OrderProps = {
//   order_id: string
//   order_date: string
//   customer_id: string
//   customer_name:string
//   start_dates: string[]
//   start_times: string[]
//   end_dates: string[]
//   end_times: string[]
//   order_type: string
//   location: string
//   service_fee: string
//   paid_date: string
// }
const UnpaidTask_orders = [
    {
        order_id: "ORD001",
        order_date: "2023/04/01",
        customer_id: "1",
        customer_name: "Alpha",
        start_dates: [
            "2023/05/01",
            "2023/05/02"
        ],
        start_times: [
            "09:00",
            "09:00"
        ],
        end_dates: [
            "2023/05/10",
            "2023/05/11"
        ],
        end_times: [
            "13:00",
            "14:00"
        ],
        order_type: "Type 1",
        location: "Springvale",
        service_fee: "$250"
    },
    {
        order_id: "ORD002",
        order_date: "2023/05/01",
        customer_id: "2",
        customer_name: "Beta",
        start_dates: [
            "2023/05/04"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/11/20"
        ],
        end_times: [
            "11:00"
        ],
        order_type: "Type 2",
        location: "CBD",
        service_fee: "$350"
    },
    {
        order_id: "ORD003",
        order_date: "2023/05/04",
        customer_id: "3",
        customer_name: "Gamma",
        start_dates: [
            "2023/07/29"
        ],
        start_times: [
            "09:00"
        ],
        end_dates: [
            "2023/09/29"
        ],
        end_times: [
            "23:00"
        ],
        order_type: "Type 3",
        location: "Wheelers Hill",
        service_fee: "$240"
    },
    {
        order_id: "ORD004",
        order_date: "2023/05/11",
        customer_id: "4",
        customer_name: "Lambda",
        start_dates: [
            "2023/07/04"
        ],
        start_times: [
            "07:00"
        ],
        end_dates: [
            "2023/09/04"
        ],
        end_times: [
            "09:00"
        ],
        order_type: "Type 4",
        location: "Clayton",
        service_fee: "$200"
    }
];
function UnpaidTask() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "w-[100px]",
                            children: "Order Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer ID"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Customer Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Order Type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Location"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Date"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Start Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "End Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            className: "text-right",
                            children: "Service Fee"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                children: UnpaidTask_orders.map((order)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "font-medium",
                                children: order.order_date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: order.customer_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.order_type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.location
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_dates.map((date)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: date
                                    }, date))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.start_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.end_times.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: time
                                    }, time))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                className: "text-right",
                                children: order.service_fee
                            })
                        ]
                    }, order.order_id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/page.tsx








function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "mt-5 px-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
            defaultValue: "running",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e1, {
                    className: "grid w-full grid-cols-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                            value: "running",
                            children: "Running"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                            value: "pause",
                            children: "Pause"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                            value: "unpaid",
                            children: "Unpaid"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                            value: "paid",
                            children: "Paid"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                            value: "cancelled",
                            children: "Cancelled"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e3, {
                    value: "running",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewOrder, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RunningTask, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e3, {
                    value: "pause",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewOrder, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PauseTask, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e3, {
                    value: "unpaid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewOrder, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(UnpaidTask, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e3, {
                    value: "paid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewOrder, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PaidTask, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e3, {
                    value: "cancelled",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewOrder, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CancelledTask, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,603], () => (__webpack_exec__(8081)));
module.exports = __webpack_exports__;

})();