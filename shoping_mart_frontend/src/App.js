// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Body from './components/Body';  // Main layout (Nav + Footer)
// // import ProductDetails from './components/ProductDetails';  // Product detail page
// // import About from './components/About';  // About page
// // import Skills from './components/Skills';  // Skills page
// // import Main from './components/Main';  // Main page
// // import { Provider } from 'react-redux'
// // import appStore from './utils/appStore'
// // import CardItems from './components/cardItems';
// // import Checkout from './components/Checkout';
// // import Place from './components/Place';
// // import Jobs from './components/Jobs'
// // import Contact from './components/Contact'
// // import Login from './components/Login';
// // import Profile from './components/Profile';
// // import EditProfile from './components/EditProfile';

// // function App() {
// //   return (
// //     <Provider store={appStore}>
// //     <Router>
// //       <Routes>
       
// //         <Route path="/" element={<Body />}>
     
// //           <Route index element={<Main />} /> 
// //           <Route path="about" element={<About />} /> 
// //           <Route path="cardItems" element={<CardItems />} /> 
// //           <Route path="skills" element={<Skills />} />
// //           <Route path="checkout" element={<Checkout />} />
// //           <Route path="place" element={<Place />} />
// //           <Route path="jobs" element={<Jobs />} />
// //           <Route path="contact" element={<Contact />} />
// //           <Route path="login" element={<Login />} />
// //           <Route path="profile" element={<Profile />} />
// //           <Route path="editProfile" element={<EditProfile />} />
                

         
// //         <Route path="product/:id" element={<ProductDetails />} /> 
// //         </Route> 
// //       </Routes>
// //     </Router>
// //     </Provider>
// //   );
// // }

// // export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Body from './components/Body';  // Main layout (Nav + Footer)
// import ProductDetails from './components/ProductDetails';  // Product detail page
// import About from './components/About';  // About page
// import Skills from './components/Skills';  // Skills page
// import Main from './components/Main';  // Main page
// import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
// import CardItems from './components/cardItems';
// import Checkout from './components/Checkout';
// import Place from './components/Place';
// import Jobs from './components/Jobs';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import EditProfile from './components/EditProfile';

// import PreLoginHandle from './components/PreLoginHandle';

// function App() {
//   return (
//     <Provider store={appStore}>
//       <Router>
//         <Routes>
//           {/* PreLogin Route */}
//           <Route path="/" element={<PreLoginHandle />} 
//              <Route path="login" element={<Login />} />
//           />

//           {/* Routes after login */}
//           <Route path="/app" element={<Body />}>
//             <Route index element={<Main />} /> 
//             <Route path="about" element={<About />} /> 
//             <Route path="cardItems" element={<CardItems />} /> 
//             <Route path="skills" element={<Skills />} />
//             <Route path="checkout" element={<Checkout />} />
//             <Route path="place" element={<Place />} />
//             <Route path="jobs" element={<Jobs />} />
//             <Route path="contact" element={<Contact />} />
            
//             <Route path="profile" element={<Profile />} />
//             <Route path="editProfile" element={<EditProfile />} />
//             <Route path="product/:id" element={<ProductDetails />} /> 
//           </Route> 
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';  // Main layout (Nav + Footer)
import ProductDetails from './components/ProductDetails';  // Product detail page
import About from './components/About';  // About page
import Skills from './components/Skills';  // Skills page
import Main from './components/Main';  // Main page
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import CardItems from './components/cardItems';
import Checkout from './components/Checkout';
import Place from './components/Place';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Login from './components/Login';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import PreLoginHandle from './components/PreLoginHandle';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          {/* PreLogin Route */}
          <Route path="/" element={<PreLoginHandle />} />
          <Route path="/login" element={<Login />} />

          {/* Routes after login */}
          <Route path="/app" element={<Body />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="cardItems" element={<CardItems />} />
            <Route path="skills" element={<Skills />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="place" element={<Place />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
