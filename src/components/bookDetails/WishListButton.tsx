'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/Books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book} : {book : IBook}) => {

    const {wishList,setWishlist} = useContext(BooksContext)!;

    const handleReadBook = () =>{
        setWishlist([...wishList, book]);
        toast.success(`${book.bookName} is added to the Wishlist`);
    }

    return (
         <button
      onClick={handleReadBook}
      className="flex-1 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
    >
      WishList
    </button>
    );
};

export default WishListButton;