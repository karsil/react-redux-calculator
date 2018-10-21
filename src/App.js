import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {addDigit} from './actions/actions'

class App extends Component {
  
  constructor(props){
    super(props)
    const {addDigit} = this.props;
  }

  handleClick = target => {
    console.log('clicked ' + target)
  }

  handleDigit = digit => () => {
    console.log('handleDigit ' + digit)
    this.props.dispatch(addDigit(digit)) // needs higher function
  }

  renderDigit = i => {
   return (
        <button className="square" onClick={this.handleDigit(i)}>
          {i}
        </button>
    )
  }

  renderKey = i => {
      return (
        <button className="square" onClick={() => this.handleClick(i)}>
          {i}
        </button>
    )
  }

  renderKeyPad = () => {
    return (
      <div>
        <div className="board-row">
        {this.renderDigit(7)}
        {this.renderDigit(8)}
        {this.renderDigit(9)}
        {this.renderKey("+")}
      </div>
      <div className="board-row">
        {this.renderDigit(4)}
        {this.renderDigit(5)}
        {this.renderDigit(6)}
        {this.renderKey("-")}
      </div>
      <div className="board-row">
        {this.renderDigit(1)}
        {this.renderDigit(2)}
        {this.renderDigit(3)}
        {this.renderKey("*")}
      </div>
      <div className="board-row">
        {this.renderKey("C")}
        {this.renderDigit(0)}
        {this.renderKey(".")}
        {this.renderKey("/")}
        {this.renderKey("=")}
      </div>
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div>ACC</div>
        {this.props.acc}
        <div>OP</div>
        {this.props.pendingOp}
        <div>INPUT</div>
        {this.props.number}
      {
        this.renderKeyPad()
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    number: state.number,
    acc: state.acc,
    operation: state.pendingOp
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDigit: addDigit,
    }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
