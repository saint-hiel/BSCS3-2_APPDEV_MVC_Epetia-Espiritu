// Controller layer: owns navigation state and hands Models to Views (the "C" in MVC).
import { useCallback, useEffect, useState } from "react";
import { folders } from "./portfolio-model.js";
const CLOSE_MS = 380;
export function usePortfolioController() {
    const [activeId, setActiveId] = useState(null);
    const [closing, setClosing] = useState(false);
    const [hovered, setHovered] = useState(null);
    const open = useCallback((id) => {
        setClosing(false);
        setActiveId(id);
    }, []);
    const close = useCallback(() => {
        setClosing(true);
        window.setTimeout(() => {
            setActiveId(null);
            setClosing(false);
        }, CLOSE_MS);
    }, []);
    useEffect(() => {
        if (!activeId)
            return;
        const onKey = (e) => e.key === "Escape" && close();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [activeId, close]);
    return {
        folders,
        active: folders.find((f) => f.id === activeId) ?? null,
        closing,
        hovered,
        setHovered,
        open,
        close,
    };
}
