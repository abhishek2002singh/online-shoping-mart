import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa'; // For ratings

const translations = {
  english: {
    appName: "EzziMart",
    tagline: "Your ultimate destination for groceries, electronics, fashion, and more.",
    login: "Login to Get Started",
    language: "English",
    language2:"select language",
    offers: "Today's Offers",
    groceriesOffer: "10% off on orders above ₹500",
    fashionOffer: "20% off on fashion and accessories",
    electronicsOffer: "Flat 30% off on electronics this weekend",
    groceriesBOGO: "Buy 1 Get 1 Free on select groceries",
    categories: "Explore Categories",
    groceries: "Groceries",
    groceriesDesc: "Fresh vegetables, fruits, and daily essentials.",
    fashion: "Fashion",
    fashionDesc: "Latest trends in clothing, shoes, and accessories.",
    electronics: "Electronics",
    electronicsDesc: "Smartphones, laptops, and home appliances.",
    jewelry: "Jewelry",
    jewelryDesc: "Elegant gold, silver, and diamond pieces.",
    faq: "Frequently Asked Questions",
    faq1: "What is EzziMart?",
    faq2: "What offers are available?",
    faq3: "What can I buy?",
    faq4: "How do I track my order?",
    faq1Answer: "EzziMart is an online marketplace offering a wide range of products across categories like groceries, fashion, electronics, and more.",
    faq2Answer: "EzziMart offers various discounts and deals like 10% off on groceries, 20% off on fashion, and flat 30% off on electronics.",
    faq3Answer: "You can buy groceries, fashion items, electronics, jewelry, and more at discounted prices on EzziMart.",
    faq4Answer: "You can track your order by logging into your EzziMart account and visiting the 'My Orders' section.",
  },
  hindi: {
    appName: "इज्ज़ीमार्ट",
    tagline: "आपकी खरीदारी की अंतिम मंज़िल: किराने का सामान, इलेक्ट्रॉनिक्स, फैशन और बहुत कुछ।",
    login: "शुरू करने के लिए लॉगिन करें",
    language: "हिंदी",
    language2:"भाषा चुनें",
    offers: "आज के ऑफर",
    groceriesOffer: "₹500 से अधिक के ऑर्डर पर 10% छूट",
    fashionOffer: "फैशन और एसेसरीज पर 20% छूट",
    electronicsOffer: "इस सप्ताहांत इलेक्ट्रॉनिक्स पर फ्लैट 30% छूट",
    groceriesBOGO: "चुनिंदा किराने के सामान पर 1 खरीदें 1 मुफ्त पाएं",
    categories: "श्रेणियाँ देखें",
    groceries: "किराना",
    groceriesDesc: "ताज़ी सब्जियाँ, फल, और दैनिक आवश्यकताएं।",
    fashion: "फैशन",
    fashionDesc: "कपड़े, जूते, और एसेसरीज के नवीनतम ट्रेंड।",
    electronics: "इलेक्ट्रॉनिक्स",
    electronicsDesc: "स्मार्टफोन, लैपटॉप, और होम एप्लायंसेस।",
    jewelry: "आभूषण",
    jewelryDesc: "आकर्षक सोने, चांदी और हीरे के गहने।",
    faq: "सामान्य प्रश्न",
    faq1: "इज्ज़ीमार्ट क्या है?",
    faq2: "कौन से ऑफर उपलब्ध हैं?",
    faq3: "मैं क्या खरीद सकता/सकती हूँ?",
    faq4: "मैं अपना ऑर्डर कैसे ट्रैक करूँ?",
    faq1Answer: "इज्ज़ीमार्ट एक ऑनलाइन मार्केटप्लेस है जो किराने का सामान, फैशन, इलेक्ट्रॉनिक्स, और अधिक श्रेणियों के उत्पादों की पेशकश करता है।",
    faq2Answer: "इज्ज़ीमार्ट विभिन्न छूट और ऑफर प्रदान करता है जैसे कि किराने पर 10% छूट, फैशन पर 20% छूट, और इलेक्ट्रॉनिक्स पर फ्लैट 30% छूट।",
    faq3Answer: "आप इज्ज़ीमार्ट पर किराना, फैशन आइटम, इलेक्ट्रॉनिक्स, आभूषण और अधिक छूट कीमतों पर खरीद सकते हैं।",
    faq4Answer: "आप इज्ज़ीमार्ट अकाउंट में लॉगिन करके और 'मेरे ऑर्डर' सेक्शन में जाकर अपना ऑर्डर ट्रैक कर सकते हैं।",
  },
  urdu: {
    appName: "ایزی مارٹ",
    tagline: "آپ کی خریداری کا حتمی مقام: گروسری، الیکٹرانکس، فیشن اور مزید۔",
    login: "شروع کرنے کے لئے لاگ ان کریں",
    language: "زبان",
    language2:"زبان منتخب کریں",
    offers: "آج کی پیشکشیں",
    groceriesOffer: "₹500 سے اوپر کے آرڈرز پر 10٪ رعایت",
    fashionOffer: "فیشن اور لوازمات پر 20٪ رعایت",
    electronicsOffer: "اس ویک اینڈ پر الیکٹرانکس پر 30٪ رعایت",
    groceriesBOGO: "چنے ہوئے گروسری پر 1 خریدیں 1 مفت پائیں",
    categories: "زمرے دیکھیں",
    groceries: "گروسری",
    groceriesDesc: "تازہ سبزیاں، پھل اور روزمرہ کی ضروریات۔",
    fashion: "فیشن",
    fashionDesc: "کپڑے، جوتے اور لوازمات کے نئے رجحانات۔",
    electronics: "الیکٹرانکس",
    electronicsDesc: "اسمارٹ فونز، لیپ ٹاپ اور ہوم اپلائنسز۔",
    jewelry: "زیورات",
    jewelryDesc: "خوبصورت سونا، چاندی اور ہیروں کے زیورات۔",
    faq: "اکثر پوچھے گئے سوالات",
    faq1: "ایزی مارٹ کیا ہے؟",
    faq2: "کون سی پیشکشیں دستیاب ہیں؟",
    faq3: "میں کیا خرید سکتا ہوں؟",
    faq4: "میں اپنے آرڈر کا پتہ کیسے لگاؤں؟",
    faq1Answer: "ایزی مارٹ ایک آن لائن مارکیٹ پلیس ہے جو گروسری، فیشن، الیکٹرانکس، اور مزید کیٹگریز میں مصنوعات پیش کرتا ہے۔",
    faq2Answer: "ایزی مارٹ مختلف چھوٹ اور آفرز فراہم کرتا ہے جیسے گروسری پر 10٪ رعایت، فیشن پر 20٪ رعایت، اور الیکٹرانکس پر 30٪ رعایت۔",
    faq3Answer: "آپ ایزی مارٹ سے گروسری، فیشن آئٹمز، الیکٹرانکس، زیورات اور مزید خرید سکتے ہیں۔",
    faq4Answer: "آپ ایزی مارٹ کے اکاؤنٹ میں لاگ ان کر کے اور 'میرے آرڈرز' سیکشن میں جا کر اپنا آرڈر ٹریک کر سکتے ہیں۔",
  
  }
};

