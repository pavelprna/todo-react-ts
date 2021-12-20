import React from 'react'
import { SearchField } from '../SearchField/SearchField'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">ToDo React App</h1>
      </header>
      <main className="main">
        <SearchField />
        <section className="todo">
          <ul className="todo__list">
            <li className="todo__item">
              <input type="checkbox" className="todo__checkbox" />
              <p className="todo__text"></p>
              <button className="todo__button todo__button_type_remove">
                &times;
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
