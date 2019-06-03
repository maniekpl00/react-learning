import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as resultsActions from '../../store/actions/resultsActions';
import ResultList from '../../components/ResultList/ResultList';
import ResultAddButton from '../../components/ResultAddButton/ResultAddButton';

class ResultsHandler extends Component {
  addResult = () => {
    const { counter, addResult } = this.props;
    addResult(counter);
  };

  render() {
    const { results, removeResult } = this.props;
    return (
      <>
        <ResultAddButton name="Store result" clicked={this.addResult} />
        <ResultList results={results} removeResult={removeResult} />
      </>
    );
  }
}

ResultsHandler.propTypes = {
  addResult: PropTypes.func.isRequired,
  removeResult: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
    results: state.results
  };
}

const mapDispatchToProps = {
  addResult: resultsActions.addResult,
  removeResult: resultsActions.removeResult
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsHandler);
