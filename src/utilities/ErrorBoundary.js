import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: null };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }
  render() {
    if (this.state.isError) {
      return <p>Oops,Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
