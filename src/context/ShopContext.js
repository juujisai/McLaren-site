import React from 'react';

import shopData from '../data/shopData'

export const ShopContext = React.createContext()

class ShopProvider extends React.Component {
  state = {
    data: [],
    filters: []
  }


  // filters

  getFilters = () => {
    let data = shopData

    // colors
    let colors = []
    data.forEach(one => {
      for (let i = 0; i < one.color.length; i++) {
        colors.push(one.color[i])
      }
    })
    colors = [...new Set(colors)]

    // end of colors
    // category
    let categories = []
    data.forEach(one => categories.push(one.category))
    categories = [...new Set(categories)]
    // end of category
    // subcategory
    let subCategories = []
    data.forEach(one => subCategories.push(one.subcategory))
    subCategories = [...new Set(subCategories)]
    // end of subcategory
    // max price
    let prices = [];
    data.forEach(one => prices.push(one.price))
    prices = [...new Set(prices)]
    const maxPrice = Math.max(...prices)
    // end of max price

    this.setState({
      filters: [colors, categories, subCategories, maxPrice]
    })
  }


  // end of filters



  componentDidMount() {
    this.setState({ data: shopData })
    this.getFilters()
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          data: this.state.data,
          filters: this.state.filters
        }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;