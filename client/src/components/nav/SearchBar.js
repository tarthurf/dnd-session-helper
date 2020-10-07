import React, { useState } from 'react';
import useForm from '../../utils/useForm';
import axios from 'axios';

// this searchbar component is not in use.
// TODO: make switch statement to render the proper view for searched items

const SearchBar = props => {

  const [ searchItem, setSearchItem ] = useState()

  const search = (query, name) => {
    let obj;
    query = values.query;
    name = values.name.trim();
    axios.get(`https://www.dnd5eapi.co/api/${query}/${name}`)
      .then(res => {
        console.log(res.data)
        obj = res.data;
      }
    )
    setSearchItem(obj);
  }

  const { values, handleChange, handleSubmit } = useForm(
    {
      query: "equipment",
      name: "",
    },
    search
  )

  return (
    <div>
      <form className='text-black'
        onSubmit={handleSubmit}
      >
        <select className='border-black'
          name="query"
          onChange={handleChange}
          value={values.query}
        >
          <option value="equipment">Equipment</option>
          <option value="spells">Spells</option>
        </select>

        <input className='border-black'
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        <button className='text-white'
          type="submit"
        >
          Search
      </button>
      </form>
      <div className="absolute right-0 mt-3 flex items-center bg-black text-green-500">
      </div>
    </div>
  )
}

export default SearchBar;