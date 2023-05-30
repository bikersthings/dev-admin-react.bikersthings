import { Outlet } from 'react-router-dom'
import Nav from '../navigation/_nav'
import Footer from '../footer/_footer'
export default () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}