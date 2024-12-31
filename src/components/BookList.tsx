import BookCreate from "./BookCreate"

function BookList({books, onCreate, onDelete}) {
    const handleCreate = (title) => {
        console.log("Created book BookCreate: ", title)
        onCreate(title)
    }

    return (
        <>
        {books.map((book) => (
            <div>
                <h3>{book.title}</h3><button onClick={() => onDelete(book.id)}>Delete</button>
            </div>
        ))}
            <BookCreate onCreate={handleCreate}/>
        </>
    )
}

export default BookList