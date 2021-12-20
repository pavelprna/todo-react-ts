import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { FC } from 'react'
import { ITodo } from '../../store/todoSlice'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList: FC = () => {
  const todos = useSelector<RootState, ITodo[]>(
    (state) => state.todos.todos
  )
  return (
    <section className="todo">
      <ul className="todo__list">{todos.map((todo) => <TodoItem todo={todo} />)}</ul>
    </section>
  )
}
