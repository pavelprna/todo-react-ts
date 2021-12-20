import React from 'react'
import { SearchField } from '../InputField/InputField'
import { TodoList } from '../TodoList/TodoList'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">ToDo React App</h1>
      </header>
      <main className="main">
        <SearchField />
        <TodoList />
      </main>
    </>
  )
}

export default App
