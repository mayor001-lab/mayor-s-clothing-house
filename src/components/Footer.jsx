
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-2xl font-extrabold">
              MAYOR'S <span className="text-amber-400">CLOTHING</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              Your style, your confidence. Discover quality fashion
              for men and women at Mayor's Clothing Brand.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Shopping Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Collections</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/shop?category=Men">Men's Collection</Link></li>
              <li><Link to="/shop?category=Women">Women's Collection</Link></li>
              <li><Link to="/shop">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400" />
adefajomayor1@gmail.com              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400" />
                +2347046120787
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-400" />
                Nigeria
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Mayor's Clothing Brand.
            All rights reserved.
          </p>

          <Link to="/" className="flex items-center gap-2 hover:text-amber-400">
            Back to top <ArrowUp size={16} />
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
