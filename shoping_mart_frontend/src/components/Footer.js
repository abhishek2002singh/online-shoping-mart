import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-base-300 text-base-content p-10 w-full shadow-lg rounded-t-lg border-t-2 border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Developer Information */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h6 className="text-lg font-semibold mb-4">Developer Information</h6>
            <ul className="space-y-2">
              <li className="text-lg font-semibold text-primary">Created by: <span className="text-secondary font-bold">Abhishek Singh</span></li>
              <li>Mobile: <a href="tel:9569862364" className="text-primary hover:underline">9569862364</a></li>
              <li>Email: <a href="mailto:singhsabhishek23@gmail.com" className="text-primary hover:underline">singhsabhishek23@gmail.com</a></li>
            </ul>
          </div>
  
          {/* Company Links */}
          <nav className="mb-6 md:mb-0 text-center md:text-left">
            <h6 className="text-lg font-semibold mb-4">Company</h6>
            <ul className="space-y-2">
              <Link to='/about'>
              <li><a href="/about" className="link link-hover text-primary hover:text-secondary transition-colors">About Us</a></li></Link>
              <Link to='/skills'><li><a href="/skills" className="link link-hover text-primary hover:text-secondary transition-colors">Skills</a></li></Link>
              <Link to='/jobs'><li><a href="/jobs" className="link link-hover text-primary hover:text-secondary transition-colors">Jobs</a></li></Link>
              <Link to='/contact'><li><a href="/contact" className="link link-hover text-primary hover:text-secondary transition-colors">Contact</a></li></Link>
            </ul>
          </nav>
  
          {/* Social Links */}
          <nav className="mb-6 md:mb-0 text-center md:text-left">
            <h6 className="text-lg font-semibold mb-4">Social</h6>
            <div className="grid grid-flow-col gap-4 justify-center md:justify-start">
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-500 transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-500">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-600 transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-red-600">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-800 transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-800">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
  
        {/* Footer Bottom */}
        <div className="container mx-auto mt-10 text-center border-t border-gray-300 pt-4">
          <p className="text-sm font-light">
            &copy; 2024 <span className="text-primary font-semibold">Abhishek Singh</span>. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
export default Footer;
