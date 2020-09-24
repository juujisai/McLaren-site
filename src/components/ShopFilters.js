import React from 'react';

class ShopFilters extends React.Component {

  constructor(props) {
    super(props)
    this.data = props.filters
  }

  state = {
    price: 0,
    category: [],
    subCategory: [],
    color: []
  }


  handleChange = (e, valueToPush = '') => {
    let name = e.target.name
    let type = e.target.type

    if (type === 'range') {

      name === 'price' && this.setState({ price: e.target.value })

    }


    if (type === 'checkbox') {
      let array = this.state[name]

      e.target.checked ? array.push(valueToPush) : array = array.filter(item => item !== valueToPush)

      this.setState({
        [name]: array
      })

    }








  }


  componentDidMount() {
    //     const rangeValueContainer = document.querySelector('.range-value')
    // rangeValueContainer.


    this.setState({
      filters: this.props.filters,
      price: this.props.filters[3]
    })
  }
  render() {
    const { filters, price, category, subCategory, color } = this.state
    console.log(category, subCategory, color, price)

    let categories, subCategories, colors, priceC;

    if (typeof filters !== 'undefined') {
      categories = filters[1].map((item, id) => (
        <div key={id}>
          <input type="checkbox" name={"category"} id={item} onChange={(e) => this.handleChange(e, item)} /><label htmlFor={item}>{item}</label>
        </div>
      ))

      subCategories = filters[2].map((item, id) => (
        <div key={id}>
          <input type="checkbox" name={"subCategory"} id={item === '-' ? 'other' : item} onChange={(e) => this.handleChange(e, item)} /><label htmlFor={item === '-' ? 'other' : item}>{item === '-' ? 'other' : item}</label>
        </div>
      ))

      colors = filters[0].map((item, id) => (
        <div key={id}>
          <input type="checkbox" name={'color'} id={item} onChange={(e) => this.handleChange(e, item)} /><label htmlFor={item}>{item}</label>
        </div>
      ))

      priceC = (
        <div >
          <input type="range" name='price' id="price" min='0' max={filters[3]} onChange={(e) => this.handleChange(e)} value={price} /><label htmlFor='price'> EUR </label>
          <div className="range-value">{price}</div>
        </div>
      )

    }




    return (
      <div className='filters'>
        <form>
          <div className="single-filter">
            <h3>Category</h3>
            {categories}

          </div>
          <div className="single-filter">
            <h3>Subcategory</h3>
            {subCategories}


          </div>
          <div className="single-filter">
            <h3>Color</h3>
            {colors}

          </div>
          <div className="single-filter">
            <h3>Price</h3>
            {priceC}

          </div>
        </form>


      </div>
    );
  }
}

export default ShopFilters
