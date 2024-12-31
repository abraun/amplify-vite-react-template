function Todo({user, todos, createTodo, deleteTodo}) {  
  return (
    <>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
        {todos.map((todo) => (
            <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>{todo.content} {todo.isDone} </li>
        ))}
        
        </ul>
    </>
  )
}

export default Todo