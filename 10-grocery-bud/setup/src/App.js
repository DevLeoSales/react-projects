import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState('')
  const [groceryList, setGroceryList] = useState([])
  const [alert, setAlert] = useState(false)

  useEffect(() => {

  }, [groceryList]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setGroceryList([...groceryList, item])
    setItem('')
    // console.log(groceryList);
  }

  const handleChange = (e) => {
    const item = e.target.value
    setItem(item)
    // console.log(item);
  }

  return <>
    <section className='section-center' >
      <section className='grocery-form'>
        <h3>Grocery Bud</h3>
      </section>
      <form className="form-control" onSubmit={handleSubmit}>
        <input type="text" className='grocery' value={item} onChange={handleChange} />
        <button className="submit-btn" type='submit' >Submit</button>
      </form>
      <List groceryList={groceryList} />
    </section>
  </>
}

export default App
