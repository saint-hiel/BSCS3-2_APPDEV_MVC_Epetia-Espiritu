import { jsx as _jsx } from "react/jsx-runtime";
// Polka-dot scatter borrowed from the palette card.
const SPOTS = [
    [6, 12], [22, 70], [38, 28], [52, 84], [64, 18], [78, 58], [90, 30], [96, 82], [14, 44], [46, 54], [70, 92], [84, 8],
];
export default function Dots({ color, className = "" }) {
    return (_jsx("div", { className: `pointer-events-none absolute inset-0 ${className}`, "aria-hidden": "true", children: SPOTS.map(([x, y], i) => (_jsx("span", { className: "absolute size-3 rounded-full sm:size-4", style: { left: `${x}%`, top: `${y}%`, background: color } }, i))) }));
}
