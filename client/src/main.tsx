import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "@/src/App";

const $container = document.getElementById('root');

createRoot($container).render(
    <StrictMode>
        <App />
    </StrictMode>
)