import React from 'react';
import ShopItem from '../components/ShopItem'
import { ShopContext } from '../context/ShopContext'
import ShopFilters from '../components/ShopFilters'
import Loader from '../components/Loader'
const Shop = () => {

  const [shopData, setShopData] = React.useState([])
  // const [shopSortedData, setShopSortedData] = React.useState([])
  const [shopFilteredData, setShopFilteredData] = React.useState([])
  const [featuredItems, setFeaturedItems] = React.useState([])

  const { data, filters } = React.useContext(ShopContext)



  // filters 


  // end of filters


  const featured = featuredItems.map(item => (
    <ShopItem key={item.id} data={item} />
  ))

  const filteredData = shopFilteredData.map((item, id) => (
    <ShopItem key={id} data={item} />
  ))

  React.useEffect(() => {
    if (data.length !== 0) {
      setShopData(data)


      // get featured items
      let featured = shopData.filter(item => item.featured)
      setFeaturedItems(featured)
      // end of get featured items




    }

  }, [data, shopData])

  // console.log(filteredData)

  if (shopData.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <div className="featured-items">
        <h3>Featured items:</h3>
        {featuredItems.length > 0 && featured}
      </div>

      <ShopFilters filters={filters} settingData={setShopFilteredData} fullData={shopData} />
      <div className="shop-items-filtered">
        <div className='list-count'>Items in list: <strong>{shopFilteredData.length}</strong></div>
        {filteredData}
      </div>
    </div >
  );
}

export default Shop;
