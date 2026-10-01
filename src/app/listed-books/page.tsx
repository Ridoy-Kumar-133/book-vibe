"use client";


import ToggleCard from "@/components/toggleBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/Books.type";
import React, { useContext, useState } from "react";



const LIstedBooks = () => {
    const { readBooks } = useContext(BooksContext)!;
    const { wishList} = useContext(BooksContext)!;

    const [ sortby, setSortby] = useState<'rating' | 'pages' | 'year'>('rating')!;


    const sortBooks = ( books : IBook[] ) =>{
        const sortedBooks = [...books];
         if(sortby === 'rating'){
            sortedBooks.sort((a,b ) => b.rating - a.rating);
        }else  if (sortby === 'pages')  {
             sortedBooks.sort((a,b ) => a.totalPages - b.totalPages);
        }
        else{
             sortedBooks.sort((a,b ) => a.yearOfPublishing - b.yearOfPublishing);
        }
        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks)
    const sortedWishList = sortBooks(wishList)
    

    return (
        <div className="container mx-auto py-5">
            <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>

           <div className="my-10  mx-auto flex justify-center items-center">

            <select 
            value={sortby}
            onChange={ (e) => setSortby(e.target.value as 'rating' | 'pages' | 'year' )}
             className="select select-success">
            <option disabled={true}>Sort by</option>
             <option value={'raing'}>Rating</option>
            <option value={'pages'}>Number of pages</option>
            <option value={"year"}>Publish year</option>
           </select>
           </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label= {`Read Books : ${readBooks.length}`}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    { sortedReadBooks.length > 0 ?
                        sortedReadBooks.map( (book : IBook) => <ToggleCard key={book.id} book={book}></ToggleCard> 
                    ) : ( <p className="text-center text-lg font-semibold">No read Books found</p> )
                }
                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label= {`WishList Books : ${wishList.length}`}
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    { sortedWishList.length > 0 ?
                        sortedWishList.map( (book : IBook) => <ToggleCard key={book.id} book={book} ></ToggleCard> )
                          : ( <p className="text-center text-lg font-semibold">No WishList book found</p> )
                    }
                </div>
            </div>
        </div>
    );
};

export default LIstedBooks;
