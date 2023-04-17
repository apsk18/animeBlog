import React from 'react'
import Blog from '../../../pages/Blog/Blog'
import Blogitem from './Blogitem/Blogitem'
import './styles.css'

const Bloglist = ({blogs}) => {
  return (
    <div className='bloglist-wrap'>
        {
        blogs.map((blog)=>(
        <Blogitem blog={blog} 
        key={blog.id}/>
        ))}
      
    </div>
  )
}

export default Bloglist
