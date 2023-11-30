import React from 'react'
import { useEffect, useState } from 'react'

// const url = 'https://restcountries.com/v3.1/all' //versao 3.1
const url = 'https://restcountries.com/v2/all' //versa 2

const Countries = () => {

    const [countries, setCountries] = useState ([])

    const fetchData = async () => {
        //   try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
        //   } catch (error) {
            // console.error('Error fetching data:', error);
            // console.log(data)
           }

    useEffect(() => {
        fetchData();
     }, [])

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
            {/* subregion,  */}

            return <article key={numericCode}>
                    <div>                  
                        <img src={flag} alt={name.common}/>
                            <div className='details'>
                                {/* <h3>{name.common}</h3> */} {/*Versao 3.1 */}
                                <h3>{name}</h3> {/*Versao 2 */}
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                                {/* <h4>Subregion: <span>{subregion}</span></h4> */}
                            </div>
                    </div>
                </article>        
        })}
        </section>
    </>
  )  
}

export default Countries