const PreLogin = () => {
  const navigate = useNavigate();
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const toggleQuestion = (index) => setOpenQuestion(openQuestion === index ? null : index);
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  const faqItems = [
    { question: translations[selectedLanguage].faq1, answer: translations[selectedLanguage].faq1Answer },
    { question: translations[selectedLanguage].faq2, answer: translations[selectedLanguage].faq2Answer },
    { question: translations[selectedLanguage].faq3, answer: translations[selectedLanguage].faq3Answer },
    { question: translations[selectedLanguage].faq4, answer: translations[selectedLanguage].faq4Answer },
  ];

  const productCategories = [
    { category: translations[selectedLanguage].groceries, description: translations[selectedLanguage].groceriesDesc },
    { category: translations[selectedLanguage].fashion, description: translations[selectedLanguage].fashionDesc },
    { category: translations[selectedLanguage].electronics, description: translations[selectedLanguage].electronicsDesc },
    { category: translations[selectedLanguage].jewelry, description: translations[selectedLanguage].jewelryDesc },
  ];

  const offers = [
    translations[selectedLanguage].groceriesOffer,
    translations[selectedLanguage].fashionOffer,
    translations[selectedLanguage].electronicsOffer,
    translations[selectedLanguage].groceriesBOGO,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center relative">
      {/* Welcome Section */}
      <div className="relative text-center text-gray-800 p-6 max-w-4xl">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-700">{translations[selectedLanguage].appName}</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          {translations[selectedLanguage].tagline}
        </p>
        <Link to="/login">
          <button
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-purple-600 hover:to-indigo-500 transition duration-300 mb-8"
            onClick={() => navigate('/login')}
          >
            {translations[selectedLanguage].login}
          </button>
        </Link>
      </div>
      <div className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transform transition duration-300 ease-in-out hover:bg-gradient-to-l hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 mb-8"
      >{translations[selectedLanguage].language2}</div>

      {/* Language Dropdown */}
      <div className="relative mb-8">
        <button
          className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition duration-300"
          onClick={toggleLanguage}
        >
          {translations[selectedLanguage].language}
        </button>
        {isLanguageOpen && (
          <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => changeLanguage('english')}>English</button>
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => changeLanguage('hindi')}>हिंदी</button>
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => changeLanguage('urdu')}>اردو</button>
          </div>
        )}
      </div>

      {/* Offers Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">{translations[selectedLanguage].offers}</h2>
        <ul className="list-disc list-inside text-gray-600">
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </div>

      {/* Product Categories Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">{translations[selectedLanguage].categories}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productCategories.map((item, index) => (
            <li key={index} className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-lg text-indigo-700">{item.category}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">{translations[selectedLanguage].faq}</h2>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openQuestion === index ? (
                  <FiMinus className="text-indigo-700" size={20} />
                ) : (
                  <FiPlus className="text-indigo-700" size={20} />
                )}
              </button>
              {openQuestion === index && (
                <p className="text-gray-600 text-base px-4 pb-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreLogin;
