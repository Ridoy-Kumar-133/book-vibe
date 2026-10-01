"use client";

import { createContext, ReactNode, useState } from "react";
import { IBook } from "@/types/Books.type";

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;