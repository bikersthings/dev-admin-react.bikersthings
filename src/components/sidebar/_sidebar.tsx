import { faBoxes, faCashRegister, faClipboardList, faCog, faGift, faImages, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
export default () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
            <div className="main-sidebar" style={{ overflow: 'hidden', outline: 'none' }} tabIndex={1}>
                {/* <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <a href="/">
                            Bikersthings
                        </a>
                    </div>
                    <ul className="sidebar-menu">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={faBoxes} />
                                <span>Items</span>
                            </a>
                        </li>
                        <li className={location.pathname === '/wishlist' ? 'active' : ''}>
                            <a className="nav-link" href="/wishlist">
                                <FontAwesomeIcon icon={faHeart} />
                                <span>Wish List</span>
                            </a>
                        </li>
                        <li className={location.pathname === '/ice-box-dashboard' ? 'active' : ''}>
                            <a className="nav-link" href="/ice-box-dashboard">
                                <FontAwesomeIcon icon={faGift} />
                                <span>Ice Box</span>
                            </a>
                        </li>
                        <li className={location.pathname === '/profile' ? 'active' : ''}>
                            <a className="nav-link" href="/profile">
                                <FontAwesomeIcon icon={faGears} />
                                <span>Setting Profile</span>
                            </a>
                        </li>
                    </ul>
                </aside> */}
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <a href="/">
                            Bikersthings
                        </a>
                    </div>

                    <ul className="sidebar-menu">
                        <li className="menu-header">Business CMS</li>
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <a className="nav-link" href="/">

                                <FontAwesomeIcon icon={faBoxes} />
                                <span>Items</span>
                            </a>
                        </li>
                        <li className={location.pathname === '/ice-box-dashboard' ? 'active' : ''}>
                            <Link to='/ice-box-dashboard'>
                                <FontAwesomeIcon icon={faGift} />
                                <span>Ice Box</span>
                            </Link>

                        </li>
                        <li className={location.pathname === '/profile' ? 'active' : ''}>
                            <a className="nav-link" href="/profile">
                                <FontAwesomeIcon icon={faUser} />
                                <span>User</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="/transaksi">
                                <FontAwesomeIcon icon={faCashRegister} />
                                <span>Transaksi</span>
                            </a>
                        </li>

                        <li className="menu-header">Web CMS</li>
                        <li className="">
                            <a className="nav-link" href="/banner">
                                <FontAwesomeIcon icon={faImages} />
                                <span>Banner</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="/tnc">
                                <FontAwesomeIcon icon={faClipboardList} />
                                <span>TnC</span>
                            </a>
                        </li>

                        <li className="menu-header">Manage Core System</li>
                        <li className="">
                            <a className="nav-link" href="/core-brand">
                                <FontAwesomeIcon icon={faCog} />
                                <span>Brand</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="/core-category">
                                <FontAwesomeIcon icon={faCog} />
                                <span>Kategori</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="/core-sosmed">
                                <FontAwesomeIcon icon={faCog} />
                                <span>Sosmed</span>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}