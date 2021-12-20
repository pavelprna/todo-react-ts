import { createSlice } from '@reduxjs/toolkit'

export interface ITodo {
  id: number
  text: string
  complited: boolean
}

interface ITodoState {
  todos: ITodo[]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  } as ITodoState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        complited: false,
      })
    },
    removeTodo(state, action) {},
    toggleTodo(state, action) {},
  },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
