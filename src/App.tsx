import { BrowserRouter } from 'react-router-dom'

import { TaskContextProvider } from './contexts/TaskContext'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <TaskContextProvider>
        <Router />
      </TaskContextProvider>
    </BrowserRouter>
  )
}
