import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/scss';
import 'swiper/css/bundle';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'sweetalert2/src/sweetalert2.scss'
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
