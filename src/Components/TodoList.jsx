import React from 'react';
import '../TodoList.css';

const TodoList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
        {/* el props.children displaya lo que esta dentro de la etiqueta-componente TodoList en el App.js */}
      </ul>
    </section>
  )
}

export default TodoList
