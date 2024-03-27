import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
 import image1 from '../../assets/home/slide1.jpg'
 import image2 from '../../assets/home/slide2.jpg'
 import image3 from '../../assets/home/slide3.jpg'
 import image4 from '../../assets/home/slide4.jpg'
 import image5 from '../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <p className='text-3xl -mt-12 text-white text-center drop-shadow-lg'>SALAD</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <p className='text-3xl -mt-12 text-white text-center drop-shadow-lg'>SOUP</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                    <p className='text-3xl -mt-12 text-white text-center drop-shadow-lg'>PIZZAS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                    <p className='text-3xl -mt-12 text-white text-center drop-shadow-lg'>DEASSERTS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="" />
                    <p className='text-3xl -mt-12 text-white text-center drop-shadow-lg'>CACE</p>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default Category