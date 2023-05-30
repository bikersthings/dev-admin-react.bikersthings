import { Outlet } from "react-router-dom"
import Sidebar from '../sidebar/_sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons"
import Dropdown from 'react-bootstrap/Dropdown';
export default () => {
    return (
        <>
            <div className="dashboard">
                <Sidebar />

                <div className="dashboard-page">
                    <div className="dashboard-nav">
                        <nav>
                            <div className="sidebar-toggler">
                                <button className="toggle">
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                            <Dropdown className='rounded'>
                                <Dropdown.Toggle variant="success" className='bg-transparent text-dark rounded overflow-hidden' id="dropdown-basic">
                                    <img src="/img/logo/tab-icon.png" alt="" width={25} height={25} />

                                    Hi, Tubagus Store!
                                </Dropdown.Toggle>

                                <Dropdown.Menu>

                                    <Dropdown.Item className="rounded w-100 p-0">
                                        <button className="btn btn-danger w-100" >
                                            <FontAwesomeIcon icon={faPowerOff} /> LOGOUT
                                        </button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </nav>
                    </div>
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}