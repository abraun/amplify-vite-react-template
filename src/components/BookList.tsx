import BookCreate from "./BookCreate"

interface BookListProps {
    books: any;
    onCreate: (title: string) => void;
    onDelete: (id: number) => void;
}

//function BookList({books, onCreate, onDelete}) {
const BookList: React.FC<BookListProps> = ({books, onCreate, onDelete}) => {
    const handleCreate = (title: string) => {
        console.log("Created book BookCreate: ", title)
        onCreate(title)
    }

    return (
        <>
        {books.map((book: any) => (
            <div>
                <h3>{book.title}</h3><button onClick={() => onDelete(book.id)}>Delete</button>
            </div>
        ))}
            <BookCreate onCreate={handleCreate}/>
        </>
    )
}

export default BookList