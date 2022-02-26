import React from 'react'

const ProfileMenu = () => {
    const account = "Hesabım"
    const fav = "Favorilerim"
    const basket = "Sepetim"

    const profileStyle = {
        backgroundColor: "#ffae00"
    }

    const spanStyle= {
        color: "black"
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid" >

                <nav className="navbar-items">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <div className="nav-link" href="javascript:;">
                                <span><i className="fas fa-user"></i></span>
                                <span style={spanStyle}>{account}</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:;">
                                <span><i className="fas fa-user"></i></span>
                                <span style={spanStyle}>{fav}</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:;">
                                <span><i className="fas fa-shopping-cart"></i></span>
                                <span style={spanStyle}>{basket}</span>
                                <span style={profileStyle} className="badge badge-pill"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>

    )
}


export default ProfileMenu;