import { FC } from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import { useAppSelector } from '../../hooks/hooks'

export const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.todos)

  return (
    <section className='todo'>
      <ul className='todo__list'>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </section>
  )
}
