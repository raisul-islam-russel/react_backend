import React from 'react'

const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className="d-flex align-items-center logo-box justify-content-start">
                    {/* Logo */}
                    <a href="index.html" className="logo">
                        {/* logo*/}
                        <div className="logo-mini w-50">
                            <span className="light-logo"><img src="../images/logo-letter.png" alt="logo" /></span>
                            <span className="dark-logo"><img src="../images/logo-letter.png" alt="logo" /></span>
                        </div>
                        <div className="logo-lg">
                            <span className="light-logo"><img src="../images/logo-dark-text.png" alt="logo" /></span>
                            <span className="dark-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
                        </div>
                    </a>
                </div>
                {/* Header Navbar */}
                <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <div className="app-menu">
                        <ul className="header-megamenu nav">
                            <li className="btn-group nav-item">
                                <a href="#" className="waves-effect waves-light nav-link push-btn btn-primary-light" data-toggle="push-menu" role="button">
                                    <i className="icon-Menu"><span className="path1" /><span className="path2" /></i>
                                </a>
                            </li>
                            <li className="btn-group d-lg-inline-flex d-none">
                                <div className="app-menu">
                                    <div className="search-bx mx-5">
                                        <form>
                                            <div className="input-group">
                                                <input type="search" className="form-control" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <button className="btn" type="submit" id="button-addon3"><i className="icon-Search"><span className="path1" /><span className="path2" /></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-custom-menu r-side">
                        <ul className="nav navbar-nav">
                            {/* User Account*/}
                            <li className="dropdown user user-menu">
                                <a href="#" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" data-bs-toggle="dropdown" title="User">
                                    <div className="d-flex pt-1">
                                        <div className="text-end me-10">
                                            <p className="pt-5 fs-14 mb-0 fw-700 text-primary">Doc Clinic</p>
                                            <small className="fs-10 mb-0 text-uppercase text-mute">Admin</small>
                                        </div>
                                        <img src="../images/avatar/avatar-1.png" className="avatar rounded-10 bg-primary-light h-40 w-40" alt />
                                    </div>
                                </a>
                                <ul className="dropdown-menu animated flipInX">
                                    <li className="user-body">
                                        <a className="dropdown-item" href="extra_profile.html"><i className="ti-user text-muted me-2" /> Profile</a>
                                        <a className="dropdown-item" href="auth_login.html"><i className="ti-lock text-muted me-2" /> Logout</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="btn-group nav-item d-lg-inline-flex d-none">
                                <a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link full-screen btn-warning-light" title="Full Screen">
                                    <i className="icon-Position" />
                                </a>
                            </li>
                            {/* Notifications */}
                            <li className="dropdown notifications-menu">
                                <a href="#" className="waves-effect waves-light dropdown-toggle btn-info-light" data-bs-toggle="dropdown" title="Notifications">
                                    <i className="icon-Notification"><span className="path1" /><span className="path2" /></i>
                                </a>
                                <ul className="dropdown-menu animated bounceIn">
                                    <li className="header">
                                        <div className="p-20">
                                            <div className="flexbox">
                                                <div>
                                                    <h4 className="mb-0 mt-0">Notifications</h4>
                                                </div>
                                                <div>
                                                    <a href="#" className="text-danger">Clear All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* inner menu: contains the actual data */}
                                        <ul className="menu sm-scrol">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-info" /> Curabitur id eros quis nunc suscipit blandit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-warning text-warning" /> Duis malesuada justo eu sapien elementum, in semper
                                                    diam posuere.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-danger" /> Donec at nisi sit amet tortor commodo porttitor pretium
                                                    a erat.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart text-success" /> In gravida mauris et nisi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-danger" /> Praesent eu lacus in libero dictum fermentum.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-primary" /> Nunc fringilla lorem
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-success" /> Nullam euismod dolor ut quam interdum, at scelerisque
                                                    ipsum imperdiet.
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">View all</a>
                                    </li>
                                </ul>
                            </li>
                            {/* Control Sidebar Toggle Button */}
                            <li className="btn-group nav-item">
                                <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect full-screen waves-light btn-danger-light">
                                    <i className="icon-Settings1"><span className="path1" /><span className="path2" /></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header