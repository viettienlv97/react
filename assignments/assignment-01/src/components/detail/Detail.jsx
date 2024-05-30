import detail from '../../../data/detail.json'
import DetailTitle from './DetailTitle'
import DetailImages from './DetailImages'
import DetailDesc from './DetailDesc'

const Detail = () => {
  return (
    <section id='detail'>
      <div className='container mt-3'>
        <DetailTitle detail={detail} />
        <DetailImages detail={detail} />
        <DetailDesc detail={detail} />
      </div>
    </section>
  )
}

export default Detail
