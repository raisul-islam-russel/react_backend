import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';



function Prescription() {

  const cart = Cart('prescription')

  const baseUrl = "http://localhost/raisul/phpproject/backend/";

  const [doctor, setDoctor] = useState([]);
  const [SelectedDoctor, setSelectedDoctor] = useState(null);

  const [patient, setPatient] = useState([]);
  const [SelectedPatient, setSelectedPatient] = useState(null);

  const [medicine, setmedicine] = useState([])




  const [SelectedMedicine, setSelectedMedicine] = useState(null);

  const [prescribedMedicine, setprescribedMedicine] = useState({
		medicine_id:"",
    medicine_name:"",
		dosage_id:"",
    dosage_name:"",
		morning:"",
	  afternoon:"",
		night:"",
		instructions_id:"",
    instructions_name:"",
		duration_id:"",
    duration_name:""  

  })
  const [prescribedMedicines, setprescribedMedicines] = useState([])




  // const handleAddAllItem = () => {
  //   console.log(item);

  //   cart.save(item);

  // }

  // const handleClearCart = () => {
  //   cart.clearCart();
  // }

  // const handleProcessOrder = () => {
    
  // }
  const fetchPrescribedMedicines = () => {
    axios.get(baseUrl + "api/prescribedmedicine/prescribedmedicine_api/")
      .then((response) => {
        // console.log(response.data.prescribed_medicines);
        setprescribedMedicines(response.data.prescribed_medicines);
      }
      )
  }
  const handlePrescribedMedicine = (e) => {
    const { value } = e.target;
    setprescribedMedicines(JSON.parse(value));
  }

  const fetchMedicine = () => {
    axios.get(baseUrl + "api/medicine/medicine_api/")
      .then((response) => {
        // console.log(response.data.medicine);
        setmedicine(response.data.medicines);
        // alert();

      })
  }



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

  const handleSelectedMedicine = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    setSelectedMedicine(JSON.parse(value));
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
    fetchMedicine();
    fetchPrescribedMedicines();
  }, []);


   const handleChange=(e)=>{
    const {name , value}=e.target;

    if(name === "medicine"){
      const {id, name}=JSON.parse(value);
      setprescribedMedicine((prev)=>({
        ...prev,
        medicine_id:id,
        medicine_name:name
     }))

    }
    if(name === "dosage"){
      const {id, dosage}=JSON.parse(value);
 
      
      setprescribedMedicine((prev)=>({
        ...prev,
        dosage_id:id,
        dosage_name:dosage
     }))

    }
    if(name == "morning" || name == "afternoon" || name == "night"){
     
      setprescribedMedicine((prev)=>({
        ...prev,
        [name]:value
     }))

    }

    if(name === "instructions"){
      console.log(JSON.parse(value));
      const {id, instructions}=JSON.parse(value);
      setprescribedMedicine((prev)=>({
        ...prev,
        instructions_id:id,
        instructions_name:instructions
     }))

    }
    if(name === "duration"){
      const {id, duration}=JSON.parse(value);
      setprescribedMedicine((prev)=>({
        ...prev,
        duration_id:id,
        duration_name:duration
     }))

    }

  
    // setprescribedMedicine((prev)=>({
    //    ...prev,
    //    [name]:value
    // }))

  }

  const handleAddItem =()=>{
     
    
      
  }


  return (
    <>


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
            {/* <button className="btn btn-outline-info" onClick={handleProcessOrder}>Process</button> */}
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

                <p><strong>Email : {SelectedDoctor && SelectedDoctor.email}</strong> <strong><span id="email" className="text-muted" /></strong></p>
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
                  <th><button className='btn btn-danger'>Clear All</button></th>
                  {/* <th><button className="btn btn-danger" onClick={handleClearAll}>Clear All</button></th> */}
                </tr>


                <tr>
                  <td><select name="medicine" onChange={handleChange} className="form-select mb-2">
                    <option value="">Select Medicine</option>

                    {
                      medicine?.map((data, i) => (
                        <option key={i} value={JSON.stringify(data)}>{data.name}</option>
                      ))
                    }

                  </select></td>


                  <td>
                    <select name="dosage" className="form-select mb-2" id="" onChange={handleChange}>

                      <option value="">Select Dosage</option>
                      {
                        prescribedMedicines?.map((data, i) => (
                          <option key={i} value={JSON.stringify(data)}>{data.dosage}</option>
                        ))
                      }

                    </select>
                  </td>

                  <td>
                    <select name="morning" id="monring" onChange={handleChange}>
                      <option value="1">&#10004;</option>
                      <option value="0">&#10006;</option>
                    </select>
                  </td>

                  <td>
                    <select name="afternoon" id="afternoon" onChange={handleChange}>
                      <option value="1">&#10004;</option>
                      <option value="0">&#10006;</option>
                    </select>
                  </td>

                  <td>
                    <select name="night" id="night" onChange={handleChange}>
                      <option value="1">&#10004;</option>
                      <option value="0">&#10006;</option>
                    </select>
                  </td>

                  <td>
                    <select name="instructions" className="form-select mb-2" id="" onChange={handleChange}>

                      <option value="">Select Instructions</option>
                      {
                        prescribedMedicines?.map((data, i) => (
                          <option key={i} value={JSON.stringify(data)}>{data.instructions}</option>
                        ))
                      }

                    </select>
                  </td>

                  <td>
                    <select name="duration" className="form-select mb-2" id="" onChange={handleChange}>

                      <option value="">Select Duration</option>
                      {
                        prescribedMedicines?.map((data, i) => (
                          <option key={i} value={JSON.stringify(data)}>{data.duration}</option>
                        ))
                      }

                    </select>
                  </td>




                  <th>
                    <button onClick={handleAddItem} className="btn btn-primary" >Add</button>
                  </th>

                </tr>

              </thead>
              <tbody>

                {/* {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.medicine}</td>
                    <td>{item.dosage}</td>
                    <td>{item.morning ? '✔' : '✘'}</td>
                    <td>{item.afternoon ? '✔' : '✘'}</td>
                    <td>{item.night ? '✔' : '✘'}</td>
                    <td>{item.instructions}</td>
                    <td>{item.duration}</td>
                    <td><button className="btn btn-danger" onClick={() => handleDeleteItem(item.item_id)}>Delete</button></td>
                  </tr>
                ))} */}

              </tbody>
            
            </table>





            {/* {prescribedMedicines.map((medicine, index) => (
                                <tr key={index}>
                                    <td>{medicine.medicineId}</td>
                                    <td>{medicine.dosage}</td>
                                    <td>{medicine.morning ? '✔' : '✘'}</td>
                                    <td>{medicine.afternoon ? '✔' : '✘'}</td>
                                    <td>{medicine.night ? '✔' : '✘'}</td>
                                    <td>{medicine.instructions}</td>
                                    <td>{medicine.duration}</td> } */}


            {/* <td><button className="btn btn-danger" onClick={() => setPrescribedMedicines(prescribedMedicines.filter((_, i) => i !== index))}>Remove</button></td> */}
            {/* </tr> */}
            {/* ))} */}

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




    </>





  );
};


export default Prescription;
