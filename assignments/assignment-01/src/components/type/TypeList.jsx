import list from '../../../data/type.json'

const TypeList = () => {
  const typeList = [...list]
  return (
    <section id='type-list'>
      <div className='container mb-5'>
        <h3 className='fw-bold mb-3'>Browse by property type</h3>
        <div className='row'>
          {typeList.map((type, index) => {
            return (
              <div
                key={index}
                className='col-custom'
              >
                <div>
                  <div
                    className='rounded-top-3'
                    style={{
                      height: '150px',
                      backgroundImage: `url(${type.image})`,
                      backgroundSize: '100% 150px',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                  <div className='fw-bold mt-1'>{type.name}</div>
                  <small className='text-gray'>{type.count} hotels</small>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TypeList
