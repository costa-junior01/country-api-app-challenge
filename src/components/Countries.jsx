import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import API_URL from '../api/ApiUrl'

const url = 'https://restcountries.com/v3.1/all' //versão 3.1
// const url = 'https://restcountries.com/v2/all' //versão 2

const Countries = () => {

    const [countries, setCountries] = useState ([])
    const [isLoading, setIsLoading] = useState (false)
    
    useEffect(() => {
    const fetchCountriesDatas = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);      
            console.log(data)
           }
   
        fetchCountriesDatas();
     }, [])

     const getContriesOnSelect = async(region) =>{
        searchCountry(true);
        try {
            const res = await fetch(`${API_URL}/region/${region}`);
            const data = await res.json();
            setCountries(data);
            setIsLoading(false);
          } catch (error) {
            console.log(error)
            setIsLoading(false);
          }
     }

     const searchCountry = async(countryName) => {
        setIsLoading(true);
        try {
            const res = await fetch(`${API_URL}/name/${countryName}`);
            const data = await res.json();
            setCountries(data);
            setIsLoading(false);
          } catch (error) {
            console.log(error)
            setIsLoading(false);
          }
     }



  return (
    <>
        <Filter onSearch={searchCountry} onSelect={getContriesOnSelect}/>
        <section className='grid'>
        {
        isLoading ? <>Loading...</> :
        countries?.length > 0 ?
        countries?.map((country) => (
             <article key={country?.numericCode}>
                        <div>                  
                            <img src={country?.flags?.svg} alt={country[0]?.flags?.alt}/>
                                <div className='details'>
                                    {/* <h3>{name.common}</h3> */} {/*Versao 3.1 */}
                                    <h3>{country?.name?.common}</h3> {/*Versao 2 */}
                                    <h4>Population: <span>{country?.population}</span></h4>
                                    <h4>Region: <span>{country?.region}</span></h4>
                                    <h4>Capital: <span>{country?.capital}</span></h4>
                                        <div className='buttons'>
                                            <Link  to={`/country/${country?.ccn3}`}   className='btn'>Learn More</Link>
                                        </div>
                                </div>
                        </div>
                    </article>
                    )) : <>Not Found</>


        }
        </section>
    </>
  )  
}

export default Countries