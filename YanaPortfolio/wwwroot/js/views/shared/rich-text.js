import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// Renders *italic* and **bold** inline markers from the Model.
export default function RichText({ text }) {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return (_jsx(_Fragment, { children: parts.map((part, i) => {
            if (part.startsWith("**"))
                return _jsx("strong", { className: "font-bold", children: part.slice(2, -2) }, i);
            if (part.startsWith("*") && part.length > 1)
                return _jsx("em", { className: "font-serif text-[1.15em] italic", children: part.slice(1, -1) }, i);
            return _jsx("span", { children: part }, i);
        }) }));
}
