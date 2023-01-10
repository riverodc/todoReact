import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

//esto es un componente porque inicia con A mayuscula App
//esto no es HTML es JSX
// las llaves hacen referencia a javascript

const todos = [
  { text: "Terminar Curso de React", completed: false },
  { text: "Salir a Trotar", completed: false },
  { text: "Leer la Biblia", completed: false },
];

function App() {
  return (
    //Esta etiqueta React.Fragment sirve para envolver todo nuestro
    //componente ya que react nos exige hacerlo podria hacerse con div
    // pero podria afectar nuestro css al tener muchas

    <React.Fragment>

     <TodoCounter /> 

      
      <TodoSearch />

      

     
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
       
      

     
      <CreateTodoButton /> 

   
    </React.Fragment>
  );
}

export default App;
