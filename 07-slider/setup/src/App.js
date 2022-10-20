import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0)
  const { id, image, name, title, quote } = data[index]

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }


  // setTimeout(() => {
  //   nextPerson()
  // }, 3000);

  return <>
    <div className="title">
      <h2><span>/</span> Reviews</h2>
    </div>
    <article className="section-center">
      <button className="prev" onClick={prevPerson}>
        <FiChevronLeft />
      </button>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className="text">{quote}</p>
      <button className="next" onClick={nextPerson}>
        <FiChevronRight />
      </button>
      <span className="icon">
        <FaQuoteRight />
      </span>
    </article>
  </>;
}

export default App;