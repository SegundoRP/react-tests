import React from 'react';
import TodoCounter from './Components/TodoCounter'
import TodoSearch from './Components/TodoSearch'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'
import CreateTodoButton from './Components/CreateTodoButton'
// import './App.css';

const todos = [
  { text: 'Practicar React', completed: false},
  { text: 'Practicar Rails', completed: false},
  { text: 'Practicar Javascript', completed: false}
]

function App() {
  return (
    <React.Fragment>
      {/* React.Fragment tambien puede ponerse etiquetas vacias <></> la razon es que se envia una etiqueta por componentey deberia ir un div
      pero poner un div hace que tengas que poner mas divs para ordenar la pagina entonces para evitar eso se usa esto */}
      <TodoCounter />

      <TodoSearch />

      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
          // cuando renderizas componentes de listas(arrays) debes poner la propiedad key y react identifique cual es cual de la lista y evite renders innecesarios
        ))}
      </TodoList>
      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
