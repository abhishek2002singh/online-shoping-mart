import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaShoppingCart, FaCreditCard, FaRegCreditCard, FaWallet, FaTag } from 'react-icons/fa';
import ShimmerProduct from './ShimmerProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../utils/cardSlice';
import { addOrder } from '../utils/placeErderSlice';
import {setUserComments } from '../utils/commentSlice'
import { FaStar } from 'react-icons/fa';
import Rating from './Rating';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // State to manage the "Item added" message
  const dispatch = useDispatch();
  const [commentInput, setCommentInput,clearComments] = useState("");

  //add comment 
  const showAllComment = useSelector((store)=>store.productComment)
  const userCommentShowData = useSelector((store)=>store.productComment.userComment)
  console.log(userCommentShowData)
  
 
  const commentedData = showAllComment?.comments[0][id]?.comments||[];
 


 
 
    
  

  useEffect(() => {
    // Fetch product details by ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.image); // Set the default image on load
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <ShimmerProduct />;

  const handleImageClick = (image) => {
    setSelectedImage(image); // Change the displayed image on click
  };

  const handleAddClick = () => {
    // Pass product details as the payload when dispatching addItems
    dispatch(addItems({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1, // Default quantity is 1, adjust based on your logic
    }));

    dispatch(addOrder({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    }));

    // Show the "Item added" message
    setShowMessage(true);

    // Hide the message after 4 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value); // Update the comment input state
  };

  const handleAddComment = () => {
    if (commentInput.trim() === "") {
      alert("Please enter a comment.");
      return;
    }

    // Dispatch the new comment to Redux store
    const newComment = {
      user: "Kamal Yadav", // You can replace this with actual user data
      timestamp: new Date().toISOString(),
      comment: commentInput,
    };

    // Dispatch action to update the comments in Redux store
    dispatch(setUserComments({ productId: id, newComment }));
    

    // Clear the comment input after submission
    setCommentInput("");
  };


  //likes  
  

  return (
    <div className="container mx-auto p-4  transition duration-500 ease-in-out transform hover:bg-lightBlue-100">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image gallery */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <img
            src={selectedImage}
            alt={product.title} // Descriptive alt text
            className="w-full h-64 object-contain"
          />
          {/* Thumbnail images to click */}
          <div className="flex gap-4">
            <img
              src={product.image}
              alt={product.title} // Descriptive alt text without "Image"
              className="w-16 h-16 cursor-pointer"
              onClick={() => handleImageClick(product.image)}
            />
            <img
              src="https://fakestoreapi.com/img/71pWzhhQF6L._AC_SY879_.jpg"
              alt="Additional view"
              className="w-16 h-16 cursor-pointer"
              onClick={() => handleImageClick("https://fakestoreapi.com/img/71pWzhhQF6L._AC_SY879_.jpg")}
            />
          </div>
        </div>

        {/* Product details */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <p className="text-xl mb-4">₹{product.price}</p>
          <p className="text-yellow-500 text-lg font-bold mb-4">Rating: {product.rating.rate}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Buttons with icons */}
          <div className="flex gap-4 my-6">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 flex items-center gap-2" onClick={handleAddClick}>
              <FaShoppingCart /> Add to Cart
            </button>
            <Link to='/app/cardItems'>
            <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 flex items-center gap-2" onClick={handleAddClick}>
              <FaCreditCard /> Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* "Item Added" message */}
      {showMessage && (
           <div className="fixed top-20 right-4 bg-blue-500 text-white py-2 px-4 rounded-md border-2 border-white shadow-lg shadow-blue-500/50">
             Item added to the cart!
           </div>
       )}



      {/* Available Offers Section */}
      {/* <div className="my-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Available Offers</h3>
        <div className="text-gray-600 mb-4">
          <ul>
            <li>
              <FaWallet className="inline-block text-blue-500 mr-2" />
              <strong>Bank Offer 5%</strong>: Unlimited Cashback on Flipkart Axis Bank Credit Card <span className="text-blue-500">T&C</span>
            </li>
            <li>
              <FaTag className="inline-block text-blue-500 mr-2" />
              <strong>Special Price</strong>: Get extra 33% off (price inclusive of cashback/coupon) <span className="text-blue-500">T&C</span>
            </li>
            <li>
              <FaRegCreditCard className="inline-block text-blue-500 mr-2" />
              <strong>Buy Keyboard Combo with Monitor</strong>: Get 5% off <span className="text-blue-500">T&C</span>
            </li>
            <li>
              <strong>No Cost EMI</strong>: ₹1,417/month. Standard EMI also available. <span className="text-blue-500">View Plans</span>
            </li>
            <li>
              <FaRegCreditCard className="inline-block text-blue-500 mr-2" />
              <strong>Buy UPS with Monitor</strong>: Get 5% off <span className="text-blue-500">View Plans</span>
            </li>
            <li>
              <FaRegCreditCard className="inline-block text-blue-500 mr-2" />
              <strong>Buy Webcam with Monitor</strong>: Get 5% off <span className="text-blue-500">View Plans</span>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Mobile Protection and Warranty */}
      {/* <div className="my-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Protect Your Product</h3>
        <p className="text-gray-600 mb-4">
          Get brand-authorised repairs for all phone damages with free pickup and drop.
          If we can't repair it, we will replace it!
        </p>
        <h3 className="text-lg font-semibold mb-2">Extended Warranty</h3>
        <p className="text-gray-600 mb-4">
          OneAssist Extended Warranty Plan - OneAssist Extended Warranty means an extension of the original manufacturer's warranty on the concerned product by a continuous period of 1 or 2 years, starting from the expiry of the manufacturer's warranty. OneAssist Extended Warranty replicates the manufacturer's warranty against any malfunctions or breakdown for the duration opted.
        </p>
        <h3 className="text-lg font-semibold mb-2">Digital Suraksha by Bajaj Allianz</h3>
        <p className="text-gray-600">
          Get your financial losses covered for online transaction frauds on all bank accounts, credit/debit cards, mobile wallets. Covers scam calls, OTP SMS frauds, UPI, net banking, Cyber Attacks, Sim-swapping, Phishing, Spoofing, and more.
        </p>
        <p className="text-blue-500 font-semibold">Know More - Abhishek Singh</p>
      </div> */}

      <Rating />

 {/* Comments Section */}
 <div className="my-8 p-6 rounded-md  shadow-lg bg-white shadow-[0_-4px_8px_rgba(0,0,0,0.1)]">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Customer Reviews</h3>
  {commentedData.length > 0 ? (
    <ul className="space-y-6">
      {commentedData.map((comment, index) => (
        <li key={index} className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <strong className="text-lg font-medium text-gray-900">{comment.user}</strong>
            <span className="text-sm text-gray-500">{new Date(comment.timestamp).toLocaleString()}</span>
          </div>
          <p className="text-gray-700">{comment.comment}</p>
        </li>
      ))}
    </ul>
    
  ) : (
    <p className="text-gray-500 text-lg">No reviews yet. Be the first to comment!</p>
  )}
{userCommentShowData.map((comment, index) => (
  <div key={index} className="p-4 border-b border-gray-200">
    <div className="flex items-center gap-2 mb-2">
      <strong className="text-lg font-medium text-gray-900">
         {comment.newComment.user}
      </strong>
    </div>
    <p className="text-gray-700">Comment: {comment.newComment.comment}</p>
    <span className="text-sm text-gray-500">
      Added on: {new Date(comment.newComment.timestamp).toLocaleString()}
    </span>
  </div>
))}


  {/* Add Comment Section */}
  <div className="mt-6 flex flex-col gap-4">
    <textarea
      className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter User Name like 'abhishek' and enter comment"
      rows="4"
      value={commentInput}
      onChange={handleCommentChange}
    ></textarea>
    <div className="flex gap-4">
      <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300" onClick={handleAddComment}>
        Add Comment
      </button>
      <button className="px-6 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300">
        Remove Comment
      </button>
    </div>
  </div>
</div>



  



    </div>
  );
};

export default ProductDetails;
