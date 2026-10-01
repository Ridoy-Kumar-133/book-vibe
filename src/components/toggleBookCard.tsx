import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/Books.type";

const ToggleCard = ({ book }: { book: IBook }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl md:flex-row">

      {/* Book Image */}
      <div className="relative h-64 w-full shrink-0 bg-gray-100 md:h-64 md:w-48">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 768px) 100vw, 192px"
          className="object-cover"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-1 flex-col justify-between p-6">

        <div>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {book.category}
          </span>

          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          <p className="mt-1 text-gray-600">
            By{" "}
            <span className="font-semibold text-gray-800">
              {book.author}
            </span>
          </p>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
            {book.review}
          </p>

          {/* Info */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>📄 {book.totalPages} Pages</span>
            <span>⭐ {book.rating}</span>
            <span>📅 {book.yearOfPublishing}</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <Link
            href={`/books/${book.id}`}
            className="inline-block rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ToggleCard;