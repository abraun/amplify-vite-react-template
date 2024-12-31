interface TodoProps {
    user: any;
    todos: any;
    createTodo: any;
    deleteTodo: any;
}

const Todo: React.FC<TodoProps> = ({user, todos, createTodo, deleteTodo}) => {
  return (
    <>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
        {todos.map((todo: Todo) => (
            <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>{todo.content} {todo.isDone} </li>
        ))}
        
        </ul>
    </>
  )
}

export default Todo