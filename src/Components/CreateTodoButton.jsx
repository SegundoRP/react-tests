import React from 'react';
import '../CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const onClickButton = (msg) =>{
    alert(msg);
  };

  return (
    <button className="CreateTodoButton" onClick={() => onClickButton('Aqui se deberia abrir el modal')} >+</button>
    // onClick={() => alert('Aqui se deberia abrir el modal') podria ir esto nomas y se haria pero en video dicen que es mas limpio hacerlo aparte
  )
}

export default CreateTodoButton
