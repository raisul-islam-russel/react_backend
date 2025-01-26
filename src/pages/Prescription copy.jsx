import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Prescription() {

  const baseUrl = "http://localhost/raisul/phpproject/backend/";
  const [doctor, setDoctor] = useState([]);
  const [SelectedDoctor, setSelectedDoctor] = useState(null);

  const [patient, setPatient] = useState([]);
  const [SelectedPatient, setSelectedPatient] = useState(null);


 
  const fetchPatient = () => {
    axios.get(baseUrl + "api/patient/patient_api/")
      .then((response) => {
        // console.log(response.data.patients);
        setPatient(response.data.patients);
        // alert();

      })
  }

  const handleSelectedPatient = (e) => {
    const { value } = e.target;
    setSelectedPatient(JSON.parse(value));
  }


  const handleSelectedDoctor = (e) => {
    const { value } = e.target;
    setSelectedDoctor(JSON.parse(value));



  }
  const fetchDoctor = () => {
    axios.get(baseUrl + "api/doctor/doctor_api/")
      .then((response) => {
        // console.log(response.data.doctors);
        setDoctor(response.data.doctors);
        // alert();

      })
  }


  useEffect(() => {
    fetchDoctor();
    fetchPatient();
  }, []);




  return (
    <>
    <div className="content-wrapper">
        <div className="container-full">

          <div className="container my-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="display-4 text-primary"><strong>Doc Clinic Telemedicine</strong></h1>
              <p><strong>Address:</strong> Dhanmondi, Dhaka, Bangladesh</p>
              <p><strong>Contact:</strong> 01675600847</p>
            </div>

            {/* Prescription Info */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                {/* <p><strong>Prescription Number:</strong> PRS-{new Date().toISOString().slice(0, 10).replace(/-/g, '')}{Math.floor(Math.random() * 100)}</p> */}
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary" onClick={() => window.print()}>Print</button>
                <button className="btn btn-outline-primary" onClick={() => alert("CSV functionality not implemented")}>CSV</button>
                <button className="btn btn-outline-success" onClick={() => alert("Email functionality not implemented")}>Email</button>
                <button className="btn btn-outline-info" onClick={() => alert("Process functionality not implemented")}>Process</button>
              </div>
            </div>

            {/* Doctor & Patient Info */}
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card p-3">


                  <h5 className="card-title text-primary">Doctor's Details</h5>
                  <select name="doctor" onChange={handleSelectedDoctor} className="form-select mb-2">

                    <option value="">Select Doctor</option>
                    {
                      doctor.map((data, i) => (
                        <option key={i} value={JSON.stringify(data)}>{data.name}</option>
                      ))
                    }

                  </select>

                  <div>
                    <p><strong>Specialization : {SelectedDoctor && SelectedDoctor.specialization}</strong> <strong><span id="specialization" className="text-muted" /></strong>

                    </p>
                    <p><strong>Phone : {SelectedDoctor && SelectedDoctor.contact_number}</strong> <strong><span id="doctor_contact" className="text-muted" /></strong></p>
                  </div>


                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-3">
                  <h5 className="card-title text-primary">Patient's Details</h5>

                  <select name="patient" onChange={handleSelectedPatient} className="form-select mb-2">

                    <option value="">Select Patient</option>
                    {
                      patient?.map((data, i) => (
                        <option key={i} value={JSON.stringify(data)}>{data.name}</option>
                      ))
                    }

                  </select>
                  <p>
                    <strong>Name : {SelectedPatient && SelectedPatient.name}</strong> </p>
                  <p><strong>Gender : {SelectedPatient && SelectedPatient.gender}</strong> </p>
                  <p><strong>Phone : {SelectedPatient && SelectedPatient.phone}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Medicines & Dosages */}
            <div className="card p-3 mb-4">
              <h5 className="card-title text-primary">Prescribed Medicines and Dosages</h5>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead className="table-light text-center">
                    <tr>
                      <th>Medicines</th>
                      <th>Dosage</th>
                      <th>Morning</th>
                      <th>Afternoon</th>
                      <th>Night</th>
                      <th>Instructions</th>
                      <th>Duration</th>
                      {/* <th><button className="btn btn-danger" onClick={handleClearAll}>Clear All</button></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td><select className="form-select" value={medicineDetails.medicineId} onChange={(e) => setMedicineDetails({...medicineDetails, medicineId: e.target.value})}>
                                    <option value="">Select Medicine</option>
                                    <option value="1">Medicine A</option>
                                    <option value="2">Medicine B</option>
                                </select></td> */}
                      {/* <td><input type="text" className="form-control" value={medicineDetails.dosage} onChange={(e) => setMedicineDetails({...medicineDetails, dosage: e.target.value})} /></td>
                                <td><input type="checkbox" checked={medicineDetails.morning} onChange={() => setMedicineDetails({...medicineDetails, morning: !medicineDetails.morning})} /></td>
                                <td><input type="checkbox" checked={medicineDetails.afternoon} onChange={() => setMedicineDetails({...medicineDetails, afternoon: !medicineDetails.afternoon})} /></td>
                                <td><input type="checkbox" checked={medicineDetails.night} onChange={() => setMedicineDetails({...medicineDetails, night: !medicineDetails.night})} /></td>
                                <td><input type="text" className="form-control" value={medicineDetails.instructions} onChange={(e) => setMedicineDetails({...medicineDetails, instructions: e.target.value})} /></td>
                                <td><input type="text" className="form-control" value={medicineDetails.duration} onChange={(e) => setMedicineDetails({...medicineDetails, duration: e.target.value})} /></td> */}
                      {/* <td><button className="btn btn-primary" onClick={handleAddMedicine}>Add</button></td>
                            </tr>
                            {prescribedMedicines.map((medicine, index) => (
                                <tr key={index}>
                                    <td>{medicine.medicineId}</td>
                                    <td>{medicine.dosage}</td>
                                    <td>{medicine.morning ? '✔' : '✘'}</td>
                                    <td>{medicine.afternoon ? '✔' : '✘'}</td>
                                    <td>{medicine.night ? '✔' : '✘'}</td>
                                    <td>{medicine.instructions}</td>
                                    <td>{medicine.duration}</td> */}
                      {/* <td><button className="btn btn-danger" onClick={() => setPrescribedMedicines(prescribedMedicines.filter((_, i) => i !== index))}>Remove</button></td> */}
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Diagnosis Section */}
            <div className="card p-3 mb-4">
              {/* <h5 className="card-title text-primary">Primary Diagnosis & Advice</h5>
                <textarea className="form-control" value={advice} onChange={handleAdviceChange} rows="3"></textarea>
                <p><strong>Advice:</strong> {advice}</p> */}
            </div>

            {/* Recommended Tests */}
            <div className="card p-3 mb-4">
              <h5 className="card-title text-primary">Recommended Tests</h5>
              {/* <select multiple className="form-select" onChange={handleTestChange}>
                    <option value="Test 1">Test 1</option>
                    <option value="Test 2">Test 2</option>
                    <option value="Test 3">Test 3</option>
                </select> */}
              <ul>
                {/* {selectedTests.map((test, index) => <li key={index}>{test}</li>)} */}
              </ul>
            </div>

            {/* Next Follow-Up */}
            {/* <div className="alert alert-info">
                <strong>Next Follow-Up Date:</strong>
                <input type="date" className="form-control" value={followUpDate} onChange={handleFollowUpDateChange} />
            </div> */}

            {/* Footer */}
            <div className="text-end mt-5">
              <p className="fw-bold mb-0">Doctor's Signature</p>
              <div className="border-top border-primary mt-3" style={{ width: '200px', marginLeft: 'auto' }}></div>
            </div>
          </div>
        </div>
      </div >



    </>
    
    
  
      
            
  );
};


export default Prescription;
