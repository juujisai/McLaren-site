import React from 'react';
import ShopItem from '../components/ShopItem'
import { ShopContext } from '../context/ShopContext'
import ShopFilters from '../components/ShopFilters'
import Loader from '../components/Loader'
const Shop = () => {

  const [shopData, setShopData] = React.useState([])
  const [shopSortedData, setShopSortedData] = React.useState([])
  const [shopFilteredData, setShopFilteredData] = React.useState([])
  const [featuredItems, setFeaturedItems] = React.useState([])

  const { data, filters } = React.useContext(ShopContext)



  // filters 


  // end of filters


  const featured = featuredItems.map(item => (
    <ShopItem key={item.id} data={item} />
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

  if (shopData.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <div className="featured-items">
        <h3>Featured items:</h3>
        {featuredItems.length > 0 && featured}
      </div>

      <ShopFilters filters={filters} />

    </div >
  );
}

export default Shop;
