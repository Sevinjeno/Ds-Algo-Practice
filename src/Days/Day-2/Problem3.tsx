// Add + Remove from Array (State Immutable)

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

const Problem3 = () => {
 
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  // 1️⃣ Add item
  const addTodo = () => {
    const newTodo: Todo = { id: Date.now(), text };
    setTodos([...todos, newTodo]); // immutably add
    setText("");
  };

  // 2️⃣ Remove item
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Problem3