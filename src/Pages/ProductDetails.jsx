
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ShoppingBag,
  ArrowLeft,
  Minus,
  Plus,
  Truck,
  ShieldCheck
} from "lucide-react";

const sampleProducts = [
  {
    id: "1",
    name: "Classic Men's Shirt",
    category: "Men",
    price: 18000,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900",
    description: "A stylish classic shirt designed for comfort and elegance. Perfect for casual outings, work and special occasions."
  },
  {
    id: "2",
    name: "Men's Casual Outfit",
    category: "Men",
    price: 25000,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900",
    description: "Comfortable and fashionable casual wear for the modern man."
  },
  {
    id: "3",
    name: "Women's Elegant Dress",
    category: "Women",
    price: 32000,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=900",
    description: "An elegant dress made to give you a confident and beautiful appearance."
  },
  {
    id: "4",
    name: "Women's Fashion Outfit",
    category: "Women",
    price: 28000,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
    description: "A beautiful fashion outfit for everyday style and comfort."
  },
  {
    id: "5",
    name: "Men's Smart Jacket",
    category: "Men",
    price: 40000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900",
    description: "A modern smart jacket that gives you a clean and confident look."
  },
  {
    id: "6",
    name: "Women's Stylish Top",
    category: "Women",
    price: 15000,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=900",
    description: "A stylish top that pairs beautifully with your favourite outfits."
  }
];

function ProductDetails() {
  const { id } = useParams();

  const product = sampleProducts.find(
    (item) => item.id === id
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(price);

  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }

    const existingCart = JSON.parse(
      localStorage.getItem("mayors-cart-v1") || "[]"
    );

    const existingItem = existingCart.find(
      (item) =>
        item.id === product.id &&
        item.size === selectedSize
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id && item.size === selectedSize
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          size: selectedSize,
          quantity
        }
      ];
    }

    localStorage.setItem(
      "mayors-cart-v1",
      JSON.stringify(updatedCart)
    );

    setAdded(true);

    setTimeout(() => setAdded(false), 2500);
  };

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
        <p className="mt-3 text-gray-500">
          Sorry, this product does not exist.
        </p>
        <Link
          to="/shop"
          className="mt-6 rounded-lg bg-gray-950 px-6 py-3 text-white"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back to Shop
        </Link>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-[450px] w-full object-cover md:h-[600px]"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <span className="text-sm font-bold uppercase tracking-[3px] text-amber-500">
              {product.category}'s Collection
            </span>

            <h1 className="mt-4 text-3xl font-extrabold text-gray-950 md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-gray-950">
              {formatPrice(product.price)}
            </p>

            <div className="my-7 border-t border-gray-200" />

            <h3 className="font-bold">Product Description</h3>

            <p className="mt-3 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="mb-4 font-bold">Select Size</h3>

              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 w-12 rounded-lg border font-semibold transition ${
                      selectedSize === size
                        ? "border-gray-950 bg-gray-950 text-white"
                        : "border-gray-300 hover:border-gray-950"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="mb-4 font-bold">Quantity</h3>

              <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-gray-100"
                >
                  <Minus size={18} />
                </button>

                <span className="min-w-12 text-center font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-gray-100"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={addToCart}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gray-950 py-5 font-bold text-white transition hover:bg-amber-500 hover:text-black"
            >
              <ShoppingBag size={20} />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            {/* Extra Information */}
            <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="text-amber-500" />
                Delivery available across Nigeria
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="text-amber-500" />
                Quality fashion guaranteed
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
