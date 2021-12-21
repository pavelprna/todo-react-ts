import { ITodo, removeTodo, toggleTodo } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'
import './TodoItem.css'
import { TrashButton } from './TrashButton/TrashButton'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch()
  return (
    <li className='todo__item'>
      <input
        type='checkbox'
        className='todo__checkbox'
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo({ id: todo.id }))}
      />
      <p className={`todo__text ${todo.completed && 'todo__text_completed'}`}>
        {todo.text}
      </p>
      <button
        className='todo__button todo__button_type_remove'
        onClick={() => dispatch(removeTodo({ id: todo.id }))}
      >
        <TrashButton />
      </button>
    </li>
  )
}
