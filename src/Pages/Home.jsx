
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

function Home() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1800"
          alt="Fashion collection"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">

          <p className="mb-5 text-sm font-bold uppercase tracking-[6px] text-yellow-500">
            Welcome to Mayor's Clothing
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            DRESS WELL.
            <br />
            LOOK GREAT.
            <br />
            <span className="text-yellow-500">
              FEEL CONFIDENT.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-200">
            Discover the latest fashion trends for men and women.
            Your style, your confidence, your identity.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              to="/shop"
              className="flex items-center gap-3 bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-white"
            >
              SHOP NOW
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/about"
              className="border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-black"
            >
              ABOUT US
            </Link>

          </div>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[4px] text-yellow-600">
            Explore our style
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            SHOP BY COLLECTION
          </h2>

          <p className="mt-3 text-gray-500">
            Find the perfect outfit for every occasion.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">

          {/* MEN */}
          <div className="group relative h-[450px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900"
              alt="Men's fashion"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">

              <p className="font-bold uppercase tracking-[5px] text-yellow-400">
                Modern Style
              </p>

              <h3 className="mt-3 text-4xl font-black">
                MEN'S COLLECTION
              </h3>

              <Link
                to="/shop?category=Men"
                className="mt-7 flex items-center gap-2 bg-white px-8 py-4 font-bold text-black hover:bg-yellow-500"
              >
                SHOP MEN
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>

          {/* WOMEN */}
          <div className="group relative h-[450px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900"
              alt="Women's fashion"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">

              <p className="font-bold uppercase tracking-[5px] text-yellow-400">
                Elegant Style
              </p>

              <h3 className="mt-3 text-4xl font-black">
                WOMEN'S COLLECTION
              </h3>

              <Link
                to="/shop?category=Women"
                className="mt-7 flex items-center gap-2 bg-white px-8 py-4 font-bold text-black hover:bg-yellow-500"
              >
                SHOP WOMEN
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-gray-100 px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="font-bold uppercase tracking-[4px] text-yellow-600">
                Our selection
              </p>

              <h2 className="mt-3 text-3xl font-black">
                FEATURED PRODUCTS
              </h2>
            </div>

            <Link
              to="/shop"
              className="flex items-center gap-2 font-bold hover:text-yellow-600"
            >
              VIEW ALL
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            <Product
              image="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600"
              name="Classic Men's Outfit"
              price="₦35,000"
            />

            <Product
              image="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600"
              name="Elegant Women's Dress"
              price="₦45,000"
            />

            <Product
              image="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600"
              name="Casual Men's Shirt"
              price="₦18,000"
            />

            <Product
              image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
              name="Women's Fashion Set"
              price="₦38,000"
            />

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="mb-14 text-center">
          <p className="font-bold uppercase tracking-[4px] text-yellow-600">
            The Mayor's experience
          </p>

          <h2 className="mt-3 text-3xl font-black">
            WHY CHOOSE US?
          </h2>
        </div>

        <div className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">

          <Feature
            icon={<ShoppingBag size={35} />}
            title="QUALITY FASHION"
            description="Stylish outfits selected for your wardrobe."
          />

          <Feature
            icon={<Truck size={35} />}
            title="DELIVERY"
            description="Convenient delivery for your orders."
          />

          <Feature
            icon={<ShieldCheck size={35} />}
            title="SECURE SHOPPING"
            description="A simple and convenient shopping experience."
          />

          <Feature
            icon={<Headphones size={35} />}
            title="CUSTOMER CARE"
            description="We're here to help with your shopping."
          />

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-black px-5 py-20 text-center text-white">

        <p className="font-bold uppercase tracking-[5px] text-yellow-500">
          Your style starts here
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          BE BOLD. BE DIFFERENT.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          Upgrade your wardrobe with fashion that makes you stand out.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-3 bg-yellow-500 px-9 py-4 font-bold text-black hover:bg-white"
        >
          EXPLORE COLLECTION
          <ArrowRight size={20} />
        </Link>

      </section>

    </main>
  );
}

function Product({ image, name, price }) {
  return (
    <div className="group overflow-hidden bg-white">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="mt-2 font-bold text-yellow-600">{price}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div>
      <div className="mb-5 flex justify-center text-yellow-600">
        {icon}
      </div>

      <h3 className="font-black">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default Home;
