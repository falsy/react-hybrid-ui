"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ViewArea = function (_a) {
    var isAcitive = _a.isAcitive, isBehind = _a.isBehind, children = _a.children;
    var _b = react_1.useState(false), isShow = _b[0], setShow = _b[1];
    var _c = react_1.useState(false), isBgShow = _c[0], setBgShow = _c[1];
    var _d = react_1.useState(false), isBgMotion = _d[0], setBgMotion = _d[1];
    react_1.useEffect(function () {
        if (isAcitive) {
            setShow(true);
            setBgShow(true);
            setTimeout(function () {
                setBgMotion(true);
            }, 60);
        }
        else {
            setShow(false);
            setBgMotion(false);
            setTimeout(function () {
                setBgShow(false);
            }, 200);
        }
    }, [isAcitive]);
    return (React.createElement($Arae, { isBehind: isBehind },
        React.createElement($Bg, { isBgShow: isBgShow, isBgMotion: isBgMotion }),
        React.createElement($Content, { isShow: isShow }, children)));
};
exports.default = ViewArea;
var $Arae = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  transform: translateX(0);\n  will-change: transform;\n  transition: transform 0.3s;\n  ", "\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  transform: translateX(0);\n  will-change: transform;\n  transition: transform 0.3s;\n  ", "\n"])), function (props) { return props.isBehind && "transform: translateX(-5%);"; });
var $Bg = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #000;\n  z-index: 1800;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.3s;\n  display: none;\n  ", "\n  ", "\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #000;\n  z-index: 1800;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.3s;\n  display: none;\n  ", "\n  ",
    "\n"])), function (props) { return props.isBgShow && "display: block;"; }, function (props) { return props.isBgMotion && "\n    transition: opacity 0.2s;\n    opacity: 0.6;\n  "; });
var $Content = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2000;\n  transform: translateX(100%);\n  transition: transform 0.2s;\n  will-change: transform;\n  ", "\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2000;\n  transform: translateX(100%);\n  transition: transform 0.2s;\n  will-change: transform;\n  ",
    "\n"])), function (props) { return props.isShow && "\n    transition: transform 0.3s;\n    transform: translateX(5%);\n  "; });
var templateObject_1, templateObject_2, templateObject_3;
