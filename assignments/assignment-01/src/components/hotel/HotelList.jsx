import list from '../../../data/hotel_list.json'

const HotelList = () => {
  const hotelList = [...list]

  return (
    <section id='hotel-list'>
      <div className='container mb-5'>
        <h3 className='fw-bold mb-3'>Homes guests love</h3>
        <div className='row'>
          {hotelList.map((hotel, index) => {
            return (
              <div
                key={index}
                className='col-3'
              >
                <div className='h-100'>
                  <img
                    src={hotel.image_url}
                    style={{
                      height: '250px',
                      width: '100%',
                      objectPosition: 'center',
                      objectFit: 'cover'
                    }}
                  />
                  <div className='fw-bold mt-1 text-purple'>
                    <u>{hotel.name}</u>
                  </div>
                  <div className='text-gray'>{hotel.city}</div>
                  <div className='fw-bold'>Starting from ${hotel.price}</div>
                  <div>
                    <span className='bg-secondary text-light me-2 px-1 fs-7'>
                      {hotel.rate}
                    </span>
                    <span className='fs-7'>{hotel.type}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HotelList
