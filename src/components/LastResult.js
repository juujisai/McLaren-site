import React from 'react';
import Loader from '../components/Loader'

class LastResult extends React.Component {

  constructor(props) {
    super(props)
    this.result = props.result
  }

  state = {
  }

  componentDidMount() {
    if (typeof this.result.result !== 'undefined') {
      const { track, driver1, driver2 } = this.result.result

      this.setState({
        track, driver1, driver2
      })
    }
  }

  render() {

    const drivers = [this.state.driver1, this.state.driver2]



    if (drivers[0] === undefined) {
      return <Loader />
    }

    return (
      <div>Hello from last result</div>
    );
  }
}

export default LastResult;