import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="flex flex-col w-full max-w-screen-1xl items-center justify-center mx-auto">
      <img src={logo} alt="" />
    </header>
  )
}
