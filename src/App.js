import React from 'react'
import { useState } from 'react'
import TodoForm from './Components/TodoForm';
import {v4 as uuidv4} from 'uuid';
import List from './Components/List';

function App() {
  const [lists, setLists] = useState([]);

  const addFeedback = (newFeedback) => {
    newFeedback.id =uuidv4();
    setLists([...lists,newFeedback]);
  }

  const deleteFeedback =(id) => {
    if(window.confirm('Are you sure you want to delete?'))
      setLists(lists.filter((list) => list.id !== id ));
  }
  return (
    <>
    <TodoForm handleadd={addFeedback} />
      <div className='container'>
        <List lists={lists} handledelete={deleteFeedback} />
      </div>
    <h1 className='title' >Todo App</h1>
    </>
  )
}

export default App
