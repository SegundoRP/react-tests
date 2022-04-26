import React from 'react';
import '../TodoItem.css';

const TodoItem = (props) => {
  const onComplete = () => {
    alert('Ya completaste el todo ' + props.text);
  };

  const onDelete = () => {
    alert('Borraste el todo ' + props.text);
  };

  return (
    <li className="TodoItem">
      <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
      {/* En onclick solo llamas a la funcion sin hacer arrow function porque la funcion ya es una arrow, si tuviera parametros la funcion alli si pondria como una arrow function */}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span onClick={onDelete} className="Icon Icon-delete">X</span>
    </li>
  )
}

export default TodoItem
