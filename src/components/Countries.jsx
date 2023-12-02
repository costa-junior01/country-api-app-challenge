import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// const url = 'https://restcountries.com/v3.1/all' //versão 3.1
const url = 'https://restcountries.com/v2/all' //versão 2

const Countries = () => {

    const [countries, setCountries] = useState ([])
    
    useEffect(() => {
    const fetchCountriesDatas = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);      
            console.log(data)
           }
   
        fetchCountriesDatas();
     }, [])

     const removeCountry = (numericCode) =>{
        const newCountry = countries.filter((country) => country.numericCode !== numericCode)
     }

  return (
    <>
        <section className='grid'>
        {countries.map((country) => {
            const {
            numericCode, 
            name, 
            population, 
            region, 
            capital, 
            flag} = country

            return <article key={numericCode}>
                        <div>                  
                            <img src={flag} alt={name}/>
                                <div className='details'>
                                    {/* <h3>{name.common}</h3> */} {/*Versao 3.1 */}
                                    <h3>{name}</h3> {/*Versao 2 */}
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                        <div className='buttons'>
                                            <Link  to={`/country/${numericCode}`}   className='btn'>Learn More</Link>
                                        </div>
                                </div>
                        </div>
                    </article>
        })}
        </section>
    </>
  )  
}

export default Countries