import React from 'react';
import galleryData from '../data/articleData'

export const GalleryContext = React.createContext();




const GalleryProvider = ({ children }) => {

  const [gallery, setGallery] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)

    // just to test loading component

    setTimeout(function () {
      setGallery(galleryData)
      setLoading(false)
    }, 1000)

  }, [])

  return (

    <GalleryContext.Provider
      value={{
        gallery,
        loading
      }}
    >
      {children}
    </GalleryContext.Provider>
  );



}

export default GalleryProvider;
