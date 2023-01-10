import React from 'react'
import { useState } from 'react'

function TodoForm({handleadd}) {

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    if(text !== ''){
      const newFeedback = {
        text,
      }
      handleadd(newFeedback);
    setText('');
    }
    e.preventDefault();
  }
  return (
    <header>
      <form onSubmit={handleSubmit} >
          <input type='text' className='input' placeholder='Enter a Task' onChange={handleChange} value={text} />
        </form>
    </header>
  )
}

export default TodoForm
