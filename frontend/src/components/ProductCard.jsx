import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return product && (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-md px-3 py-2 bg-white w-full max-w-full sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] transition"
    >
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition w-full max-h-36 object-contain"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <div className="text-gray-500/60 text-sm mt-2">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-base truncate">{product.name}</p>

        <div className="flex items-center gap-0.5 mt-1">
          {Array(5).fill('').map((_, i) => (
            <img
              key={i}
              className="w-3 md:w-3.5"
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              alt=""
            />
          ))}
          <p className="text-xs">(4)</p>
        </div>

        <div className="flex items-end justify-between mt-3">
          <p className="text-base md:text-lg font-medium text-primary">
            {currency}{product.offerPrice}{" "}
            <span className="text-gray-500/60 text-xs md:text-sm line-through">
              {currency}{product.price}
            </span>
          </p>

          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="text-primary"
          >
            {!cartItems[product._id] ? (
              <button
                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 px-2 sm:px-3 py-1 rounded text-sm"
                onClick={() => addToCart(product._id)}
              >
                <img src={assets.cart_icon} alt="cart_icon" className="w-4 h-4" />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 px-2 py-1 bg-primary/25 rounded text-sm select-none">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer px-2"
                >
                  -
                </button>
                <span className="w-5 text-center">{cartItems[product._id]}</span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="cursor-pointer px-2"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
