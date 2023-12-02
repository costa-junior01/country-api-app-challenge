import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import API_URL from '../api/ApiUrl'
import '../country.css'


const Country = () => {

  const [country, setCountry] = useState ([])
  const {id} =useParams();
    
    useEffect(() => {
    const fetchCountryDatas = async () => {
            const response = await fetch(`${API_URL}/alpha/${id}`);
            const data = await response.json();
            setCountry(data);      
            console.log("Sao detahes do pais: ",data, id)
           }
   
        fetchCountryDatas();
     }, [id])

  return (
    <>
        <section className='country'>
        <Link to={"/"}  className='btn-back'> 
        <i class="uil uil-arrow-left"></i> Back to Home
        </Link>
            <article key={id}>
              <div className='country-inner'>
                <img src={country[0]?.flags?.png} alt={country[0]?.flags?.alt} />
                <div className='country-details'>
                  <div >
                    <h2>{country[0]?.name?.common}</h2>
                    <h4>Native Name: <span>{country[0]?.name?.nativeName?.sqi?.common}</span></h4>
                    <h4>Capital: <span>{country[0]?.capital[0]}</span></h4>
                    <h4>Population: <span>{country[0]?.population}</span></h4>
                    <h4>Region: <span>{country[0]?.region}</span></h4>
                    <h4>Area: <span>{country[0]?.area}</span></h4>
                  </div>

                  <div>
                    <h4>Sub Region: <span>{country[0]?.subregion}</span></h4>
                    <h4>Time Zone: <span>{country[0]?.timezones}</span></h4>
                    <h4>Top Level of Domain: <span>{country[0]?.tld}</span></h4>
                  </div>
                </div>

               
                 {/* <div className='borders'>
                    <h3>Border Countries:   
                        {country[0]?.borders.map((border) => {
                          return(
                            <ul key={border}><li>{border}</li></ul>
                          ) 
                        }
                      )} */}
                                     
                
              </div>
              </article>
        </section>
    </>
  )
}

export default Country