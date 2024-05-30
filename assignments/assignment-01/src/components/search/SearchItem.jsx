import { Link } from 'react-router-dom'

const SearchItem = ({ search }) => {
  return (
    <div className='border border-gray border-2 rounded-2 mb-4 p-2'>
      <div className='d-flex'>
        <img
          src={search.image_url}
          alt={search.name}
          width={200}
          height={200}
          className='me-3'
        />
        <div className='row w-100'>
          <div className='col-8'>
            <div className=''>
              <h4 className='fw-bold text-primary'>{search.name}</h4>
              <div className='mt-2'>{search.distance} from center</div>
              <div className='mt-2'>
                <span className='bg-green p-1 rounded-2 text-light'>
                  {search.tag}
                </span>
              </div>
              <div className='fw-bold mt-1'>{search.description}</div>
              <div className='mt-1'>{search.type}</div>

              {search.free_cancel && (
                <>
                  <div className='fw-bold text-green mt-1'>
                    Free cancellation
                  </div>
                  <div className='text-green mb-1'>
                    You can cancel later, so lock in this greate price today!
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='col-4'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <div className='d-flex justify-content-between'>
                <div className='fw-bold'>{search.rate_text}</div>
                <div>
                  <span className='bg-secondary text-light p-1'>
                    {search.rate}
                  </span>
                </div>
              </div>
              <div>
                <div className='text-end'>
                  <span className='fs-5 fw-600'>${search.price}</span>
                </div>
                <div className='text-gray text-end fs-7'>
                  Includes tax and fees
                </div>
                <div className='w-100 mt-2'>
                  <Link to={'/detail'}>
                    <button className='w-100 btn bg-primary text-light fw-600 py-2'>
                      See availability
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
