import React from 'react';
import Loader from '../components/Loader'

import DriverResult from '../components/DriverResult'

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

    const driversList = [this.state.driver1, this.state.driver2]

    const drivers = driversList.map((driver, id) => (
      <DriverResult data={driver} key={id} />
    ))


    if (driversList[0] === undefined) {
      return <Loader />
    }

    return (
      <div className="result">
        {drivers}
      </div>
    );
  }
}

export default LastResult;