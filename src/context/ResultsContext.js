import React from 'react';
import resultsData from '../data/resultsData'

export const ResultsContext = React.createContext()


class ResultProvider extends React.Component {
  state = {
    results: resultsData,
    result: [],
  }

  componentDidMount() {

    if (this.state.results.length) {
      const result = [...this.state.results][this.state.results.length - 1]

      this.setState({ result })
    }
  }


  render() {
    const result = this.state.result
    return (
      <ResultsContext.Provider
        value={{
          result
        }}
      >
        {this.props.children}
      </ResultsContext.Provider>
    );
  }
}

export default ResultProvider;