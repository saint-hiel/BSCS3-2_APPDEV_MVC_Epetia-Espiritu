import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FolderTab from "./shared/folder-tab.js";
const STAR = "200,8 236,118 352,62 270,158 392,214 262,226 300,352 200,262 100,352 138,226 8,214 130,158 48,62 164,118";
function Folder({ folder, position, isLast, ctrl, }) {
    const tabRight = position % 2 === 0;
    const isHovered = ctrl.hovered === folder.id;
    return (_jsxs("button", { type: "button", onClick: () => ctrl.open(folder.id), onMouseEnter: () => ctrl.setHovered(folder.id), onMouseLeave: () => ctrl.setHovered(null), onFocus: () => ctrl.setHovered(folder.id), onBlur: () => ctrl.setHovered(null), "aria-label": `Open ${folder.title}`, className: "group pop relative block w-full text-left outline-none hover:-translate-y-5 focus-visible:-translate-y-5", style: {
            zIndex: position + 1,
            marginTop: position === 0 ? 0 : "calc(var(--body) * -1 + var(--peek))",
            filter: "drop-shadow(0 -8px 18px rgba(70,35,42,0.14))",
        }, children: [_jsx("div", { className: `relative flex h-[var(--tab)] ${tabRight ? "justify-end" : "justify-start"}`, children: _jsxs("div", { className: "relative h-full w-[64%] sm:w-[54%]", children: [_jsx(FolderTab, { color: folder.color, className: "absolute inset-0 h-full w-full" }), _jsx("span", { className: `absolute inset-0 flex items-center gap-3 px-[12%] font-display text-[clamp(1.05rem,4.6vw,2rem)] font-bold tracking-wide ${tabRight ? "justify-end" : "justify-start"}`, style: { color: folder.ink }, children: _jsx("span", { className: "wobble inline-block origin-bottom", children: folder.title }) })] }) }), _jsxs("div", { className: "grain relative overflow-hidden rounded-[26px] rounded-t-[22px]", style: {
                    background: folder.color,
                    height: isLast ? "var(--last)" : "var(--body)",
                    borderTopRightRadius: tabRight ? 0 : undefined,
                    borderTopLeftRadius: tabRight ? undefined : 0,
                }, children: [_jsxs("div", { className: "absolute inset-x-3 top-4 z-20 flex h-16 items-center justify-between rounded-[18px] bg-paper px-5 shadow-[0_-2px_0_rgba(70,35,42,0.06)] sm:px-7", children: [_jsxs("span", { className: "font-display text-[11px] font-medium tracking-[0.2em] opacity-60", children: [folder.index, " / 03"] }), _jsxs("span", { className: "flex items-center gap-2 text-right", children: [_jsx("span", { className: "hidden font-serif text-lg italic sm:inline", children: folder.tagline }), _jsx("span", { className: "pop ml-2 grid size-8 shrink-0 scale-75 place-items-center rounded-full opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100", style: { background: folder.color, color: folder.ink }, children: _jsx("svg", { viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 12 12 4M6 4h6v6" }) }) })] })] }), isLast && (_jsx("div", { className: "absolute inset-x-0 top-28 flex justify-center", children: _jsxs("div", { className: "pop relative w-[min(78%,520px)] group-hover:rotate-[8deg] group-hover:scale-105", children: [_jsx("svg", { viewBox: "0 0 400 360", className: "w-full", "aria-hidden": "true", children: _jsx("polygon", { points: STAR, fill: "#f6ead8", stroke: "#feb3c4", strokeWidth: "1.5", strokeLinejoin: "round" }) }), _jsx("span", { className: "absolute inset-0 grid place-items-center pt-[6%] font-serif text-[clamp(2.5rem,9vw,4.5rem)] italic text-cocoa", children: "yana." })] }) }))] }), _jsx("div", { className: `pointer-events-none absolute top-[calc(var(--tab)-74px)] z-10 flex ${tabRight ? "left-[6%]" : "right-[6%]"}`, style: { zIndex: 15 }, children: folder.photos.map((photo, i) => (_jsx("div", { className: "pop -mr-6 h-[96px] w-[118px] border-[5px] border-white bg-white shadow-[0_6px_14px_rgba(70,35,42,0.25)] sm:h-[112px] sm:w-[150px]", style: {
                        transform: isHovered
                            ? `translateY(${i ? -46 : -58}px) rotate(${i ? 9 : -11}deg) translateX(${i ? 18 : -10}px)`
                            : `rotate(${i ? 5 : -7}deg)`,
                        transitionDelay: `${i * 50}ms`,
                    }, children: _jsx("img", { src: photo.src, alt: "", className: `h-full w-full ${photo.fit === "contain" ? "object-contain p-1" : "object-cover"}` }) }, photo.src))) })] }));
}
export default function Index({ ctrl }) {
    const hovered = ctrl.folders.find((f) => f.id === ctrl.hovered);
    return (_jsxs("div", { className: "mx-auto flex min-h-screen w-full max-w-[860px] flex-col", children: [_jsxs("header", { className: "px-6 pt-8 sm:px-10 sm:pt-10", children: [_jsxs("div", { className: "flex justify-between text-[13px] tracking-wide", children: [_jsx("span", { children: "yana" }), _jsx("span", { children: "portfolio" }), _jsx("span", { children: "menu" })] }), _jsxs("div", { className: "mt-16 flex justify-between text-[13px] font-medium uppercase tracking-wide sm:mt-24", children: [_jsx("span", { children: hovered ? "open" : "pick a" }), _jsx("span", { className: "animate-rise", children: hovered ? hovered.title : "folder" }, hovered?.id ?? "none")] })] }), _jsx("section", { className: "relative mt-auto overflow-hidden px-0 pt-28 sm:px-2", style: {
                    "--tab": "clamp(52px, 9vw, 72px)",
                    "--body": "300px",
                    "--peek": "96px",
                    "--last": "clamp(440px, 62vh, 620px)",
                }, children: _jsx("div", { className: "-mb-10", children: ctrl.folders.map((folder, i) => (_jsx(Folder, { folder: folder, position: i, isLast: i === ctrl.folders.length - 1, ctrl: ctrl }, folder.id))) }) })] }));
}
