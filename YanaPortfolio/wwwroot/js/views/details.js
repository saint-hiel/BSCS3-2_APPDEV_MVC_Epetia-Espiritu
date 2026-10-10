import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Folder/Details view: the opened folder with its full content.
import { useState } from "react";
import { PALETTE } from "../portfolio-model.js";
import Dots from "./shared/dots.js";
import FolderTab from "./shared/folder-tab.js";
import RichText from "./shared/rich-text.js";
const DOT_COLOR = {
    who: PALETTE.olive,
    skills: PALETTE.cocoa,
    experience: PALETTE.petal,
};
function Chip({ folder, children }) {
    return (_jsx("span", { className: "rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]", style: { background: folder.color, color: folder.ink }, children: children }));
}
function Tags({ folder, tags }) {
    if (!tags)
        return null;
    return (_jsx("div", { className: "flex flex-wrap gap-2", children: tags.split(" · ").map((t) => (_jsx(Chip, { folder: folder, children: t }, t))) }));
}
function Project({ folder, item, n }) {
    const [open, setOpen] = useState(false);
    const [first, ...rest] = item.body;
    return (_jsxs("article", { className: "group relative border-t border-cocoa/15 py-10 first:border-t-0 first:pt-2", children: [_jsxs("div", { className: "mb-4 flex items-baseline gap-4", children: [_jsx("span", { className: "font-display text-sm font-bold opacity-40", children: String(n).padStart(2, "0") }), _jsx("h3", { className: "font-display text-[clamp(1.4rem,3.2vw,2rem)] font-bold leading-tight", children: item.title })] }), _jsx(Tags, { folder: folder, tags: item.tags }), item.summary && (_jsx("p", { className: "mt-5 border-l-4 pl-4 font-serif text-[1.45rem] italic leading-snug", style: { borderColor: folder.color }, children: item.summary })), _jsx("p", { className: "mt-5 text-[1.05rem] leading-relaxed", children: first }), rest.length > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: "grid transition-[grid-template-rows] duration-500 ease-out", style: { gridTemplateRows: open ? "1fr" : "0fr" }, children: _jsx("div", { className: "overflow-hidden", children: rest.map((p, i) => (_jsx("p", { className: "mt-4 text-[1.05rem] leading-relaxed", children: p }, i))) }) }), _jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), "aria-expanded": open, className: "pop mt-5 inline-flex items-center gap-2 rounded-full border-2 border-cocoa px-4 py-2 text-sm font-medium hover:-translate-y-0.5 hover:bg-cocoa hover:text-petal", children: [open ? "fold it back" : "read the full story", _jsx("svg", { viewBox: "0 0 16 16", className: `size-3.5 transition-transform ${open ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "m4 6 4 4 4-4" }) })] })] }))] }));
}
function renderBlock(folder, block, i, isLead) {
    switch (block.kind) {
        case "paragraph":
            return (_jsx("p", { className: isLead ? "font-serif text-[clamp(1.5rem,2.6vw,1.9rem)] leading-snug" : "text-[1.05rem] leading-relaxed", children: _jsx(RichText, { text: block.text }) }, i));
        case "heading":
            return (_jsxs("h3", { className: "flex items-center gap-4 pt-8 font-display text-xl font-bold uppercase tracking-wide", children: [_jsx("span", { className: "h-3 w-3 rounded-full", style: { background: folder.color } }), block.text] }, i));
        case "features":
            if (block.layout === "stack")
                return (_jsx("div", { className: "pt-4", children: block.items.map((item, n) => (_jsx(Project, { folder: folder, item: item, n: n + 1 }, item.title))) }, i));
            return (_jsx("div", { className: "grid gap-4 pt-4 md:grid-cols-2", children: block.items.map((item, n) => (_jsxs("article", { className: "pop rounded-[26px] border border-cocoa/15 bg-white/60 p-6 hover:-translate-y-1.5 hover:rotate-[-0.6deg] hover:shadow-[0_14px_30px_rgba(70,35,42,0.12)]", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsx("span", { className: "font-display text-xs font-bold opacity-40", children: String(n + 1).padStart(2, "0") }), _jsx(Tags, { folder: folder, tags: item.tags })] }), _jsx("h3", { className: "mb-3 font-display text-lg font-bold leading-tight", children: item.title }), item.body.map((p, k) => (_jsx("p", { className: "text-[0.98rem] leading-relaxed opacity-90", children: p }, k)))] }, item.title))) }, i));
        case "credentials":
            return (_jsxs("section", { className: "space-y-6 pt-10", children: [_jsxs("h3", { className: "flex items-center gap-4 font-display text-xl font-bold uppercase tracking-wide", children: [_jsx("span", { className: "h-3 w-3 rounded-full", style: { background: folder.color } }), block.heading] }), _jsx("p", { className: "text-[1.05rem] leading-relaxed", children: block.intro }), _jsx("ul", { className: "space-y-3", children: block.items.map((c) => (_jsxs("li", { className: "pop flex flex-col gap-3 rounded-[22px] bg-cocoa p-5 text-cream hover:translate-x-1.5 sm:flex-row sm:items-start sm:gap-6", children: [_jsx("span", { className: "shrink-0 rounded-full bg-olive px-3 py-1 text-center font-display text-[11px] font-bold tracking-widest text-cocoa sm:w-32", children: c.issuer }), _jsxs("div", { children: [_jsx("p", { className: "font-display font-bold text-petal", children: c.title }), _jsx("p", { className: "mt-1 text-[0.95rem] leading-relaxed opacity-85", children: c.note })] })] }, c.title))) }), _jsx("p", { className: "text-[1.05rem] leading-relaxed", children: block.outro })] }, i));
        case "statement":
            return (_jsxs("blockquote", { className: "relative mt-10 overflow-hidden rounded-[28px] px-7 py-10 sm:px-12 sm:py-14", style: { background: folder.color, color: folder.ink }, children: [_jsx(Dots, { color: DOT_COLOR[folder.id], className: "opacity-50" }), _jsx("p", { className: "relative font-serif text-[clamp(1.7rem,3.6vw,2.6rem)] italic leading-tight", children: block.text })] }, i));
    }
}
export default function Details({ ctrl, folder }) {
    let leadUsed = false;
    return (_jsx("div", { role: "dialog", "aria-modal": "true", "aria-label": folder.title, className: `fixed inset-0 z-50 overflow-y-auto ${ctrl.closing ? "animate-slide-down" : "animate-slide-up"}`, style: { background: folder.color, color: folder.ink }, children: _jsxs("div", { className: "relative mx-auto max-w-[1180px]", children: [_jsxs("nav", { className: "flex items-center justify-between gap-4 px-5 pt-6 text-[13px] sm:px-10", children: [_jsxs("button", { type: "button", onClick: ctrl.close, className: "pop group inline-flex items-center gap-2 hover:-translate-x-1", children: [_jsx("svg", { viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M10 3 5 8l5 5" }) }), "yana portfolio menu"] }), _jsx("div", { className: "flex gap-1.5", children: ctrl.folders.map((f) => (_jsx("button", { type: "button", onClick: () => ctrl.open(f.id), "aria-current": f.id === folder.id, className: "pop rounded-full px-3 py-1.5 font-display text-[10px] font-bold tracking-wider hover:-translate-y-0.5 sm:text-[11px]", style: {
                                    background: f.id === folder.id ? folder.ink : "transparent",
                                    color: f.id === folder.id ? folder.color : folder.ink,
                                    boxShadow: f.id === folder.id ? "none" : `inset 0 0 0 1.5px ${folder.ink}`,
                                }, children: f.title }, f.id))) })] }), _jsxs("header", { className: "relative px-5 pb-14 pt-16 sm:px-10 sm:pt-24", children: [_jsx(Dots, { color: DOT_COLOR[folder.id], className: "opacity-70" }), _jsxs("p", { className: "animate-rise relative font-display text-xs font-bold tracking-[0.3em] opacity-70", children: ["FOLDER ", folder.index, " / 03"] }), _jsx("h1", { className: "animate-rise relative mt-4 font-display text-[clamp(3rem,11vw,8.5rem)] font-extrabold leading-[0.9] tracking-tight", children: folder.title }), _jsx("p", { className: "animate-rise relative mt-6 max-w-2xl font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] italic leading-tight", style: { animationDelay: "120ms" }, children: folder.tagline })] }, folder.id), _jsxs("div", { className: "relative mx-2 sm:mx-6", children: [_jsx("div", { className: "flex justify-end pr-0", children: _jsxs("div", { className: "relative h-14 w-[58%] sm:w-[38%]", children: [_jsx(FolderTab, { color: "#fffaf2", className: "absolute inset-0 h-full w-full" }), _jsxs("span", { className: "absolute inset-0 flex items-center justify-end px-[14%] font-display text-xs font-bold tracking-[0.25em] text-cocoa", children: [folder.index, " \u2014 OPEN"] })] }) }), _jsx("div", { className: "grain relative rounded-[32px] rounded-tr-none bg-paper px-6 pb-20 pt-10 text-cocoa sm:px-12 sm:pt-14", children: _jsxs("div", { className: `grid gap-12 ${folder.photos.length ? "lg:grid-cols-[240px_1fr]" : "justify-center"}`, children: [_jsx("aside", { className: folder.photos.length ? "hidden lg:block" : "hidden", children: _jsx("div", { className: "sticky top-10 space-y-6", children: folder.photos.map((p, i) => (_jsx("figure", { className: "pop border-[7px] border-b-[34px] border-white bg-white shadow-[0_10px_24px_rgba(70,35,42,0.18)] hover:rotate-0 hover:scale-105", style: { transform: `rotate(${i ? 4 : -5}deg)` }, children: _jsx("img", { src: p.src, alt: p.alt, className: `w-full ${p.fit === "contain" ? "aspect-[4/3] object-contain p-3" : "aspect-square object-cover"}` }) }, p.src))) }) }), _jsxs("div", { className: "animate-rise max-w-[720px] space-y-6", style: { animationDelay: "200ms" }, children: [folder.blocks.map((b, i) => {
                                                const isLead = b.kind === "paragraph" && !leadUsed;
                                                if (isLead)
                                                    leadUsed = true;
                                                return renderBlock(folder, b, i, isLead);
                                            }), _jsx("div", { className: "flex flex-wrap gap-3 pt-12", children: ctrl.folders
                                                    .filter((f) => f.id !== folder.id)
                                                    .map((f) => (_jsxs("button", { type: "button", onClick: () => {
                                                        ctrl.open(f.id);
                                                        document.querySelector('[role="dialog"]')?.scrollTo({ top: 0, behavior: "smooth" });
                                                    }, className: "pop group flex items-center gap-3 rounded-full py-3 pl-5 pr-3 font-display text-sm font-bold hover:-translate-y-1", style: { background: f.color, color: f.ink }, children: ["next: ", f.title, _jsx("span", { className: "grid size-7 place-items-center rounded-full bg-paper text-cocoa transition-transform group-hover:rotate-45", children: _jsx("svg", { viewBox: "0 0 16 16", className: "size-3", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 12 12 4M6 4h6v6" }) }) })] }, f.id))) })] })] }) }, folder.id)] })] }) }));
}
