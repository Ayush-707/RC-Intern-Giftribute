import React, { useState, useEffect } from 'react';
import { myFlowers } from '../../../Services/APIs/UserAPI';

const FlowerCard = ({ flower }) => {
  return (
    <div className="p-2 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
      <img className="object-cover object-center h-56 w-full" src={flower.image} alt={flower.name} />
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg">{flower.name}</h2>
        <p className="mt-2 text-gray-600">{flower.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-bold">₹ {flower.price}</span>
          <button className="px-3 py-1 bg-indigo-600 text-white font-semibold rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const FlowerShop = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: 'url(/form1.avif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      overflowY: 'auto'
     
      
    });
  }, []);

  const getData = async () => {
    try {
      const res = await myFlowers();
      setFlowers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const styles = {
  //   backgroundImage: 'url(/flower-bg.avif)',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   height: '100vh',
  //   overflowY: 'auto',
  // };

  return (
    <div >
      <div className="py-12 p-4" style={{ maxWidth: '70vw', margin: '0 auto', height: '100%' }}>
        <div className='text-center'><h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white bg-orange-500 rounded-lg p-1">
          &nbsp;Gift <mark className="px-2 text-yellow-200 bg-blue-600 rounded dark:bg-blue-500">Flowers</mark> to Your Loved Ones
        </h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flowers.map((flower, index) => (
            <FlowerCard key={index} flower={flower} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerShop;
