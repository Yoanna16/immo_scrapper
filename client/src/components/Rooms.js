import React, { useEffect, useState } from 'react'
import { appData } from '../appData';
import Card from './Card';
import Search from './Search';


function Rooms() {
    const [ data, setData ] = useState([]);
    const [ filtered, setFiltered ]=useState([]);
    const [searchInput, setSearchInput] = useState('')



    useEffect(() => {
        setData(appData);
    }, [])

  return (
    <>
    <div className='div-search'>
        <Search 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        items={data}
        />
    </div>
    {
        searchInput.length > 1 ? 
        (    <section className='grid'>
        {
            filtered.map((offer) => {
                return (
                    <Card
                    name={offer.name}
                    price={offer.price}
                    location={offer.location}
                    />
                )
            })
        }
    </section>) : (
            <section className='grid'>
            {
                data.map((offer) => {
                    return (
                        <Card
                        name={offer.name}
                        price={offer.price}
                        location={offer.location}
                        />
                    )
                })
            }
        </section>
    )
    }

    </>
  )
}

export default Rooms