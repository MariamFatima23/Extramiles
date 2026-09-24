import { createRoot } from "react-dom/client";
import App from "./App";
import "../styles/index.css";

/* Figma desktop frame is 1440px wide. On laptop screens (e.g. 1920px @150% = 1280px)
   the window is narrower than that, so we scale the whole desktop layout down
   instead of letting it reflow/break. Must match --breakpoint-xl in index.css. */
const DESKTOP_MIN = 1100;
const DESIGN_W = 1440;
const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element was not found");
const root = rootEl;

function fitDesign() {
  const scale = window.innerWidth >= DESKTOP_MIN ? Math.min(1, document.documentElement.clientWidth / DESIGN_W) : 1;
  root.style.zoom = scale < 1 ? String(scale) : "";
}
fitDesign();
window.addEventListener("resize", fitDesign);

createRoot(rootEl).render(<App />);
