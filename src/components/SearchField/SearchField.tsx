import { FC } from 'react'

export const SearchField: FC = () => {
  return (
    <form action="" className="form">
      <label htmlFor="" className="form__label">
        <input type="text" className="form__input" />
        <button className="form__submit">add todo</button>
      </label>
    </form>
  )
}
