
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import Image from "next/image";


interface IDetails {
  params: Promise<{
    id: string;
  }>;
}

const BookDetailsPage = async ({ params }: IDetails) => {
  const { id } = await params;

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books/${id}`
);

  if (!res.ok) {
    throw new Error("Book not found");
  }

  const book = await res.json();


  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Book Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="flex flex-col md:flex-row">

            {/* Image */}
            <div className="flex w-full items-center justify-center bg-gray-900 p-8 md:w-2/5">
              <div className="relative h-72 w-48 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                   sizes="..."
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 p-7">

              {/* Category */}
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {book.category}
              </span>

              {/* Book Name */}
              <h1 className="mt-4 text-3xl font-bold text-gray-900">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-2 text-gray-600">
                By{" "}
                <span className="font-semibold text-gray-900">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span className="font-bold">{book.rating}</span>
              </div>

              {/* Info */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">

                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-gray-500">Pages</p>
                  <p className="font-semibold">{book.totalPages}</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-gray-500">Published</p>
                  <p className="font-semibold">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-gray-500">Publisher</p>
                  <p className="font-semibold">{book.publisher}</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-gray-500">Book ID</p>
                  <p className="font-semibold">#{book.id}</p>
                </div>

              </div>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">

                <ReadButton  book = {book}></ReadButton>

                <WishListButton  book={book}></WishListButton>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetailsPage;

