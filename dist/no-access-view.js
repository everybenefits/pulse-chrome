"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAccessView = NoAccessView;
const jsx_runtime_1 = require("react/jsx-runtime");
/** Presentational no-access screen — apps supply copy + destination URL. */
function NoAccessView({ title, body, ctaLabel, href, }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex min-h-screen items-center justify-center bg-[var(--mesh-base)] p-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "studio-panel max-w-md p-8 text-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "font-display text-2xl text-ink", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-3 text-sm text-muted", children: body }), (0, jsx_runtime_1.jsx)("a", { href: href, className: "mt-6 inline-flex h-10 items-center rounded-xl bg-brand px-4 text-sm font-semibold text-on-brand", children: ctaLabel })] }) }));
}
