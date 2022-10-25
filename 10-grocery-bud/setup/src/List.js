import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ groceryList, editItem, removeItem }) => {
  return <>
    <section className="grocery-list">
      {groceryList.map((item) => {
        const { id, title } = item
        return <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>
          <div className="btn-container">
            <button type='button' className="edit-btn" onClick={() => editItem(id)}><FaEdit /></button>
            <button type='button' className="delete-btn" onClick={() => removeItem(id)}><FaTrash /></button>
          </div>
        </article>
      })}
    </section>
  </>
}

export default List
