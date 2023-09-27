import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { isError:null };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({isError:true})
    console.log(error,"erthis.state.isErrorror-info")
  }
  render() {
    if(this.state.isError){
        return <p>somethingh went wrong</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary;
