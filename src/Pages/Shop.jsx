
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";

const sampleProducts = [
  {
    id: "1",
    name: "Classic Men's Shirt",
    category: "Men",
    price: 18000,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=700",
    description: "A stylish classic shirt for every occasion."
  },
  {
    id: "2",
    name: "Men's Casual Outfit",
    category: "Men",
    price: 25000,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700",
    description: "Comfortable and fashionable casual wear."
  },
  {
    id: "3",
    name: "Women's Elegant Dress",
    category: "Women",
    price: 32000,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700",
    description: "An elegant dress for special occasions."
  },
  {
    id: "4",
    name: "Women's Fashion Outfit",
    category: "Women",
    price: 28000,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
    description: "A beautiful outfit for everyday fashion."
  },
  {
    id: "5",
    name: "Men's Smart Jacket",
    category: "Men",
    price: 40000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700",
    description: "A smart jacket with a modern finish."
  },
  {
    id: "6",
    name: "Women's Stylish Top",
    category: "Women",
    price: 15000,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=700",
    description: "A stylish top that pairs with anything."
  }
];

function Shop() {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const products = useMemo(() => {
    let result = sampleProducts.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, search, sort]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(price);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Shop Header */}
      <section className="bg-gray-950 px-6 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-amber-400">
          Mayor's Clothing Brand
        </p>

        <h1 className="text-4xl font-extrabold md:text-6xl">
          Our Collections
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Discover stylish and quality fashion for men and women.
        </p>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        {/* Filters */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row">

          <div className="flex flex-wrap gap-3">
            {["All", "Men", "Women"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  category === item
                    ? "bg-gray-950 text-white"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item === "All" ? "All Products" : `${item}'s`}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <div className="flex items-center gap-2 rounded-lg border bg-white px-4">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3 text-sm outline-none"
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border bg-white px-4 py-3 text-sm outline-none"
            >
              <option value="default">Sort by: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

          </div>
        </div>

        {/* Product Count */}
        <p className="mb-6 text-sm text-gray-500">
          Showing {products.length} products
        </p>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                      {product.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    {product.category}'s Collection
                  </p>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="mt-2 font-bold text-gray-900 hover:text-amber-600">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-2 text-sm text-gray-500">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-extrabold">
                      {formatPrice(product.price)}
                    </span>

                    <Link
                      to={`/product/${product.id}`}
                      className="flex items-center gap-2 rounded-lg bg-gray-950 px-4 py-3 text-xs font-bold text-white transition hover:bg-amber-500 hover:text-black"
                    >
                      <ShoppingBag size={15} />
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold">No products found</h3>
            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-lg bg-gray-950 px-6 py-3 text-white"
            >
              Clear Filters
            </button>
          </div>
        )}

      </section>
    </div>
  );
}

export default Shop;
