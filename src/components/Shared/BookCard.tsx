
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/Books.type";

interface IBookCardProps{
    book : IBook;
}

const BookCard = ({ book } : IBookCardProps ) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Book Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="..."
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-black/80 px-3 py-1 text-sm font-semibold text-white">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          by{" "}
          <span className="font-medium text-gray-700">
            {book.author}
          </span>
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="font-semibold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Full Width Button */}
        <Link
          href={`/books/${book.id}`}
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-black px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
