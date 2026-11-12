
import { Link } from "react-router-dom";
import {
  Award,
  Heart,
  ShieldCheck,
  Truck,
  Star
} from "lucide-react";

function About() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative flex min-h-[420px] items-center justify-center bg-gray-950 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-amber-400">
            Welcome to Mayor's Clothing Brand
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Fashion That Defines You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-300">
            We believe fashion is more than what you wear.
            It's how you express yourself, build confidence
            and show the world who you are.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Fashion clothing store"
            className="h-[450px] w-full object-cover"
          />
        </div>

        <div>
          <p className="font-bold uppercase tracking-[4px] text-amber-500">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Our Story
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Mayor's Clothing Brand was created with one goal:
            to make looking good and feeling confident easier
            for everyone.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            We bring together stylish, modern and quality
            clothing for both men and women. Whether you're
            dressing for a casual day, a special occasion or
            everyday life, we want you to find something
            that represents your personality.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our commitment is to make fashion accessible,
            enjoyable and memorable for every customer.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-lg bg-gray-950 px-8 py-4 font-bold text-white transition hover:bg-amber-500 hover:text-black"
          >
            Explore Our Collection
          </Link>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Star size={28} />
            </div>

            <h3 className="text-2xl font-extrabold">Our Mission</h3>

            <p className="mt-5 leading-8 text-gray-600">
              To provide fashionable, quality and affordable
              clothing that helps men and women express their
              personal style and feel confident every day.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Award size={28} />
            </div>

            <h3 className="text-2xl font-extrabold">Our Vision</h3>

            <p className="mt-5 leading-8 text-gray-600">
              To become a trusted fashion brand known for
              quality, creativity, excellent customer service
              and helping everyone look their best.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 text-center">
          <p className="font-bold uppercase tracking-[4px] text-amber-500">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            The Mayor's Experience
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            We care about what you wear and the experience
            you have when shopping with us.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <Feature
            icon={<Heart size={30} />}
            title="Style & Comfort"
            description="Fashionable pieces that help you look good and feel comfortable."
          />

          <Feature
            icon={<ShieldCheck size={30} />}
            title="Quality Products"
            description="We focus on clothing that brings style and value to your wardrobe."
          />

          <Feature
            icon={<Truck size={30} />}
            title="Easy Shopping"
            description="Enjoy a simple shopping experience from browsing to ordering."
          />

          <Feature
            icon={<Star size={30} />}
            title="Customer Care"
            description="Your satisfaction matters to us. We value every customer."
          />

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-950 px-6 py-20 text-center text-white">

        <h2 className="text-3xl font-extrabold md:text-5xl">
          Your Style Starts Here.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-300">
          Discover your next favourite outfit with Mayor's Clothing Brand.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block rounded-lg bg-amber-400 px-9 py-4 font-bold text-black transition hover:bg-white"
        >
          Shop Now
        </Link>

      </section>

    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default About;
