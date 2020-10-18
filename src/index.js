import React from "react";
import ReactDOM from "react-dom";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import App from "./components/App";

import { HashRouter as Router } from "react-router-dom";

import "./index.css";

// => Context
import { AuthProvider } from "./context";

console.log(process.env.REACT_APP_SENTRY_DNS_URI);

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DNS_URI,
    integrations: [
      new Integrations.BrowserTracing(),
    ],
  
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });

ReactDOM.render(
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>,
    document.getElementById("root")
);
