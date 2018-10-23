import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {addDigit, newOperation, equalOperation, clearOperation} from './actions/actions'

class App extends Component {

  // keyboard handler
  handleKeyPress = (event) => {
    const hitKey = event.key
    const operators = ["+", "-", "*", "/"]

    console.log(hitKey)
    if (0 <= hitKey && hitKey <= 9){
      console.log("handleKeyPress: number " + hitKey)
      this.props.addDigit(hitKey)
    }
    else if (hitKey === "."){
      console.log("handleKeyPress: point " + hitKey)
      this.props.addDigit(hitKey)
    }
    else if(operators.includes(hitKey)){
      console.log("handleKeyPress: operation " + hitKey)
      this.props.newOperation(hitKey)
    }
    else if(hitKey === "=" || hitKey === "Enter"){
      console.log("handleKeyPress: equal")
      this.props.equalOperation()
    }
    else if(hitKey === "C" || hitKey === "c"){
      console.log("handleKeyPress: clear")
      this.props.clearOperation()
    }
  }

  // default case for unknown symbols for debugging purposes
  handleClick = target => {
    console.log('clicked ' + target)
  }

  handleClear = () => () => {
    this.props.clearOperation()
  }

  handleDigit = digit => () => {
    this.props.addDigit(digit) // needs higher function
  }

  handleOperation = digit => () => {
    this.props.newOperation(digit)
  }

  handleEqual = digit => () => {
    this.props.equalOperation(digit)
  }

  renderDigit = i => {
   return (
        <button className="square" onClick={this.handleDigit(i)}>
          {i}
        </button>
    )
  }

  renderOperationKey = i => {
      switch(i){
        case "+":
        case "-":
        case "*":
        case "/":
          return (
            <button className="square" onClick={this.handleOperation(i)}>
              {i}
            </button>
          )
        case "C":
          return (
            <button className="square" onClick={this.handleClear()}>
              {i}
            </button>
          )
        case "=":
          return (
            <button className="square" onClick={this.handleEqual()}>
              {i}
            </button>
          )
        
        default:
          console.log("rendering unknown symbol: " + i);
          return (
            <button className="square" onClick={() => this.handleClick(i)}>
              {i}
            </button>
          )   
      }   
  }

  renderKeyPad = () => {
    return (
      <div>
        <div className="board-row">
        {this.renderDigit(7)}
        {this.renderDigit(8)}
        {this.renderDigit(9)}
        {this.renderOperationKey("+")}
      </div>
      <div className="board-row">
        {this.renderDigit(4)}
        {this.renderDigit(5)}
        {this.renderDigit(6)}
        {this.renderOperationKey("-")}
      </div>
      <div className="board-row">
        {this.renderDigit(1)}
        {this.renderDigit(2)}
        {this.renderDigit(3)}
        {this.renderOperationKey("*")}
      </div>
      <div className="board-row">
        {this.renderOperationKey("C")}
        {this.renderDigit(0)}
        {this.renderDigit(".")}
        {this.renderOperationKey("/")}
        {this.renderOperationKey("=")}
      </div>
    </div>
    )
  }

  renderInfoField = () => {
    return (
      <div className="InfoField">
        <div className="infoACC">
          <div>ACC</div>
          {this.props.acc}
        </div>
        <div className="infoOP">
          <div>OP</div>
          {this.props.pendingOp}
        </div>
        <div>
          <div className="infoInput">INPUT</div>
          {this.props.input}
        </div>

      </div>
    )
  }

  render() {
    return (
      <div className="App" onKeyPress={this.handleKeyPress} tabIndex="0">
       {this.renderInfoField()}
      {this.renderKeyPad()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
    acc: state.acc,
    pendingOp: state.pendingOp
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDigit: addDigit,
    newOperation: newOperation,
    equalOperation: equalOperation,
    clearOperation: clearOperation,
    }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
