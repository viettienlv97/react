import { useState } from 'react'
import OptionInput from './OptionInput'
import DestinationInput from './DestinationInput'
import DateRange from '../daterange/DateRange'

const SearchForm = () => {
  const [showDateRange, setShowDateRange] = useState(false)
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })

  const getDate = (date) => {
    const yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    let dd = date.getDate()
    if (dd < 10) dd = `0${dd}`
    if (mm < 10) mm = `0${mm}`
    return `${dd}/${mm}/${yyyy}`
  }
  return (
    <form>
      <h1 className='text-dark fw-bold'>Search</h1>
      <DestinationInput />
      <div className='mb-3 d-flex flex-column position-relative'>
        <label
          htmlFor='checkin-input'
          className='fs-5 mb-2'
        >
          Check-in Date
        </label>
        <div
          role='button'
          className='bg-light border border-dark p-2'
          onClick={() => setShowDateRange((pre) => !pre)}
        >
          <span className='fw-600'>
            {getDate(selectionRange.startDate) +
              ' to ' +
              getDate(selectionRange.endDate)}
          </span>
        </div>
        {showDateRange && (
          <div className='position-absolute top-100'>
            <DateRange
              setShowDateRange={setShowDateRange}
              selectionRange={selectionRange}
              setSelectionRange={setSelectionRange}
            />
          </div>
        )}
      </div>
      <div className='mb-3 '>
        <label className='fs-5 mb-2'>Option</label>
        <OptionInput
          id='min-price-input'
          title='Min price per night'
          type={'number'}
        />
        <OptionInput
          id='max-price-input'
          title='Max price per night'
          type={'number'}
        />
        <OptionInput
          id='adult-input'
          title='Adult'
          type={'number'}
        />

        <OptionInput
          id='children-input'
          title='Children'
          type={'number'}
        />

        <OptionInput
          id='room-input'
          title='Room'
          type={'number'}
        />
      </div>
      <div className='mt-3'>
        <button className='border-none bg-primary w-100 text-light py-2'>
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm
