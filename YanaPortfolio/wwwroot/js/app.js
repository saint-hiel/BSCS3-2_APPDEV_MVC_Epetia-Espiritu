import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePortfolioController } from "./home-controller.js";
import Details from "./views/details.js";
import Index from "./views/home.js";
import Layout from "./views/shared/layout.js";
export default function App() {
    const ctrl = usePortfolioController();
    return (_jsxs(Layout, { children: [_jsx(Index, { ctrl: ctrl }), ctrl.active && _jsx(Details, { ctrl: ctrl, folder: ctrl.active })] }));
}
