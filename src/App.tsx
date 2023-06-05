// import Banner from './components/banner/_banner';
// // Import Swiper React components

// // import SwiperCore, { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import CardWtb from './components/cards/_card_wtb'
// import CardSeller from './components/cards/_card_seller';
// import CardCoupon from './components/cards/_card_coupon';
// function App() {

//   const item = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//   const categories = [
//     {
//       id: '1',
//       category: 'helment'
//     },
//     {
//       id: '2',
//       category: 'intercom'
//     },
//     {
//       id: '1',
//       category: 'helment'
//     },
//     {
//       id: '2',
//       category: 'intercom'
//     },
//     {
//       id: '1',
//       category: 'helment'
//     },
//     {
//       id: '2',
//       category: 'intercom'
//     },
//     {
//       id: '1',
//       category: 'helment'
//     },
//     {
//       id: '2',
//       category: 'intercom'
//     },
//     {
//       id: '1',
//       category: 'helment'
//     },
//     {
//       id: '2',
//       category: 'intercom'
//     }
//   ]

//   const brands = [
//     { name: 'Shoei', img: '/img/logo-brand/Shoei.png' },
//     { name: 'Arai', img: '/img/logo-brand/Arai.png' },
//     { name: 'AGV', img: '/img/logo-brand/AGV.png' },
//     { name: 'Dainese', img: '/img/logo-brand/Dainese.png' },
//     { name: 'HJC', img: '/img/logo-brand/HJC.png' },
//     { name: 'KYT', img: '/img/logo-brand/KYT.png' },
//     { name: 'Nolan', img: '/img/logo-brand/Nolan.png' },
//     { name: 'RSV', img: '/img/logo-brand/RSV.png' },
//     { name: 'Shark', img: '/img/logo-brand/Shark.png' },
//     { name: 'Sparco', img: '/img/logo-brand/Sparco.png' },
//     { name: 'Taichi', img: '/img/logo-brand/Taichi.png' },
//     { name: 'X-Lite', img: '/img/logo-brand/X-Lite.png' },
//   ]

//   SwiperCore.use([Autoplay]);

//   return (
//     <>
//       <Banner />
//       <div className="ice-box-home">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="wrapper head-section" >
//                 <div>
//                   Ice Box
//                 </div>
//               </div>
//               {item &&
//                 <Swiper
//                   spaceBetween={20}
//                   slidesPerView={5}
//                   loop={true}
//                   onSlideChange={() => console.log('slide change')}
//                   onSwiper={(swiper) => console.log(swiper)}
//                   className='swiper-ice-box'
//                 >
//                   {item.map((item: any, idx) => {
//                     return (
//                       <SwiperSlide key={idx}>
//                         <CardCoupon />
//                       </SwiperSlide>
//                     )
//                   })}
//                 </Swiper>
//               }
//             </div>

//           </div>
//         </div>
//       </div>

//       <section id="seller">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="wrapper head-section" >
//                 <div>
//                   Verified <b>Seller</b>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           {item &&
//             <Swiper
//               spaceBetween={20}
//               slidesPerView={5}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//               className='swiper-seller'
//             >

//               {item.map((item: any, idx) => {
//                 return (
//                   <SwiperSlide key={idx}>
//                     <CardSeller />
//                   </SwiperSlide>
//                 )
//               })}
//             </Swiper>
//           }
//         </div>
//       </section>

//       <section className="wts-wtb">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6" id='wts-item'>
//               <div className="wrapper head-section">
//                 <div>
//                   <b>WTS</b> (Want To Sell)
//                 </div>
//                 <div>
//                   Lihat Semua <i className="fas fa-chevron-right"></i>
//                 </div>
//               </div>
//               {item &&
//                 <Swiper
//                   spaceBetween={20}
//                   slidesPerView={3}
//                   onSlideChange={() => console.log('slide change')}
//                   onSwiper={(swiper) => console.log(swiper)}
//                   className='swiper-wts'
//                 >
//                   {item.map((item: any, idx) => {
//                     return (
//                       <SwiperSlide key={idx}>
//                         <CardWtb />
//                       </SwiperSlide>
//                     )
//                   })}
//                 </Swiper>
//               }
//             </div>
//             <div className="col-lg-6" id="wtb-item">
//               <div className="wrapper head-section">
//                 <div>
//                   <b>WTB</b> (Want To Buy)
//                 </div>
//                 <div>
//                   Lihat Semua <i className="fas fa-chevron-right"></i>
//                 </div>
//               </div>
//               {item &&
//                 <Swiper
//                   spaceBetween={20}
//                   slidesPerView={3}
//                   onSlideChange={() => console.log('slide change')}
//                   onSwiper={(swiper) => console.log(swiper)}
//                   className='swiper-wts'
//                 >

//                   {item.map((_, idx) => {
//                     return (
//                       <SwiperSlide key={idx}>
//                         <CardWtb isWtb={true} />
//                       </SwiperSlide>
//                     )
//                   })}
//                 </Swiper>
//               }
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="brands">
//         <div className="container">
//           {item &&
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//               }}
//               loop={true}
//               loopedSlides={3}
//               spaceBetween={20}
//               centeredSlides={true}
//               slidesPerView={5}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//               className='swiper-brand'
//             >
//               {brands.map((item: any, idx) => {
//                 return (
//                   <SwiperSlide key={idx}>
//                     <img src={item.img} alt="" width={100} />
//                   </SwiperSlide>
//                 )
//               })}
//             </Swiper>
//           }

//         </div>
//       </section >

//       <section className="category">
//         <div className="container">
//           {item &&
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{
//                 delay: 1500,
//                 disableOnInteraction: false,
//               }}
//               loop={true}
//               loopedSlides={3}
//               spaceBetween={20}
//               centeredSlides={true}
//               slidesPerView={5}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//               className='swiper-category'
//             >
//               {categories.map((item: any, idx) => {
//                 return (
//                   <SwiperSlide>
//                     <div className="card-silhouette">
//                       <img src="/img/siluet/helm.png" alt="" />
//                       <b>{item.category}</b>
//                     </div>
//                   </SwiperSlide>
//                 )
//               })}
//             </Swiper>
//           }
//         </div>
//       </section>

//       <section id="all-item">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="wrapper head-section">
//                 <div>
//                   Semua Item di <b>BIKERSTHINGS</b>
//                 </div>
//                 <div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             {item.map((_, idx) => {
//               return (
//                 <div className="col-lg-2 col-6" key={idx}>
//                   <CardWtb />
//                 </div>
//               )
//             })}
//           </div>
//           <div className="row">
//             <div className="col-12 text-center">
//               <button className="btn btn-gradient">Muat Lebih Banyak</button>
//             </div>
//           </div>
//         </div>
//       </section>


//     </>

//   )
// }

// export default App
