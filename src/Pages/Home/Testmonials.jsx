import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testmonials = () => {

    const [Testmonials, setTestmonials] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setTestmonials(data)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                SubHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    Testmonials?.map(testmonial => <SwiperSlide key={testmonial._id}>
                        <div className='w-3/4 mx-auto text-center'>
                            <div className='flex justify-center mb-4'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={testmonial.rating}
                                    readOnly
                                />
                            </div>
                            <p>{testmonial.details}</p>
                            <p className='text-xl text-orange-400'>{testmonial.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default Testmonials