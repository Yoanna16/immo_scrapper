import React from 'react'

const Search = ({
    searchInput, 
    setSearchInput,
    setFiltered,
    items
}) =>  {



    //Prevent page reload when submitting the form 
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // search item in data
    const searchItem = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchInput);
        if (searchInput) {
            const filteredItems = items.filter((item) =>
                Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()))
            setFiltered(filteredItems)
            console.log(filteredItems)
        } else {
            setFiltered(items)
        }
    }


  return (
    <>
            <form onSubmit={handleSubmit} className='form'>
            <input
                type='search'
                name='search'
                id='search'
                placeholder='Search for repository'
                autoComplete='off'
                onChange={(e) => searchItem(e.target.value)}
            />
        </form>
    </>
  )
}

export default Search