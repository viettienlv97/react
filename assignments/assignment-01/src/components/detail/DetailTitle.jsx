const DetailTitle = ({ detail }) => {
  return (
    <div className='d-flex justify-content-between mt-4'>
      <div>
        <h1 className='fw-bold fs-4'>{detail.name}</h1>
        <div className='mt-3'>
          <span className='fa fa-map-marker me-2'></span>
          <span className='fs-7'>{detail.address}</span>
        </div>
        <div className='text-primary mt-3 fw-600'>{detail.distance}</div>
        <div className='text-green mt-3 fw-600'>{detail.price}</div>
      </div>
      <div>
        <button className='btn btn-primary fw-bold px-3 py-2'>
          Reserve or Book Now!
        </button>
      </div>
    </div>
  )
}

export default DetailTitle
