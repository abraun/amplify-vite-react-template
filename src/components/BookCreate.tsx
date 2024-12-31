import { useState } from "react"

interface BookCreateProps {
    onCreate: (title: string) => void
}

const BookCreate: React.FC<BookCreateProps> = ({onCreate}) => {
    const [title, setTitle] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    //TODO: need to learn how to handle the right types for events
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log("Created book: ", title)
        onCreate(title)
    }

    return (
        <div>
        <h1>Create Book</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Title:
                <input type="text" name="title" onChange={handleChange}/>
                </label>
                <button type="submit" onSubmit={handleSubmit}>Create</button>
            </form>
        </div>
    )
}

export default BookCreate