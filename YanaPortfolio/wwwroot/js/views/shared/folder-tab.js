import { jsx as _jsx } from "react/jsx-runtime";
// Rounded folder tab with sloped shoulders, stretched to any width.
export default function FolderTab({ color, className = "" }) {
    return (_jsx("svg", { viewBox: "0 0 400 72", preserveAspectRatio: "none", className: className, "aria-hidden": "true", children: _jsx("path", { d: "M0 72 C22 72 28 62 34 44 L42 20 C48 6 58 0 76 0 H324 C342 0 352 6 358 20 L366 44 C372 62 378 72 400 72 Z", fill: color }) }));
}
