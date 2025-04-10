import React from 'react';
import Checkout from './Checkout'
import { useState } from 'react';
import { motion } from "framer-motion";
import Owner from './Owner'


function Cart({ cart, removeFromCart, fav, removeFromFav, view }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);


  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).name : "Guest";
  const baseUrl = import.meta.env.VITE_BACKEND_URL


  const handleBuyNow = async () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    try {
      const response = await fetch(`${baseUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, items: cart, totalPrice }),
      });

      if (response.ok) {
        setIsModalOpen(true);
        // Clear the cart after purchase
        cart.length = 0; // Empty the cart
      } else {
        alert("Failed to place order!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }

  }


  return (
    <div className='flex flex-col min-h-screen ' >

      {/* Cart Section */}
      {view === 'cart' && (
        <div className='pt-14 sm:pt-20'>
          <h2 className='text-4xl font-bold mb-14 text-center text-black'>Your Cart</h2>
          {cart.length === 0 ? (
            <div className='flex justify-center pt-28'>
              <motion.p
                className="sm:text-[170px] text-[100px]"
                animate={{ x: ["-50%", "50%", "-50%"] }}
                transition={{ duration: 4, repeat: 15, ease: "easeInOut" }}
              >
                🛒
              </motion.p>
            </div>
          ) : (
            <ul className='flex flex-col gap-6 '>
              {cart.map((item, index) => (
                <li key={index} className='flex items-center gap-4 border p-2 rounded-md  bg-yellow-50'>
                  <img src={item.image} alt={item.title} className='w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-md' />
                  <div className='flex-1'>
                    <h3 className='text-lg  font-semibold'>{item.title}</h3>
                    <p className='text-sm text-gray-600'>${item.price.toFixed(2)}</p>
                  </div>
                  <button className='bg-red-500 text-white text-sm px-1 py-1 rounded-md hover:bg-red-600' onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}

              <div className='text-center'>

                <div className='mt-18 mb-12 text-center text-xl font-bold'>
                  Total: <span className='text-green-600'>${totalPrice}</span>
                </div>
                  <Checkout onCheckoutComplete={()=> setIsCheckoutComplete(true)} />
                  {isCheckoutComplete && (
                    <button onClick={handleBuyNow} className=" transform  bg-green-500  text-white p-2  text-xl mb-20">
                    place the order
                  </button>
                  )
                  }

              </div>
            </ul>
          )}
        </div>
      )}

      {isModalOpen && (
        <dialog id="my_modal_5" className="modal bg-pink-200" open>
          <div className="modal-box p-20">
            <h3 className="font-bold text-2xl text-center">Your Order is Placed!</h3>
            <p className="py-4 text-2xl text-center">Your items will be delivered within 5 days.</p>
            <div className="modal-action justify-center">
              <button className="btn" onClick={() => setIsModalOpen(false)}>OK</button>
            </div>
          </div>
        </dialog>
      )}

      {/* Favorite Section */}
      {view === 'fav' && (
        <div className='pt-14 sm:pt-28 '>
          <h2 className='text-4xl font-bold  text-center mb-14 text-black'>Your Favorites </h2>
          {fav.length === 0 ? (
            <div className='flex justify-center pt-28'>
              <motion.p
                className="sm:text-[170px] text-[100px]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: 15, ease: "easeInOut" }}
              >
                ❤️
              </motion.p>

            </div>
          ) : (
            <ul className='flex flex-col gap-6'>
              {fav.map((item, index) => (
                <li key={index} className='flex items-center gap-4 border p-2 rounded-md bg-pink-50'>
                  <img src={item.image} alt={item.title} className='w-16 h-16 sm:w-28 sm:h-28 object-cover rounded-md' />
                  <div className='flex-1'>
                    <h3 className='text-sm sm:text-lg font-semibold'>{item.title}</h3>
                  </div>
                  <button className='bg-red-500 text-white text-sm px-1 py-1 rounded-md hover:bg-red-600' onClick={() => removeFromFav(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Order History */}
      {view === 'Odr-His' && (
        <div className='pt-14 sm:pt-28 '>
          <h2 className='text-5xl font-bold  text-center mb-14 text-black'>My Orders </h2>
          <Owner/>
        </div>
      )}
    </div>
  );
}

export default Cart;


