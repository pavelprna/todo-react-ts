import { FC, MouseEventHandler } from 'react'

interface IInputFieldProps {
  value?: string
  updateValue: (value: string) => void
  handleSubmit: MouseEventHandler<HTMLButtonElement>
}

export const InputField: FC<IInputFieldProps> = ({
  handleSubmit,
  value,
  updateValue,
}) => {
  return (
    <form action="" className="form">
      <label htmlFor="" className="form__label">
        <input
          type="text"
          className="form__input"
          value={value}
          onChange={(e) => updateValue(e.target.value)}
        />
        <button type="button" className="form__submit" onClick={handleSubmit}>
          add todo
        </button>
      </label>
    </form>
  )
}
