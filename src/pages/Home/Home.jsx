import React, { useState } from 'react'
import Header from '../../components/Home/Header/Header'
import Searchbar from '../../components/Home/Searchbar/Searchbar'
import Bloglist from '../../components/Home/Bloglist/Bloglist'
import { blogList } from '../../config/data'
import EmptyList from '../../components/common/EmptyList/EmptyList'

const Home = () => {
  const [blogs,setBlogs]=useState(blogList);
  const [searchKey,setSearchKey] = useState('');

  const handleSearchBar= (e)=>{
    e.preventDefault();
    handleSearchResults();
  }
  const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter((blog)=>
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  }
  const handleClearSearch=() => {
    setBlogs(blogList)
    setSearchKey('');
  }

  return (
    <div>
     
<Header/>
<Searchbar
 value={searchKey}
clearSearch={handleClearSearch}
 formSubmit={handleSearchBar} 
handleSearchKeys={(e)=>setSearchKey(e.target.value)}/>

{!blogs.length? <EmptyList/>:<Bloglist blogs={blogs}/>}

    </div>
  )
}

export default Home
