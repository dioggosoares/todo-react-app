import { Outlet } from 'react-router-dom'

// IMPORT COMPONENTS
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <>
      <div className="flex w-full h-[12.5rem] bg-gray-700">
        <Header />
      </div>
      <Outlet />
    </>
  )
}
