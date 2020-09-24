import React from 'react';

class ShopFilters extends React.Component {
  state = {
  }

  componentDidMount() {
    this.setState({
      filters: this.props.filters
    })
  }
  render() {
    console.log(this.props.filters)
    console.log(this.state.filters)
    return (
      <div>Shop Filters</div>
    );
  }
}

export default ShopFilters
