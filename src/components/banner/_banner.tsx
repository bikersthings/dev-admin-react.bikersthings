// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

export default () => {
    SwiperCore.use([Autoplay])
    return (
        <>
            <div className="container text-center  my-5">
                <div className="banner">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={20}
                        centeredSlides={true}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='swiper-banner'
                    >
                        <SwiperSlide>
                            <img src="/img/banner/ban1.png" alt="" width={'100%'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/img/banner/ban2.png" alt="" width={'100%'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/img/banner/ban3.png" alt="" width={'100%'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/img/banner/ban4.png" alt="" width={'100%'} />
                        </SwiperSlide>
                    </Swiper >
                </div>
            </div>
        </>
    )
}