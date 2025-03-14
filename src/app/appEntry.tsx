import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import BaseLayout from "./layouts/BaseLayout";
import { store } from "./appStore";
import { ThemeProvider } from "./providers/ThemeProvider";
import "@/shared/index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider>
        <BaseLayout />
      </ThemeProvider>
    </StrictMode>
  </Provider>
);
