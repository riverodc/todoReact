import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';

/*import './App.css';
esto es un componente porque inicia con A mayuscula App
esto no es HTML es JSX
las llaves hacen referencia a javascript */

const todos = [
  { image: "image1", title: "Tarea One", text: "Terminar Curso de React", completed: true },
  { image: "image2", title: "Tarea Two", text: "Salir a Trotar", completed: false },
  { image: "image3", title: "Tarea Three", text: "Leer la Biblia", completed: false },
  { image: "image1", title: "Tarea Three", text: "Study React Native", completed: false },
  
  
];

function App() {
  return (
    <div className="App mystyle">

     {/* Esta etiqueta React.Fragment sirve para envolver todo nuestro
      componente ya que react nos exige hacerlo podria hacerse con div // pero
      podria afectar nuestro css al tener muchas*/} 

      <React.Fragment>
       
        <TodoHeader />
        <TodoCounter/>
        <TodoSearch />

        <TodoList>
          {todos.map((todo) => (
            <TodoItem 
            key={todo.text}
            title={todo.title}
            text={todo.text}
            completed={todo.completed}
             />
          ))}
        </TodoList>

        <CreateTodoButton />
      </React.Fragment>
    </div>
  );
}

export default App;
