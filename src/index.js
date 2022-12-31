import { StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./stateManagement/stateManagement";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider store={store}>
          <ProSidebarProvider>
            <StyledEngineProvider injectFirst>
              <App />
            </StyledEngineProvider>
          </ProSidebarProvider>
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
