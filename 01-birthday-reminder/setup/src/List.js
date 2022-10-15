import React from 'react';
import data from './data';


const List = () => {
  const [people, setPeople] = React.useState(data)
  const qtdeAniversariosHoje = people.length
  return <>
    <h2>{qtdeAniversariosHoje} aniversários hoje</h2>
    {
      people.map((person) => {
        const { id, name, age, image } = person
        return (
          <div key={id} className='item' >
            <section className='person'>
              <img src={image} />
              <section>
                <h4>{name}</h4>
                <p>{age} anos</p>
              </section>
            </section>
          </div>
        )
      })
    }
    <button className='btn' onClick={() => setPeople([])}>Limpar tudo</button>
  </>;
};

export default List;
