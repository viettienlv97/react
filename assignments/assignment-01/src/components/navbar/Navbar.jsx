import navBar from '../../../data/navBar.json'

const Navbar = () => {
  const navList = [...navBar]

  return (
    <nav className='bg-secondary'>
      <div className='container text-light pt-2 pb-5'>
        <div className='d-flex justify-content-between mb-3'>
          <div>Booking Website</div>
          <div className='d-flex'>
            <button className='border-none me-2'>Register</button>
            <button className='border-none'>Login</button>
          </div>
        </div>
        <div className='d-flex'>
          {navList.map((item, index) => {
            return (
              <div
                key={index}
                className={`py-1 px-2  me-4 ${
                  item.active ? 'rounded-pill border' : ''
                }`}
              >
                <span className={`fa ${item.icon} me-2`}></span>
                <span>{item.type}</span>
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
