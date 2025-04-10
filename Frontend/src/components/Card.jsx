import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

function Card({ title, description, image, price, addToCart, addToFav }) {
    return (
        <div className='transition ease-in-out delay-75 hover:scale-75 shadow-2xl shadow-black'>
            <div className="card bg-slate-300 w-full sm:w-64 sm:h-[480px] shadow-xl flex flex-col ">
                <figure className=" w-full ">
                    <img className="h-auto w-full" src={image} alt={title} />
                </figure>
                <div className="card-body flex-grow flex flex-col justify-between">
                    <div>
                        <h2 className="card-title text-sm font-bold">{title}</h2>
                        <p className="text-sm line-clamp-3">{description}</p>
                        <p className=''>Price: $ {price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => addToFav({ title, price,image })
                    }  className="btn btn-primary  ">
                            <Heart  />
                        </button>
                        <button onClick={() => addToCart({ title, price,image })} className="btn btn-primary">
                            <ShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
