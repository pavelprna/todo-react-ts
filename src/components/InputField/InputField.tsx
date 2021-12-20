import { FC } from 'react'
import { addTodo } from '../../store/todoSlice'

export const SearchField: FC = () => {
  return (
    <form action="" className="form">
      <label htmlFor="" className="form__label">
        <input type="text" className="form__input" />
        <button className="form__submit" onClick={addTodo}>
          add todo
        </button>
      </label>
    </form>
  )
}
