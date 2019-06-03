import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as counterActions from '../../store/actions/counterActions';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import CounterButton from '../../components/CounterButton/CounterButton';
import CounterInput from '../../components/CounterInput/CounterInput';

class CounterHandler extends Component {
  maxNumber = 100000;
  state = {
    number: 0
  };

  addCounter = () => {
    this.props.addCounter(+this.state.number);
  };

  substractCounter = () => {
    this.props.substractCounter(this.state.number);
  };

  changeInputHandler = e => {
    if (e.target.value >= -this.maxNumber && e.target.value <= this.maxNumber) {
      this.setState({ number: e.target.value });
    }
  };

  render() {
    const { number } = this.state;
    const { counter } = this.props;
    return (
      <div>
        <CounterDisplay counter={counter} />
        <CounterButton value="+1" clicked={this.props.incrementCounter} disabled={counter > this.maxNumber} />
        <CounterButton value="-1" clicked={this.props.decrementCounter} disabled={counter < -this.maxNumber} />
        <CounterButton value={`Plus ${number}`} clicked={this.addCounter} disabled={counter > this.maxNumber} />
        <CounterButton
          value={`Minus ${number}`}
          clicked={this.substractCounter}
          disabled={counter <= -this.maxNumber}
        />
        <CounterInput value={number} changed={this.changeInputHandler} min={-this.maxNumber} max={this.maxNumber} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    results: state.results
  };
}

const mapDispatchToProps = {
  incrementCounter: counterActions.incrementCounter,
  decrementCounter: counterActions.decrementCounter,
  addCounter: counterActions.addCounter,
  substractCounter: counterActions.substractCounter
};

CounterHandler.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  addCounter: PropTypes.func.isRequired,
  substractCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterHandler);
