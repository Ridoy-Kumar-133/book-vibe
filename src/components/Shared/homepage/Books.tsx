
import BookCard from '../BookCard';
import { IBook } from '@/types/Books.type';

const getBooksPromise = async () =>{
    const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`
);
    return res.json();
}

const Books = async () => {

    const Books = await getBooksPromise();
    

    return (
        <div>
              <div className='h-[100] w-[90%] m-auto flex items-center justify-center'> <h1 className='font-bol text-4xl font-bold'>Books</h1> </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    Books.slice(0,6).map( (book : IBook) => <BookCard key={book.id} book = {book} ></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;