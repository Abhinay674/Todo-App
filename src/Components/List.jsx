import React from 'react'
import ListItems from './ListItems'

function List({lists,handledelete}) {
  return (
    <>
      {lists.map((list) => (
        <ListItems key={list.id} list={list} handledelete={handledelete}/>
      ))}
    </>
  )
}

export default List
