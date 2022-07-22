import { Route, Routes } from 'react-router-dom'

// IMPORT LAYOUTS
import { DefaultLayout } from './layout/DefaultLayout'

// IMPORT PAGES
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
