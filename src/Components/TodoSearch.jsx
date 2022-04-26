import React from 'react';
import '../TodoSearch.css';

const TodoSearch = () => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <input onChange={onSearchValueChange} className="TodoSearch" placeholder="Search" />
    // onChange={(event) => console.log(event.target.value)} Puede ir solo esto aqui en vez de la arrow function de arriba
  )
}

export default TodoSearch
