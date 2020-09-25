import React from 'react';

class ShopFilters extends React.Component {

  constructor(props) {
    super(props)
    this.data = props.filters
    this.settingData = props.settingData
    this.fullData = props.fullData
  }

  state = {
    price: 0,
    category: [],
    subCategory: [],
    color: [],
    fullData: [],
    newData: [],
  }


  handleChange = (e, valueToPush = '') => {
    console.log(':)')
    let name = e.target.name
    let type = e.target.type

    if (type === 'range') {

      name === 'price' && this.setState({ price: e.target.value })

    }


    if (type === 'checkbox') {
      let array = this.state[name]

      e.target.checked ? array = [...array, valueToPush] : array = array.filter(item => item !== valueToPush)

      this.setState({
        [name]: array
      })

    }




  }


  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.category, this.state.category)
    if (prevState.category !== this.state.category || prevState.subCategory !== this.state.subCategory || prevState.color !== this.state.color || prevState.price !== this.state.price) {
      console.log("updating")


      let fullDataNewArray = this.fullData
      let dataArray = []

      this.state.category.forEach(item => dataArray = [...dataArray, ...fullDataNewArray.filter(item2 => item2.category === item)])
      this.state.subCategory.forEach(item => dataArray = [...dataArray, ...fullDataNewArray.filter(item2 => item2.subcategory === item)])
      this.state.color.forEach(item => dataArray = [...dataArray, ...fullDataNewArray.filter(item2 => item2.color.includes(item))])
      dataArray.length === 0 ? dataArray = fullDataNewArray : dataArray = [...dataArray]
      dataArray = dataArray.filter(item => item.price <= this.state.price)

      // console.log(dataArray)
      this.settingData(dataArray)
      this.setState({ newData: dataArray })

    }


  }


  componentDidMount() {
    this.settingData(this.fullData)

    this.setState({
      filters: this.props.filters,
      price: this.props.filters[3],
      fullData: this.fullData
    })
  }


  render() {
    const { filters, price, category, subCategory, color } = this.state
    console.log(category, subCategory, color, price)
    // console.log(this.state.fullData)
    let categories, subCategories, colors, priceC;

    if (typeof filters !== 'undefined') {
      categories = filters[1].map((item, id) => (
        <div key={id}>
          <input type="checkbox" name={"category"} id={item} onChange={(e) => this.handleChange(e, item)} /><span className='new-checkbox'></span><label htmlFor={item}>{item}</label>
        </div>
      ))

      subCategories = filters[2].map((item, id) => (
        <div key={id}>
          <input type="checkbox" name={"subCategory"} id={item === '-' ? 'other' : item} onChange={(e) => this.handleChange(e, item)} /><span className='new-checkbox'></span><label htmlFor={item === '-' ? 'other' : item}>{item === '-' ? 'other' : item}</label>
        </div>
      ))

      colors = filters[0].map((item, id) => (
        <div key={id}>
          <input type="checkbox" name={'color'} id={item} onChange={(e) => this.handleChange(e, item)} /><span className='new-checkbox'></span><label htmlFor={item}>{item}</label>
        </div>
      ))

      priceC = (
        <div >
          <input type="range" name='price' id="price" min='0' max={filters[3]} onChange={(e) => this.handleChange(e)} value={price} /><label htmlFor='price'> less than <span className="range-value">{price}</span> <span className="euro">EUR</span></label>
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
