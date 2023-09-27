import React from "react";
import AppRoutes from "./routes";
import ErrorBoundary from "./utilities/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
