"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandMark = BrandMark;
const jsx_runtime_1 = require("react/jsx-runtime");
/** Shared brand mark without next/image (works in Storybook + all apps). */
function BrandMark({ size = 28, className = "", alt = "Pulse", src = "/brand/pulse-logo.png", }) {
    return (
    // eslint-disable-next-line @next/next/no-img-element
    (0, jsx_runtime_1.jsx)("img", { src: src, alt: alt, width: size, height: size, className: `rounded-lg object-contain ${className}` }));
}
