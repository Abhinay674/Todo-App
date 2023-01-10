import React from 'react'
import {FaTimes} from 'react-icons/fa';

function ListItems({list,handledelete}) {
  return (
    <div className='card'>
         {list.text} 
      <button className='btn' onClick={() => handledelete(list.id)} ><FaTimes className='icon' color='red'/></button>
    </div>
  )
}

export default ListItems
