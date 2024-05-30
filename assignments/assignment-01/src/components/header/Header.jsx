import styles from './Header.module.css'
import Search from './Search'
const Header = () => {
  return (
    <header className='bg-secondary position-relative pt-3 mb-5'>
      <div className='container text-light pb-10'>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className='bg-primary border-none text-light p-2'>
          Sign in / Register
        </button>
      </div>
      <Search />
    </header>
  )
}

export default Header
