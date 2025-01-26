import React from 'react'

const Doctors = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="d-flex align-items-center">
                            <div className="me-auto">
                                <h4 className="page-title">Doctor Details</h4>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline" /></a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Doctor Details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xl-4 col-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="mb-0">Your Patients today</h4>
                                            <a href="#" className>All patients <i className="ms-10 fa fa-angle-right" /></a>
                                        </div>
                                    </div>
                                    <div className="box-body p-15">
                                        <div className="mb-10 d-flex justify-content-between align-items-center">
                                            <div className="fw-600 min-w-120">
                                                10:30am
                                            </div>
                                            <div className="w-p100 p-10 rounded10 justify-content-between align-items-center d-flex bg-lightest">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <img src="../images/avatar/1.jpg" className="me-10 avatar rounded-circle" alt />
                                                    <div>
                                                        <h6 className="mb-0">Sarah Hostemn</h6>
                                                        <p className="mb-0 fs-12 text-mute">Diagnosis: Bronchitis</p>
                                                    </div>
                                                </div>
                                                <div className="dropdown">
                                                    <a data-bs-toggle="dropdown" href="#"><i className="ti-more-alt rotate-90" /></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#"><i className="ti-import" /> Details</a>
                                                        <a className="dropdown-item" href="#"><i className="ti-export" /> Lab Reports</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-10 d-flex justify-content-between align-items-center">
                                            <div className="fw-600 min-w-120">
                                                11:00am
                                            </div>
                                            <div className="w-p100 p-10 rounded10 justify-content-between align-items-center d-flex bg-lightest">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <img src="../images/avatar/2.jpg" className="me-10 avatar rounded-circle" alt />
                                                    <div>
                                                        <h6 className="mb-0">Dakota Smith</h6>
                                                        <p className="mb-0 fs-12 text-mute">Diagnosis: Stroke</p>
                                                    </div>
                                                </div>
                                                <div className="dropdown">
                                                    <a data-bs-toggle="dropdown" href="#"><i className="ti-more-alt rotate-90" /></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#"><i className="ti-import" /> Details</a>
                                                        <a className="dropdown-item" href="#"><i className="ti-export" /> Lab Reports</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="fw-600 min-w-120">
                                                11:30am
                                            </div>
                                            <div className="w-p100 p-10 rounded10 justify-content-between align-items-center d-flex bg-lightest">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <img src="../images/avatar/3.jpg" className="me-10 avatar rounded-circle" alt />
                                                    <div>
                                                        <h6 className="mb-0">John Lane</h6>
                                                        <p className="mb-0 fs-12 text-mute">Diagnosis: Liver cimhosis</p>
                                                    </div>
                                                </div>
                                                <div className="dropdown">
                                                    <a data-bs-toggle="dropdown" href="#"><i className="ti-more-alt rotate-90" /></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#"><i className="ti-import" /> Details</a>
                                                        <a className="dropdown-item" href="#"><i className="ti-export" /> Lab Reports</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Appointments</h4>
                                    </div>
                                    <div className="box-body">
                                        <div id="paginator1" />
                                    </div>
                                    <div className="box-body">
                                        <div className="inner-user-div4">
                                            <div>
                                                <div className="d-flex align-items-center mb-10">
                                                    <div className="me-15">
                                                        <img src="../images/avatar/avatar-1.png" className="avatar avatar-lg rounded10 bg-primary-light" alt />
                                                    </div>
                                                    <div className="d-flex flex-column flex-grow-1 fw-500">
                                                        <p className="hover-primary text-fade mb-1 fs-14">Shawn Hampton</p>
                                                        <span className="text-dark fs-16">Emergency appointment</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"><i className="fa fa-phone" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom">
                                                    <div>
                                                        <p className="mb-0 text-muted"><i className="fa fa-clock-o me-5" /> 10:00 <span className="mx-20">$ 30</span></p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                            <a data-bs-toggle="dropdown" href="#" className="base-font mx-10"><i className="ti-more-alt text-muted" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                <div className="dropdown-divider" />
                                                                <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-10">
                                                    <div className="me-15">
                                                        <img src="../images/avatar/avatar-2.png" className="avatar avatar-lg rounded10 bg-primary-light" alt />
                                                    </div>
                                                    <div className="d-flex flex-column flex-grow-1 fw-500">
                                                        <p className="hover-primary text-fade mb-1 fs-14">Polly Paul</p>
                                                        <span className="text-dark fs-16">USG + Consultation</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"><i className="fa fa-phone" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom">
                                                    <div>
                                                        <p className="mb-0 text-muted"><i className="fa fa-clock-o me-5" /> 10:30 <span className="mx-20">$ 50</span></p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                            <a data-bs-toggle="dropdown" href="#" className="base-font mx-10"><i className="ti-more-alt text-muted" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                <div className="dropdown-divider" />
                                                                <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-10">
                                                    <div className="me-15">
                                                        <img src="../images/avatar/avatar-3.png" className="avatar avatar-lg rounded10 bg-primary-light" alt />
                                                    </div>
                                                    <div className="d-flex flex-column flex-grow-1 fw-500">
                                                        <p className="hover-primary text-fade mb-1 fs-14">Johen Doe</p>
                                                        <span className="text-dark fs-16">Laboratory screening</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"><i className="fa fa-phone" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom">
                                                    <div>
                                                        <p className="mb-0 text-muted"><i className="fa fa-clock-o me-5" /> 11:00 <span className="mx-20">$ 70</span></p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                            <a data-bs-toggle="dropdown" href="#" className="base-font mx-10"><i className="ti-more-alt text-muted" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                <div className="dropdown-divider" />
                                                                <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-10">
                                                    <div className="me-15">
                                                        <img src="../images/avatar/avatar-4.png" className="avatar avatar-lg rounded10 bg-primary-light" alt />
                                                    </div>
                                                    <div className="d-flex flex-column flex-grow-1 fw-500">
                                                        <p className="hover-primary text-fade mb-1 fs-14">Harmani Doe</p>
                                                        <span className="text-dark fs-16">Keeping pregnant</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"><i className="fa fa-phone" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom">
                                                    <div>
                                                        <p className="mb-0 text-muted"><i className="fa fa-clock-o me-5" /> 11:30 </p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                            <a data-bs-toggle="dropdown" href="#" className="base-font mx-10"><i className="ti-more-alt text-muted" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                <div className="dropdown-divider" />
                                                                <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-10">
                                                    <div className="me-15">
                                                        <img src="../images/avatar/avatar-5.png" className="avatar avatar-lg rounded10 bg-primary-light" alt />
                                                    </div>
                                                    <div className="d-flex flex-column flex-grow-1 fw-500">
                                                        <p className="hover-primary text-fade mb-1 fs-14">Mark Wood</p>
                                                        <span className="text-dark fs-16">Primary doctor consultation</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"><i className="fa fa-phone" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom">
                                                    <div>
                                                        <p className="mb-0 text-muted"><i className="fa fa-clock-o me-5" /> 12:00 <span className="mx-20">$ 30</span></p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                            <a data-bs-toggle="dropdown" href="#" className="base-font mx-10"><i className="ti-more-alt text-muted" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                <div className="dropdown-divider" />
                                                                <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-10">
                                                    <div className="me-15">
                                                        <img src="../images/avatar/avatar-6.png" className="avatar avatar-lg rounded10 bg-primary-light" alt />
                                                    </div>
                                                    <div className="d-flex flex-column flex-grow-1 fw-500">
                                                        <p className="hover-primary text-fade mb-1 fs-14">Shawn Marsh</p>
                                                        <span className="text-dark fs-16">Emergency appointment</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"><i className="fa fa-phone" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom">
                                                    <div>
                                                        <p className="mb-0 text-muted"><i className="fa fa-clock-o me-5" /> 13:00 <span className="mx-20">$ 90</span></p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                            <a data-bs-toggle="dropdown" href="#" className="base-font mx-10"><i className="ti-more-alt text-muted" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                <div className="dropdown-divider" />
                                                                <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header no-border">
                                        <h4 className="box-title">Doctors Abilities</h4>
                                    </div>
                                    <div className="box-body">
                                        <div id="chart123" />
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Recovery rate</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="mb-30">
                                            <div className="d-flex align-items-center justify-content-between mb-5"><h5>80 %</h5><h5>Cold</h5></div>
                                            <div className="progress  progress-xs">
                                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-30">
                                            <div className="d-flex align-items-center justify-content-between mb-5"><h5>24 %</h5><h5>Fracture</h5></div>
                                            <div className="progress  progress-xs">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={24} aria-valuemin={0} aria-valuemax={100} style={{ width: '24%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-5"><h5>91 %</h5><h5>Ache</h5></div>
                                            <div className="progress  progress-xs">
                                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={91} aria-valuemin={0} aria-valuemax={100} style={{ width: '91%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-5"><h5>50 %</h5><h5>Hematoma</h5></div>
                                            <div className="progress  progress-xs">
                                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-5"><h5>72 %</h5><h5>Caries</h5></div>
                                            <div className="progress  progress-xs">
                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} style={{ width: '72%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-12">
                                <div className="box">
                                    <div className="box-body text-end min-h-150" style={{ backgroundImage: 'url(../images/gallery/landscape14.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                        <div className="bg-success rounded10 p-15 fs-18 d-inline"><i className="fa fa-stethoscope" /> ENT Specialist</div>
                                    </div>
                                    <div className="box-body wed-up position-relative">
                                        <div className="d-md-flex align-items-end">
                                            <img src="../images/avatar/avatar-1.png" className="bg-success-light rounded10 me-20" alt />
                                            <div>
                                                <h4>Dr. Johen doe</h4>
                                                <p><i className="fa fa-clock-o" /> Join on 15 May 2019, 10:00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <h4>Biography</h4>
                                        <p>Vestibulum tincidunt sit amet sapien et eleifend. Fusce pretium libero enim, nec lacinia est ultrices id. Duis nibh sapien, ultrices in hendrerit ac, pulvinar ut mauris. Quisque eu condimentum justo. In consectetur dapibus justo, et dapibus augue pellentesque sed. Etiam pulvinar pharetra est, at euismod augue vulputate sed. Morbi id porta turpis, a porta turpis. Suspendisse maximus finibus est at pellentesque. Integer ut sapien urna.</p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Assigned Patient</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="media d-lg-flex d-block text-lg-start text-center">
                                            <img className="me-3 img-fluid rounded bg-primary-light w-100" src="../images/avatar/1.jpg" alt />
                                            <div className="media-body my-10 my-lg-0">
                                                <h4 className="mt-0 mb-2">Loky Doe</h4>
                                                <h6 className="mb-4 text-primary">Cold &amp; Flue</h6>
                                                <div className="d-flex justify-content-center justify-content-lg-start">
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-primary-light me-4">Unassign</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-danger-light ">Imporvement</a>
                                                </div>
                                            </div>
                                            <div id="chart" className="me-3" />
                                            <div className="media-footer align-self-center">
                                                <div className="up-sign text-success">
                                                    <i className="fa fa-caret-up fs-38" />
                                                    <h3 className="text-success">10%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Resent Review</h4>
                                    </div>
                                    <div className="box-body p-0">
                                        <div className="inner-user-div">
                                            <div className="media-list bb-1 bb-dashed border-light">
                                                <div className="media align-items-center">
                                                    <a className="avatar avatar-lg status-success" href="#">
                                                        <img src="../images/avatar/1.jpg" className="bg-success-light" alt="..." />
                                                    </a>
                                                    <div className="media-body">
                                                        <p className="fs-16">
                                                            <a className="hover-primary" href="#">Theron Trump</a>
                                                        </p>
                                                        <span className="text-muted">2 day ago</span>
                                                    </div>
                                                    <div className="media-right">
                                                        <div className="d-flex">
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media pt-0">
                                                    <p className="text-fade">Vestibulum tincidunt sit amet sapien et eleifend. Fusce pretium libero enim, nec lacinia est ultrices id. Duis nibh sapien, ultrices in hendrerit ac, pulvinar ut mauris. Quisque eu condimentum justo. </p>
                                                </div>
                                            </div>
                                            <div className="media-list bb-1 bb-dashed border-light">
                                                <div className="media align-items-center">
                                                    <a className="avatar avatar-lg status-success" href="#">
                                                        <img src="../images/avatar/3.jpg" className="bg-success-light" alt="..." />
                                                    </a>
                                                    <div className="media-body">
                                                        <p className="fs-16">
                                                            <a className="hover-primary" href="#">Johen Doe</a>
                                                        </p>
                                                        <span className="text-muted">5 day ago</span>
                                                    </div>
                                                    <div className="media-right">
                                                        <div className="d-flex">
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star-half-o" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media pt-0">
                                                    <p className="text-fade">Praesent venenatis viverra turpis quis varius. Nullam ullamcorper congue urna, in sodales eros placerat non.</p>
                                                </div>
                                            </div>
                                            <div className="media-list">
                                                <div className="media align-items-center">
                                                    <a className="avatar avatar-lg status-success" href="#">
                                                        <img src="../images/avatar/4.jpg" className="bg-success-light" alt="..." />
                                                    </a>
                                                    <div className="media-body">
                                                        <p className="fs-16">
                                                            <a className="hover-primary" href="#">Tyler Mark</a>
                                                        </p>
                                                        <span className="text-muted">7 day ago</span>
                                                    </div>
                                                    <div className="media-right">
                                                        <div className="d-flex">
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media pt-0">
                                                    <p className="text-fade">Pellentesque a pretium orci. In hac habitasse platea dictumst. Nulla mattis odio enim, id euismod neque bibendum non.</p>
                                                </div>
                                            </div>
                                            <div className="media-list bb-1 bb-dashed border-light">
                                                <div className="media align-items-center">
                                                    <a className="avatar avatar-lg status-success" href="#">
                                                        <img src="../images/avatar/5.jpg" className="bg-success-light" alt="..." />
                                                    </a>
                                                    <div className="media-body">
                                                        <p className="fs-16">
                                                            <a className="hover-primary" href="#">Theron Trump</a>
                                                        </p>
                                                        <span className="text-muted">2 day ago</span>
                                                    </div>
                                                    <div className="media-right">
                                                        <div className="d-flex">
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star-half-o" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media pt-0">
                                                    <p className="text-fade">Curabitur condimentum molestie ligula iaculis euismod. Fusce nulla lectus, tincidunt eu consequat.</p>
                                                </div>
                                            </div>
                                            <div className="media-list bb-1 bb-dashed border-light">
                                                <div className="media align-items-center">
                                                    <a className="avatar avatar-lg status-success" href="#">
                                                        <img src="../images/avatar/6.jpg" className="bg-success-light" alt="..." />
                                                    </a>
                                                    <div className="media-body">
                                                        <p className="fs-16">
                                                            <a className="hover-primary" href="#">Johen Doe</a>
                                                        </p>
                                                        <span className="text-muted">5 day ago</span>
                                                    </div>
                                                    <div className="media-right">
                                                        <div className="d-flex">
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media pt-0">
                                                    <p className="text-fade">Proin lacinia eleifend nulla eu ornare. Integer commodo elit purus. Suspendisse mattis gravida interdum. In laoreet nisi eget felis ornare, tempus luctus nulla pellentesque. Donec maximus lobortis ullamcorper. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <a href="#" className="waves-effect waves-light d-block w-p100 btn btn-primary">See More Reviews</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-12">
                                        <div className="box">
                                            <div className="box-body px-0 pb-0">
                                                <div className="px-20 bb-1 pb-15 d-flex align-items-center justify-content-between">
                                                    <h4 className="mb-0">Recent questions</h4>
                                                    <div className="d-flex align-items-center justify-content-end">
                                                        <button type="button" className="waves-effect waves-light btn btn-sm btn-primary-light">All</button>
                                                        <button type="button" className="waves-effect waves-light mx-10 btn btn-sm btn-primary">Unread</button>
                                                        <button type="button" className="waves-effect waves-light btn btn-sm btn-primary-light">New</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="inner-user-div3">
                                                    <div className="d-flex justify-content-between align-items-center pb-20 mb-10 bb-dashed border-bottom">
                                                        <div className="pe-20">
                                                            <p className="fs-12 text-fade">14 Jun 2021 <span className="mx-10">/</span> 01:05PM</p>																	<h4>Addiction blood bank bone marrow contagious disinfectants?</h4>
                                                            <div className="d-flex align-items-center">
                                                                <button type="button" className="waves-effect waves-light btn me-10 btn-xs btn-primary-light">Read more</button>
                                                                <button type="button" className="waves-effect waves-light btn btn-xs btn-primary-light">Reply</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="waves-effect waves-circle btn btn-circle btn-outline btn-light btn-lg"><i className="fa fa-comments" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center pb-20 bb-dashed border-bottom">
                                                        <div className="pe-20">
                                                            <p className="fs-12 text-fade">17 Jun 2021 <span className="mx-10">/</span> 02:05PM</p>																	<h4>Triggered asthma anesthesia blood type bone marrow cartilage?</h4>
                                                            <div className="d-flex align-items-center">
                                                                <button type="button" className="waves-effect waves-light btn me-10 btn-xs btn-primary-light">Read more</button>
                                                                <button type="button" className="waves-effect waves-light btn btn-xs btn-primary-light">Reply</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="waves-effect waves-circle btn btn-circle btn-outline btn-light btn-lg"><i className="fa fa-comments" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center pb-20 mb-10 bb-dashed border-bottom">
                                                        <div className="pe-20">
                                                            <p className="fs-12 text-fade">14 Jun 2021 <span className="mx-10">/</span> 01:05PM</p>																	<h4>Addiction blood bank bone marrow contagious disinfectants?</h4>
                                                            <div className="d-flex align-items-center">
                                                                <button type="button" className="waves-effect waves-light btn me-10 btn-xs btn-primary-light">Read more</button>
                                                                <button type="button" className="waves-effect waves-light btn btn-xs btn-primary-light">Reply</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="waves-effect waves-circle btn btn-circle btn-outline btn-light btn-lg"><i className="fa fa-comments" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center pb-20 bb-dashed border-bottom">
                                                        <div className="pe-20">
                                                            <p className="fs-12 text-fade">17 Jun 2021 <span className="mx-10">/</span> 02:05PM</p>																	<h4>Triggered asthma anesthesia blood type bone marrow cartilage?</h4>
                                                            <div className="d-flex align-items-center">
                                                                <button type="button" className="waves-effect waves-light btn me-10 btn-xs btn-primary-light">Read more</button>
                                                                <button type="button" className="waves-effect waves-light btn btn-xs btn-primary-light">Reply</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="waves-effect waves-circle btn btn-circle btn-outline btn-light btn-lg"><i className="fa fa-comments" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-12">
                                        <div className="box">
                                            <div className="box-header">
                                                <h4 className="box-title">Laboratory tests</h4>
                                            </div>
                                            <div className="box-body">
                                                <div className="news-slider owl-carousel owl-sl">
                                                    <div>
                                                        <div className="d-flex align-items-center mb-10">
                                                            <div className="d-flex flex-column flex-grow-1 fw-500">
                                                                <p className="hover-primary text-fade mb-1 fs-14"><i className="fa fa-link" /> Shawn Hampton</p>
                                                                <span className="text-dark fs-16">Beta 2 Microglobulin</span>
                                                                <p className="mb-0 fs-14">Marker Test <span className="badge badge-dot badge-primary" /></p>
                                                            </div>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a data-bs-toggle="dropdown" href="#" className="base-font mx-30"><i className="ti-more-alt text-muted" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                        <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                        <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                        <div className="dropdown-divider" />
                                                                        <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-end py-10">
                                                            <div>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light">Details</a>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light">Contact Patient</a>
                                                            </div>
                                                            <div>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light"><i className="fa fa-check" /> Archive</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex align-items-center mb-10">
                                                            <div className="d-flex flex-column flex-grow-1 fw-500">
                                                                <p className="hover-primary text-fade mb-1 fs-14"><i className="fa fa-link" /> Johen Doe</p>
                                                                <span className="text-dark fs-16">Keeping pregnant</span>
                                                                <p className="mb-0 fs-14">Prga Test <span className="badge badge-dot badge-primary" /></p>
                                                            </div>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a data-bs-toggle="dropdown" href="#" className="base-font mx-30"><i className="ti-more-alt text-muted" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                        <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                        <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                        <div className="dropdown-divider" />
                                                                        <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-end py-10">
                                                            <div>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light">Details</a>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light">Contact Patient</a>
                                                            </div>
                                                            <div>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light"><i className="fa fa-check" /> Archive</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex align-items-center mb-10">
                                                            <div className="d-flex flex-column flex-grow-1 fw-500">
                                                                <p className="hover-primary text-fade mb-1 fs-14"><i className="fa fa-link" /> Polly Paul</p>
                                                                <span className="text-dark fs-16">USG + Consultation</span>
                                                                <p className="mb-0 fs-14">Marker Test <span className="badge badge-dot badge-primary" /></p>
                                                            </div>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a data-bs-toggle="dropdown" href="#" className="base-font mx-30"><i className="ti-more-alt text-muted" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#"><i className="ti-import" /> Import</a>
                                                                        <a className="dropdown-item" href="#"><i className="ti-export" /> Export</a>
                                                                        <a className="dropdown-item" href="#"><i className="ti-printer" /> Print</a>
                                                                        <div className="dropdown-divider" />
                                                                        <a className="dropdown-item" href="#"><i className="ti-settings" /> Settings</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-end py-10">
                                                            <div>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light">Details</a>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light">Contact Patient</a>
                                                            </div>
                                                            <div>
                                                                <a href="#" className="waves-effect waves-light btn btn-sm btn-primary-light"><i className="fa fa-check" /> Archive</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Doctors