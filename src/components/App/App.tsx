import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import { InputField } from '../InputField/InputField'
import { TodoList } from '../TodoList/TodoList'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }
  return (
    <>
      <header className="header">
        <h1 className="header__title">ToDo React App</h1>
      </header>
      <main className="main">
        <InputField handleSubmit={addTask} value={text} updateValue={setText} />
        <TodoList />
      </main>
    </>
  )
}

export default App
