const DetailDesc = ({ detail }) => {
  return (
    <div className='row mb-5'>
      <div className='col-9'>
        <h4 className='fw-bold my-3'>{detail.title}</h4>
        <p>{detail.description}</p>
      </div>
      <div className='col-3'>
        <div className='bg-sky h-100 p-3'>
          <div className='fw-bold text-gray fs-5'>
            Perfect for a 9-night stay!
          </div>
          <div className='mt-4'>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </div>
          <div className='fs-5 mt-4'>
            <span className='fw-bold'>${detail.nine_night_price} </span>
            <span className='text-gray'>(9 nights)</span>
          </div>
          <div>
            <button className='btn bg-primary fw-bold text-light w-100 mt-4'>
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailDesc
