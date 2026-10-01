"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/Books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
 const { readBooks, setReadBooks } = useContext(BooksContext)!;

  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`You have read : ${book.bookName}`)
  };

  return (
    <button
      onClick={handleReadBook}
      className="flex-1 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
    >
      Read
    </button>
  );
};

export default ReadButton;