import { FC, FormEventHandler } from 'react'

interface IInputFieldProps {
  value?: string
  updateValue: (value: string) => void
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export const InputField: FC<IInputFieldProps> = ({
  handleSubmit,
  value,
  updateValue,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="" className="form__label">
        <input
          type="text"
          className="form__input"
          value={value}
          onChange={(e) => updateValue(e.target.value)}
        />
        <button type="submit" className="form__submit" disabled={!value}>
          add todo
        </button>
      </label>
    </form>
  )
}
