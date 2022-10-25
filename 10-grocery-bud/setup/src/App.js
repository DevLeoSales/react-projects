import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [groceryList, setGroceryList] = useState(getLocalStorage())
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(groceryList))
  }, [groceryList])

  const clearAllItems = () => {
    showAlert(true, 'danger', 'list deleted')
    setGroceryList([])
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setGroceryList(groceryList.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const currentItem = groceryList.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(currentItem.title)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setGroceryList(
        groceryList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        }))
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setGroceryList([...groceryList, newItem])
      setName('')
    }
  }

  return <section className='section-center' >
    <section className='grocery-form'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={groceryList} />}
      <h3>Grocery Bud</h3>
    </section>
    <form className="form-control" onSubmit={handleSubmit}>
      <input placeholder='e.g. eggs' type="text" className='grocery' value={name} onChange={(e) => setName(e.target.value)} />
      <button className="submit-btn" type='submit'>
        {isEditing ? 'edit' : 'submit'}
      </button>
    </form>
    {groceryList.length > 0 && (
      <div className='grocery-container'>
        <List groceryList={groceryList} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearAllItems}>clear all</button>
      </div>
    )}
  </section>
}

export default App
