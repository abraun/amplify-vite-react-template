import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
import TodoList from "./components/Todo";
import BookList from "./components/BookList";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [books, setBooks] = useState<Array<Schema["Book"]["type"]>>([]);

  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    client.models.Book.observeQuery().subscribe({
      next: (data) => setBooks([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content"), isDone: false });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  function createBook(title: string) {
    const id = Math.floor(Math.random() * 1000);
    client.models.Book.create({ title, id });
  }

  function deleteBook(id: string) {
    client.models.Book.delete({ id });
  }

  return (
    <main>
      <BookList books={books} onCreate={createBook} onDelete={deleteBook}/>
      <TodoList user={user} todos={todos} createTodo={createTodo} deleteTodo={deleteTodo}/>
      
      
      
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}

export default App;
