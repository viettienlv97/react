import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { miniImageUrl } from '../../services/apiService'
import 'swiper/css'
import { useContext } from 'react'
import MovieContext from '../../store/movie-context'

const SwiperCarousel = ({ slider, imgType, listId }) => {
  const { selectMovie } = useContext(MovieContext)
  const isPoster = imgType === 'poster_path' ? true : false
  const imgSize = {
    width: isPoster ? 170 : 250,
    height: isPoster ? 250 : 150
  }
  return (
    <Swiper
      className='mySwiper position-relative'
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: isPoster ? 10 : 7,
          spaceBetween: 10
        }
      }}
    >
      {slider.map((item) => {
        return (
          <SwiperSlide
            role='button'
            key={item.id}
            onClick={() => selectMovie({ movie: item, listId })}
          >
            <img
              className='swiper-img'
              src={`${miniImageUrl}${
                imgType === 'poster_path'
                  ? item.poster_path
                  : item.backdrop_path
              }`}
              alt=''
              width={imgSize.width}
              height={imgSize.height}
              style={{ objectFit: 'cover' }}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperCarousel
