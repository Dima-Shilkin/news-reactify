import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { ThemeProvider } from "./providers/ThemeProvider";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </StrictMode>
  </Provider>
);
