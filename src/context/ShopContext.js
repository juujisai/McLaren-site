import React from 'react';

import shopData from '../data/shopData'

export const ShopContext = React.createContext()

class ShopProvider extends React.Component {
  state = {
    data: [],
    sortedData: [],
    filteredData: [],
  }

  componentDidMount() {
    this.setState({ data: shopData })

  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          data: this.state.data,
          sortedData: this.state.sortedData,
          filteredData: this.state.filteredData,
        }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;