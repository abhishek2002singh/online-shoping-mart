import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaStar, FaComments } from 'react-icons/fa'; // Import icons

const Place = () => {
  const items = useSelector((state) => state.order.items);

  // Order status timeline for each item
  const orderTimeline = [
    { status: 'Order Confirmed', date: 'Sat, 1st Jun' },
    { status: 'Shipped', date: 'Sun, 2nd Jun' },
    { status: 'Out for Delivery', date: 'Fri, 7th Jun' },
    { status: 'Delivered', date: 'Fri, 7th Jun', message: 'Your item has been delivered' },
  ];

  return (
    <div className="place-order-container flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Order Details</h2>

        {/* Order Status Timeline under each product */}
        <div className="order-timeline flex flex-col space-y-6">
          {items.map((item, index) => (
            <div key={index} className="product-card bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <img
                  src={item?.image || 'https://via.placeholder.com/100'}
                  alt={item?.name || 'Product'}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h5 className="font-semibold text-gray-800">{item?.name || 'Unknown Item'}</h5>
                  <p className="text-gray-600">Price: ₹{item?.price || 'N/A'}</p>
                  <p className="text-gray-600">Quantity: {item?.quantity || 0}</p>
                </div>
              </div>

              {/* Order Status Timeline */}
              <div className="flex flex-col space-y-4">
                {orderTimeline.map((step, timelineIndex) => (
                  <div key={timelineIndex} className="flex items-center">
                    <div className="timeline-circle w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      {timelineIndex + 1}
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="font-semibold text-gray-800">{step.status}</p>
                      <p className="text-gray-600">{step.date}</p>
                      {step.message && <p className="text-green-500">{step.message}</p>}
                    </div>

                    {timelineIndex < orderTimeline.length - 1 && (
                      <div className="w-full h-1 bg-blue-500 mx-2" />
                    )}
                  </div>
                ))}
              </div>

              {/* Rate & Review and Chat with Us Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  <FaStar className="mr-2" />
                  Rate & Review Product
                </button>
                <button className="flex items-center bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400">
                  <FaComments className="mr-2" />
                  Chat with Us
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Go to Home Page Button */}
        <Link
          to="/"
          className="bg-green-500 text-white py-3 w-full rounded-lg text-center transition duration-300 hover:bg-green-600 mt-6"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default Place;
