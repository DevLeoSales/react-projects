import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ groceryList }) => {
  return <>
    <section className="grocery-container">
      {groceryList.map((item, index) => {
        return <>
          <p key={index}>{item}</p>
          <button className="edit-btn"><FaEdit /></button>
          <button className="delete-btn"><FaTrash /></button>
        </>
      })}

      <button className="clear btn">clear all</button>
    </section>
  </>
}

export default List
