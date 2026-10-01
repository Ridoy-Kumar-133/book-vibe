
import React from "react";
import Image from "next/image";
import Link from "next/link";

import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="mx-4 my-6 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-6 py-8 shadow-xl sm:mx-6 md:mx-10 md:px-12 md:py-10 lg:mx-16 lg:px-16">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <span className="mb-3 inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            📚 Discover Your Next Favorite Book
          </span>

          <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Books to{" "}
            <span className="text-[#23BE0A]">
              freshen up
            </span>{" "}
            your bookshelf
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-400 md:text-base">
            Explore amazing books, discover new stories, and build a
            bookshelf filled with books you love.
          </p>

          <div className="mt-6">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 rounded-xl bg-[#23BE0A] px-6 py-3 font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa308]"
            >
              View The List
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex shrink-0 items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full bg-green-500/20 blur-3xl md:h-52 md:w-52" />

          <Image
            src={bannerImg}
            alt="Featured Book"
            priority
            className="relative w-40 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 md:w-52 lg:w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

