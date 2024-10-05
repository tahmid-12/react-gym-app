import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <div className="m-auto px-4 py-8 bg-[#24262b]">
        <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 max-w-[1200px] mx-auto">
          {/* Company Info */}
          <div>
            <h1 className="w-full text-4xl font-extrabold text-orange-500 mb-4">
              YumEats
            </h1>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We bring you the best of culinary delights, offering a variety of
              dishes from across the globe. Join us on our food journey!
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebookSquare
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                size={30}
              />
              <FaInstagram
                className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
                size={30}
              />
              <FaTwitterSquare
                className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                size={30}
              />
              <FaGithubSquare
                className="cursor-pointer hover:text-gray-500 transition-colors duration-300"
                size={30}
              />
              <FaDribbbleSquare
                className="cursor-pointer hover:text-pink-300 transition-colors duration-300"
                size={30}
              />
            </div>
          </div>
  
          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h6 className="font-semibold text-[#9b9b9b] mb-4">Locations</h6>
              <ul>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  New York
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  USA
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  India
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Canada
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-[#9b9b9b] mb-4">Company</h6>
              <ul>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  About Us
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Careers
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Press
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Blog
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-[#9b9b9b] mb-4">Support</h6>
              <ul>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Help Center
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Safety Center
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Community Guidelines
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-[#9b9b9b] mb-4">Follow Us</h6>
              <ul>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Instagram
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Twitter
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Facebook
                </li>
                <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-300 cursor-pointer">
                  Github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;  