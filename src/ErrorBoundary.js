import React, { Component } from "react";
import { ErrorBoundaryFallback } from "./FallBackComponent";

class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state={
      error: null,
      info: null
    }
  }


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
export default ErrorBoundary;

ErrorBoundary.defaultProps={
  onError: (error, componentStack) => {
    console.error("Error has occurred:", error.name);
    console.warn("Error Component Stack: ", componentStack);
  },
  FallBackComponent: ErrorBoundaryFallback
}
