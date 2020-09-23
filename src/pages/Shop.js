import React from 'react';

import { ShopContext } from '../context/ShopContext'


const Shop = () => {

  const [shopData, setShopData] = React.useState([])
  const [shopSortedData, setShopSortedData] = React.useState([])
  const [shopFilteredData, setShopFilteredData] = React.useState([])


  const { data, sortedData, filteredData } = React.useContext(ShopContext)


  React.useEffect(() => {
    data.length !== 0 && setShopData(data)

  }, [data])

  console.log(shopData)
  return (
    <div>Hello from shop</div>
  );
}

export default Shop;
