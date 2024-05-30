import city from '../../../data/city.json'

const CityList = () => {
  const cityList = [...city]

  return (
    <section id='city-list'>
      <div className='container mb-4 position-relative'>
        <div className='w-100 m-0 p-0'>
          <div className='row'>
            {cityList.map((city, index) => {
              return (
                <div
                  key={index}
                  className='col-4'
                  style={{ height: '250px' }}
                >
                  <div
                    className='rounded h-100 position-relative'
                    style={{
                      backgroundImage: `url(${city.image})`,
                      backgroundSize: '100% 250px',
                      backgroundRepeat: 'no-repeat',
                      zIndex: 0
                    }}
                  >
                    <div
                      className='position-absolute bottom-0 ms-3'
                      style={{ zIndex: 1 }}
                    >
                      <h2 className='text-light fw-bold'>{city.name}</h2>
                      <p className='text-light fw-bold'>{city.subText}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CityList
