import { useState } from "react"


function BookCreate({onCreate}) {
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
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