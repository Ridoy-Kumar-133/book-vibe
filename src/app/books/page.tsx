
import { IBook } from '@/types/Books.type';
import BookCard from '@/components/Shared/BookCard';

const getBooksPromise = async () =>{
    const res = await fetch('http://localhost:5000/books');
    return res.json();
}

const Books = async () => {

    const Books = await getBooksPromise();
    

    return (
        <div>
              <div className='h-[100] w-[90%] m-auto flex items-center justify-center'> <h1 className='font-bol text-4xl font-bold'>Books</h1> </div>
            <div className='grid grid-cols-3 gap-4 w-[96%] m-auto'>
                {
                    Books.map( (book : IBook) => <BookCard key={book.id} book = {book} ></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;