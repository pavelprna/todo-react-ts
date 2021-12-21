import React, { FormEventHandler, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, fetchTodos } from '../../store/todoSlice'
import { InputField } from '../InputField/InputField'
import { TodoList } from '../TodoList/TodoList'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const addTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(addTodo({ text }))
    setText('')
  }
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>ToDo React App</h1>
      </header>
      <main className='main'>
        <InputField handleSubmit={addTask} value={text} updateValue={setText} />
        <TodoList />
      </main>
    </>
  )
}

export default App
