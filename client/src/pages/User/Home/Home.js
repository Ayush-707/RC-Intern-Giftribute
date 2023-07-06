import React, {useState, useEffect} from 'react';
import { myGifts } from '../../../Services/APIs/UserAPI';
import { addToCart } from '../../../Services/APIs/UserAPI';

const cartAdd = async(id) => {
  //console.log(id)
  const userMail = localStorage.getItem("userMail");
  const obj = {
    giftId: id,
    userEmail: userMail
  }
  const res = await addToCart(obj)
}
const GiftCard = ({ gift }) => {
  
  return (
    <div className="p-2 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
      <img className="object-cover object-center h-56 w-full" src={gift.image} alt={gift.name} />
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg">{gift.name}</h2>
        <p className="mt-2 text-gray-600">{gift.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-bold">₹ {gift.price}</span>
          <button className="px-3 py-1 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 active:bg-indigo-800 " onClick={() => cartAdd(gift._id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
const GiftShop = () => {
  const [gifts, setGifts] = useState([]);

  const getData = async () => {
    try {
      const res = await myGifts();
      setGifts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


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
  return (
    <>
    <div >
      
      <div className='text-center px-5'><h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white bg-orange-500 rounded-lg p-1">
        Discover The Perfect <mark className="px-2 text-yellow-200 bg-blue-600 rounded dark:bg-blue-500">Gift</mark> For Every <mark className="px-2 text-yellow-200 bg-blue-600 rounded dark:bg-blue-500">Special</mark> Moment
        </h1></div>

        <div className="py-12 p-4" style={{ maxWidth: '70vw', margin: '0 auto', height: '100%' }}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gifts.map((gift, index) => (
            <GiftCard key={index} gift={gift} />
          ))}
        </div>
      </div>


    </div>
    </>
  );
}

export default GiftShop;
