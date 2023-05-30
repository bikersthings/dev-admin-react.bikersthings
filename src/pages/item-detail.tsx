import Gallery from '../components/gallery/_gallery';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import CardWtb from '../components/cards/_card_wtb';

export default () => {
    const item = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    return (
        <>
            <section id="detail-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12 mb-3">
                            <section id="detail-item-foto">
                                <Gallery />
                            </section>
                        </div>
                        <div className="col-lg-8 col-12">
                            <section id="detail-item-info">
                                <div className="item-title">
                                    AGV Pista GPRR
                                </div>
                                <div className="item-price">
                                    Rp. 16.000.000
                                </div>
                                <hr />
                                <div className="item-description">
                                    Deskripsi : <br />
                                    Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit, sed do <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    <br />
                                    <br />
                                    <ol>
                                        <li>
                                            orem ipsum dolor sit amet, consectetur adipiscing elit, se
                                        </li>
                                        <li>
                                            consequat. Duis a
                                        </li>
                                        <li>
                                            mmodo consequat. Dui
                                        </li>
                                        <li>
                                            lor in reprehenderit in voluptate velit esse <a href="">https://cillum.dolore.eu/fugiat/nulla</a>
                                        </li>
                                        <li>
                                            m dolor sit amet, consectetur
                                        </li>
                                    </ol>

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br />
                                    <br />
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no
                                    n proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                                <hr />
                                <div className="item-seller">
                                    <div className="row">
                                        <div className="col-lg-4 col-6">
                                            <a href="/toko-detail">
                                                <div className="item-seller-nama" >
                                                    <img src="https://dev.bikersthings.com/assets/img/logo/tab-icon.png" alt="" />
                                                    <b >RC b19 Store</b>
                                                    <img src="https://dev.bikersthings.com/assets/img/badge/verif.png" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            <div className="item-seller-lokasi">
                                                <i className="fas fa-map-marker-alt mr-1"></i> Jakarta Selatan
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller-sosmed">
                                    <div className="row">
                                        <div className="col-lg-3 col-6">
                                            <button className="btn btn-sosmed">
                                                <img src="https://dev.bikersthings.com/assets/img/sosmed/sosmed-wa.png" alt="" />
                                                Whats App
                                            </button>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <button className="btn btn-sosmed">
                                                <img src="https://dev.bikersthings.com/assets/img/sosmed/sosmed-line.png" alt="" />
                                                Line
                                            </button>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <button className="btn btn-sosmed">
                                                <img src="https://dev.bikersthings.com/assets/img/sosmed/sosmed-ig.png" alt="" />
                                                Instagram
                                            </button>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <button className="btn btn-sosmed">
                                                <img src="https://dev.bikersthings.com/assets/img/sosmed/sosmed-tele.png" alt="" />
                                                Telegram
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section >
            <section id="other-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" id='wts-item'>
                            <div className="wrapper head-section">
                                <div>
                                    Item lainnya di <b>RC b19 Store</b>
                                </div>
                                <div>
                                    Lihat Semua <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='swiper-wts'
                            >
                                {item.map((item: any, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <CardWtb />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className="col-lg-12" id="wtb-item">
                            <div className="wrapper head-section">
                                <div>
                                    Item lainnya yang mirip
                                </div>
                                <div>
                                    Lihat Semua <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='swiper-wts'
                            >

                                {item.map((_, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <CardWtb isWtb={true} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}