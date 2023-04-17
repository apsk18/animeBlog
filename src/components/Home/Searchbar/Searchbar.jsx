import React from 'react'
import './styles.css'
const Searchbar = ({formSubmit,value,handleSearchKey,clearSearch}) => {
  return (
    <div className='searchbar-wrap'>
<form onSubmit={formSubmit}>
<input type="text" 
 placeholder='Search anime' 
 value={value}
 onChange={handleSearchKey} 
 />
 {value && <span onClick={clearSearch}>X</span>}

<button>Go</button>
        </form>
      
    </div>
  )
}

export default Searchbar
