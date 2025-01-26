import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import ControlSideBar from './ControlSideBar'
import Footer from './Footer'

const MainContent = () => {
  return (
    <>
      <Header />
      <Sidebar />

    <div className="content-wrapper">
  <div className="container-full">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="d-flex align-items-center">
        {/* <div className="me-auto">
          <h4 className="page-title">Contact List</h4>
          <div className="d-inline-block align-items-center">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline" /></a></li>
                <li className="breadcrumb-item" aria-current="page">Apps</li>
                <li className="breadcrumb-item active" aria-current="page">Contact List</li>
              </ol>
            </nav>
          </div>
        </div> */}
      </div>
    </div>
    {/* Main content */}
    <section className="content">
      <div className="row">
         <Outlet />
        </div>
    </section>
    {/* /.content */}
  </div>
</div>


     


      <Footer />

      {/* <ControlSideBar /> */}
    </>
  )
}

export default MainContent