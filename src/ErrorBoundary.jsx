import React, { Component } from "react";
import { ErrorBoundaryFallback } from "./FallBackComponent";

export default class withErrorBoundary extends Component {
  static defaultProps = {
    onError: (error, componentStack) => {
      console.error("Error has occurred:", error.name);
      console.warn("Error Component Stack: ", componentStack);
    },
    FallBackComponent: ErrorBoundaryFallback
  };

  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    });
    const { componentStack } = info;
    const { onError } = this.props;
    onError(error, componentStack);
  }

  render() {
    const { FallBackComponent, children } = this.props;
    if (this.state.error) {
      return (
        <FallBackComponent
          componentStack={this.state.info.componentStack}
          error={this.state.error}
        />
      );
    }
    return children;
  }
}
