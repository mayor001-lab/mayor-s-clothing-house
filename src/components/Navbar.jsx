
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Get cart quantity from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(
        localStorage.getItem("mayors-cart-v1") || "[]"
      );

      const total = cart.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
      );

      setCartCount(total);
    };

    updateCartCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const linkStyle = ({ isActive }) =>
    `hover:text-yellow-600 transition ${
      isActive ? "text-yellow-600 font-bold" : "text-gray-800"
    }`;

  const closeMenu = () => {
    setIsOpen(false);
    setShopOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* BRAND LOGO */}
        <Link to="/" onClick={closeMenu}>
          <h1 className="text-2xl font-black tracking-tight">
            MAYOR'S
            <span className="ml-1 text-yellow-600">CLOTHING</span>
          </h1>
          <p className="text-xs tracking-[4px] text-gray-500">
            STYLE YOUR WORLD
          </p>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <div className="group relative">
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="flex items-center gap-1 hover:text-yellow-600"
            >
              Shop <ChevronDown size={16} />
            </button>

            <div className="invisible absolute left-0 top-full w-44 bg-white p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              <Link
                to="/shop?category=Men"
                className="block p-3 hover:bg-gray-100"
              >
                Men's Collection
              </Link>

              <Link
                to="/shop?category=Women"
                className="block p-3 hover:bg-gray-100"
              >
                Women's Collection
              </Link>

              <Link
                to="/shop"
                className="block p-3 hover:bg-gray-100"
              >
                All Products
              </Link>
            </div>
          </div>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* CART AND MOBILE MENU */}
        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative">
            <ShoppingBag size={24} />

            <span className="absolute -right-3 -top-3 rounded-full bg-yellow-600 px-2 py-0.5 text-xs text-white">
              {cartCount}
            </span>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link to="/" onClick={closeMenu}>Home</Link>

            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="flex items-center justify-between"
            >
              Shop <ChevronDown size={17} />
            </button>

            {shopOpen && (
              <div className="ml-5 flex flex-col gap-4 text-gray-600">
                <Link to="/shop?category=Men" onClick={closeMenu}>
                  Men's Collection
                </Link>
                <Link to="/shop?category=Women" onClick={closeMenu}>
                  Women's Collection
                </Link>
                <Link to="/shop" onClick={closeMenu}>
                  All Products
                </Link>
              </div>
            )}

            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/admin" onClick={closeMenu}>Admin</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
