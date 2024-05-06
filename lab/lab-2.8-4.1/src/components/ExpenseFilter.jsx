import {useState} from 'react'

const ExpenseFilter = ({filter, handleChangeFilter}) => {
  const yearFilter = [...new Set(filter), 2024]
  const [selectedYear, setSelectedYear] = useState(null)
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='text-light fw-bold'>Filter by year</div>
        <div className='dropdown'>
          <button
            className='btn btn-light dropdown-toggle px-5 fw-bold'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {selectedYear ?? 'Select'}
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            {yearFilter &&
              yearFilter.map((year) => {
                return (
                  <li
                    key={year}
                    onClick={(e) => {
                      if (year === selectedYear) {
                        setSelectedYear(null)
                        handleChangeFilter(null)
                      } else {
                        setSelectedYear(year)
                        handleChangeFilter(year)
                      }
                    }}
                  >
                    <a
                      className={`dropdown-item ${
                        year === selectedYear ? 'active' : ''
                      }`}
                      href='#'
                    >
                      {year}
                    </a>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExpenseFilter
