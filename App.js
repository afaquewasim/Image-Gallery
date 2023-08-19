import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './Components/Card';
import ImageSearch from './Components/ImageSearch';
import Loading from './Components/Loading';
import NoImageFound from './Components/NoImage';

const App = () => {
  const [images, setImages] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsloading(false)
      })
      .catch(err => console.log(err))
  }, [term])
  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isloading && images.length === 0 && <NoImageFound/>}
      {isloading ? <Loading/> : <div className='grid grid-cols-3 gap-4'>
        {images.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </div>}


    </div>
  );
};

export default App;
