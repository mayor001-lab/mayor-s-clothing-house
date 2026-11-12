
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  MessageCircle
} from "lucide-react";

function Cart() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mayors-cart-v1") || "[]");
    } catch {
      return [];
    }
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("mayors-cart-v1", JSON.stringify(cart));

    // Update Navbar cart count
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // Format price
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(price);

  // Increase quantity
  const increaseQuantity = (id, size) => {
    setCart((previous) =>
      previous.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id, size) => {
    setCart((previous) =>
      previous.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, Number(item.quantity) - 1) }
          : item
      )
    );
  };

  // Remove product
  const removeItem = (id, size) => {
    setCart((previous) =>
      previous.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  const checkout = () => {
    if (cart.length === 0) return;

    const orderDetails = cart.map((item) => `
Product: ${item.name}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ${formatPrice(Number(item.price) * Number(item.quantity))}
`).join("\n");

    const message = `Hello Mayor's Clothing Brand! 👋

I would like to place an order.

🛍️ MY ORDER

${orderDetails}

Total: ${formatPrice(total)}

Please confirm product availability and delivery details.

Thank you for shopping with me! ❤️`;

    const phoneNumber = "07046120787";

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[3px] text-amber-500">
            Mayor's Clothing Brand
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-950">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            Review your items before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">
            <ShoppingBag
              size={65}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-6 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              You haven't added any products yet.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gray-950 px-7 py-4 font-bold text-white hover:bg-amber-500 hover:text-black"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-44 w-full rounded-lg bg-gray-100 object-cover sm:w-36"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-950">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Category: {item.category}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-red-500 hover:text-red-700"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <p className="mt-3 font-bold">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border">
                        <button
                          onClick={() => decreaseQuantity(item.id, item.size)}
                          className="p-3 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="min-w-10 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id, item.size)}
                          className="p-3 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-extrabold text-gray-950">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-sm font-semibold text-red-500 hover:text-red-700"
              >
                Clear Entire Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="rounded-xl bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-extrabold">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-gray-500">
                <span>Total Items</span>
                <span>
                  {cart.reduce(
                    (sum, item) => sum + Number(item.quantity),
                    0
                  )}
                </span>
              </div>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="mt-4 flex justify-between border-t pt-5">
                <span className="font-bold">Total</span>
                <span className="text-xl font-extrabold">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="mt-4 text-xs text-gray-400">
                Delivery charges will be confirmed when you place your order.
              </p>

              <button
                onClick={checkout}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={20} />
                Checkout on WhatsApp
              </button>

              <Link
                to="/shop"
                className="mt-5 block text-center text-sm font-semibold text-gray-500 hover:text-amber-600"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
