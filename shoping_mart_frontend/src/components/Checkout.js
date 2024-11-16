import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Checkout = () => {
  const items = useSelector((state) => state.card.items);
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  

  

  // Calculate subtotal and total amount
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 'Free';
  const totalAmount = subtotal; // Free shipping, so total is same as subtotal

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setShowConfirmation(true);
    
    // dispatch(addOrder())
    
    // Hide confirmation message after 4 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 4000);
  };

  return (
    <div className="checkout-container flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Confirmation Message at the top */}
      {showConfirmation && (
        <div className="order-confirmation fixed top-0 left-0 right-0 p-4 bg-green-200 text-green-800 text-center font-semibold">
          Your order has been placed successfully!
        </div>
      )}

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Checkout</h2>

        {/* Product Details */}
        <div className="product-details w-full mb-6">
          {items.map((item, index) => (
            <div key={index} className="product-item flex items-center mb-4 p-2">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg shadow-md mr-4" 
              />
              <div className="product-info flex-grow">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-700">₹{item.price}</p>
              </div>
              <div className="product-quantity text-gray-700">
                x{item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
          <p className="text-gray-700">Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p className="text-gray-700">Shipping: {shipping}</p>
          <p className="font-bold text-xl text-gray-800">Total Amount: ₹{totalAmount.toFixed(2)}</p>
        </div>

        {/* Payment Options */}
        <div className="payment-methods w-full bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
          <div className="payment-options flex flex-col space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="googlePay"
                checked={paymentMethod === 'googlePay'}
                onChange={() => handlePaymentMethodChange('googlePay')}
                className="mr-2"
              />
              <label htmlFor="googlePay" className="text-gray-800">Google Pay</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="phonePay"
                checked={paymentMethod === 'phonePay'}
                onChange={() => handlePaymentMethodChange('phonePay')}
                className="mr-2"
              />
              <label htmlFor="phonePay" className="text-gray-800">Phone Pay</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="internetPay"
                checked={paymentMethod === 'internetPay'}
                onChange={() => handlePaymentMethodChange('internetPay')}
                className="mr-2"
              />
              <label htmlFor="internetPay" className="text-gray-800">Internet Pay</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cashOnDelivery"
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={() => handlePaymentMethodChange('cashOnDelivery')}
                className="mr-2"
              />
              <label htmlFor="cashOnDelivery" className="text-gray-800">Cash on Delivery</label>
            </div>
          </div>

          {/* Show bank names if 'Internet Pay' is selected */}
          {paymentMethod === 'internetPay' && (
            <div className="bank-names mt-4">
              <div className="flex flex-wrap space-x-2">
                {['Bank of Baroda', 'State Bank of India', 'HDFC', 'ICICI'].map((bank, index) => (
                  <button key={index} className="bg-gray-300 text-black py-2 px-4 rounded-lg">
                    {bank}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Place Order Button */}
        
        
        <button
          onClick={handlePlaceOrder}
          className="bg-orange-500 text-white py-3 w-full rounded-lg transition duration-300 hover:bg-orange-600" 
        >
          Place Order
        </button>

        {/* Link to View Order Details */}
        {orderPlaced && (
          <Link
            to="/app/place"
            className="text-blue-500 underline mt-4 block text-center"
          >
            View Order Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
