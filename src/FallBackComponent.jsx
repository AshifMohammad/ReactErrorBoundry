import React from "react";

export const ErrorBoundaryFallback = ({ componentStack, error }) => (
  <div style={{ height: "100%", padding: 24 }}>
    <p>
      <strong>Oops! An error occured!</strong>
    </p>
    <p>Here’s what we know…</p>
    <p>
      <strong>Error:</strong> {error.toString()}
    </p>
    <p>
      <strong>Please See Console Stack Trace</strong>
      <p>{componentStack}</p>
    </p>
  </div>
);

ErrorBoundaryFallback.defaultProps = {
  componentStack: "",
  error: {}
};

