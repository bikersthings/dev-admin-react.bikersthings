import { faBoxes, faGears, faGift, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"


export default () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
            <div className="main-sidebar" style={{ overflow: 'hidden', outline: 'none' }} tabIndex={1}>
                <aside id="sidebar-wrapper">
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

                </aside>
            </div>
        </>
    )
}