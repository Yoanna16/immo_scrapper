import React from 'react'

const Select = () => {
    const locations = [
        {
            name: 'Halle',
            desc:'Halle'
        },
        {
            name: 'Pritzwalk',
            desc:'Pritzwalk'
        },
        {
            name: 'Greifswald',
            desc:'Greifswald'
        },
        {
            name: 'Ravensburg',
            desc:'Ravensburg'
        },
        {
            name: 'Zittau',
            desc:'Zittau'
        },
    ]

  return (
    <div>
        <form>
        <label for="country">Location:</label>
        <select name="country" id="country">
            {
                locations.map((item) => {
                    return (
                        <option value="India">{item.name}</option>
                    )
                })
            }
        </select>
    </form>
    </div>
  )
}

export default Select
