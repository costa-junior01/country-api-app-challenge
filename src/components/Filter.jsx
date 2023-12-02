import React from 'react'
import { useState} from 'react';

const Filter = ({onSelect,onSearch}) => {
  const [input, setInput] = useState("");
 
    const selectHandler = (e) => {
      const regionName = e.target.value;
      onSelect(regionName);
      console.log("Selecionado: ", regionName)
    };

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <section className='filter'>
        <form onSubmit={submitHandler} className='form-control'>
            <input type='search' 
            name='search' 
            id='search' 
            placeholder='Search for a country'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        </form>

        <div className='region-filter'>
            <select onChange={selectHandler} name='select' id='select' className='select'>
            <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
         </div>              
    </section>
  )
}

export default Filter