import React from 'react'

const Appointment = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="d-flex align-items-center">
                            <div className="me-auto">
                                <h4 className="page-title">Appointments</h4>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline" /></a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Appointments</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body p-10">
                                        <div id="calendar" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="box no-border no-shadow">
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Draggable Events</h4>
                                    </div>
                                    <div className="box-body p-0">
                                        {/* the events */}
                                        <div id="external-events">
                                            <div className="external-event m-15 bg-primary" data-class="bg-primary"><i className="fa fa-hand-o-right" />Lunch</div>
                                            <div className="external-event m-15 bg-warning" data-class="bg-warning"><i className="fa fa-hand-o-right" />Go home</div>
                                            <div className="external-event m-15 bg-info" data-class="bg-info"><i className="fa fa-hand-o-right" />Do homework</div>
                                            <div className="external-event m-15 bg-success" data-class="bg-success"><i className="fa fa-hand-o-right" />Work on UI design</div>
                                            <div className="external-event m-15 bg-danger" data-class="bg-danger"><i className="fa fa-hand-o-right" />Sleep tight</div>
                                        </div>
                                        <div className="event-fc-bt mx-15 my-20">
                                            {/* checkbox */}
                                            <div className="checkbox">
                                                <input id="drop-remove" type="checkbox" />
                                                <label htmlFor="drop-remove">
                                                    Remove after drop
                                                </label>
                                            </div>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#add-new-events" className="btn btn-success w-p100 my-10">
                                                <i className="ti-plus" /> Add New Event
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /.content */}
                </div>
            </div>


        </>
    )
}

export default Appointment