import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems, clearCard } from '../utils/cardSlice';
import { Link } from 'react-router-dom';

const CardItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card.items);

  // Calculate total amount with error handling
  const totalAmount = items.reduce((total, item) => {
    return total + (item?.price ? item.price * (item.quantity || 1) : 0);
  }, 0);

  const discount = 0.1 * totalAmount; // 10% discount

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>

      {/* List of items */}
      <div className="w-full max-w-lg space-y-6">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-200"
            >
              <div className="flex items-center space-x-4">
                {/* Product image */}
                <img
                  src={item?.image || 'https://via.placeholder.com/100'}
                  alt={item?.name || 'Product'}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item?.name || 'Unknown Item'}</p>
                  <p className="text-gray-600">Price: ₹{item?.price || 'N/A'}</p>
                  <p className="text-gray-600">Quantity: {item?.quantity || 0}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeItems(item))}
                className="bg-red-400 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-500"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No items in cart.</p>
        )}
      </div>

      {/* Clear items button */}
      <button
        onClick={() => dispatch(clearCard())}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-600"
      >
        Clear Items
      </button>

      {/* Summary Card */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
        <p className="text-gray-700">Total Amount: ₹{totalAmount.toFixed(2)}</p>
        <p className="text-gray-700">Discount: ₹{discount.toFixed(2)}</p>
        <p className="font-bold text-xl text-gray-800">
          Final Amount: ₹{(totalAmount - discount).toFixed(2)}
        </p>

        {/* Offer Voucher Input */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium">Offer Voucher</label>
          <input
            type="text"
            placeholder="Enter voucher code"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg transition duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkout Now Button */}
        <Link to='/app/Checkout'>
        <button
          className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg transition duration-300 hover:bg-green-600"
        >
          Checkout Now
        </button>
        </Link>
      </div>

      {/* Go to Home Button */}
      <Link
        to="/app"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-6 transition duration-300 hover:bg-blue-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default CardItems;
