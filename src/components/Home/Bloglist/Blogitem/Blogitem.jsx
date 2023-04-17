import React from 'react'
import './styles.css'
import Chip from '../../../common/Chip/Chip'
import { Link } from 'react-router-dom'
const Blogitem = ({
     blog: {
     id,
     description,
     title,
     createdAt,
     authorName,
     category,
     cover,
     
    },    
    }) => {
  return (
    <div className='blogItem-wrap'>
      <img src={cover} alt='cover' className='blogItem-cover'/>
      <Chip label={category}/>
      <h3>{title}</h3>
      <p className='blogitem-desc'>{description}</p>

      <footer>
        <div className='blogItem-author'>
        <h6>{authorName} </h6> 
        &nbsp;   
        <p>{createdAt}</p>
        </div>
       

       <Link className='blogitem-link' to={`/blog/${id}`}> Read more &rarr;</Link>

      </footer>

    </div>
  )
}

export default Blogitem
