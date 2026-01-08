// Add + Remove from Array (State Immutable)

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

const Problem3 = () => {
 
  const[Todo,setTodo]=useState<Todo[]>([])
  const [text,setText]=useState<string>("")
   
  function handleText(e: React.ChangeEvent<HTMLInputElement>){
     const {value}= e.target;
     setText(value)
  }

  function AddTodo(){
      const newTodo:Todo={id:Date.now(),text}
      setTodo([...Todo,newTodo])
  }

  function remove(id:number){
  }


 
  return (
    <>
    <input type="text" value={text} onChange={handleText} />
    <button onClick={AddTodo}>+Add</button>
     <div>

     </div>
    </>
  )
}

export default Problem3