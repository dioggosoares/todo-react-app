import { Outlet } from 'react-router-dom'

// IMPORT COMPONENTS
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <>
      <header className="flex p-20 bg-gray-700">
        <Header />
      </header>
      <Outlet />
    </>
  )
}
