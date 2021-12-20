import { ITodo, removeTodo } from '../../store/todoSlice'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className="todo__item">
      <input
        type="checkbox"
        className="todo__checkbox"
        checked={todo.complited}
      />
      <p className="todo__text">{todo.text}</p>
      <button
        className="todo__button todo__button_type_remove"
        onClick={removeTodo}
      >
        &times;
      </button>
    </li>
  )
}
