import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import image1 from '../../assets/menu/salad-bg.jpg'
const Recomend = () => {
    return (
        <div>
            <SectionTitle
                SubHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <Swiper
                slidesPerView={3.5}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold text-center">Chiness Salad</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold text-center">Chiness Salad</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold text-center">Chiness Salad</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold text-center">Chiness Salad</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold text-center">Chiness Salad</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold text-center">Chiness Salad</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}


export default Recomend