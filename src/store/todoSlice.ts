import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ITodo {
  id: number
  text: string
  completed: boolean
}

interface ITodoState {
  todos: ITodo[]
  status: string | null
  error: string | null
}

interface ITodoData {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      if (!response.ok) throw new Error('Не удалось загрузить данные с сервера')
      const data = await response.json()

      return data as ITodoData[]
    } catch (error) {
      return rejectWithValue('Сервер не отвечает')
    }
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  } as ITodoState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      payload.forEach(({ id, completed, title }) => {
        state.todos.push({
          id,
          completed,
          text: title,
        })
        state.status = 'resolved'
        state.error = null
      })
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.payload as string
    })
  },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
