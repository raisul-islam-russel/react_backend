import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Prescription() {
  const baseUrl = 'http://localhost/raisul/phpproject/backend/';

  const [doctor, setDoctor] = useState([]);
  const [SelectedDoctor, setSelectedDoctor] = useState(null);

  const [patient, setPatient] = useState([]);
  const [SelectedPatient, setSelectedPatient] = useState(null);

  const [medicine, setMedicine] = useState([]);
  const [prescribedMedicine, setPrescribedMedicine] = useState({
    medicine_id: '',
    medicine_name: '',
    dosage: '',
    morning: 1,
    afternoon: 1,
    night: 1,
    instructions: '',
    duration: '',
  });

  const [prescribedMedicines, setPrescribedMedicines] = useState([]);
  const [advice, setAdvice] = useState('');
  const [selectedTests, setSelectedTests] = useState([]);
  const [followUpDate, setFollowUpDate] = useState('');

  const fetchMedicine = () => {
    axios.get(baseUrl + 'api/medicine/medicine_api/').then((response) => {
      setMedicine(response.data.medicines);
    });
  };

  const fetchPatient = () => {
    axios.get(baseUrl + 'api/patient/patient_api/').then((response) => {
      setPatient(response.data.patients);
    });
  };

  const fetchDoctor = () => {
    axios.get(baseUrl + 'api/doctor/doctor_api/').then((response) => {
      setDoctor(response.data.doctors);
    });
  };

  useEffect(() => {
    fetchDoctor();
    fetchPatient();
    fetchMedicine();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'medicine') {
      const { id, name } = JSON.parse(value);
      setPrescribedMedicine((prev) => ({
        ...prev,
        medicine_id: id,
        medicine_name: name,
      }));
    } else {
      setPrescribedMedicine((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSelectedPatient = (e) => {
    const { value } = e.target;
    setSelectedPatient(JSON.parse(value));
  };

  const handleSelectedDoctor = (e) => {
    const { value } = e.target;
    setSelectedDoctor(JSON.parse(value));
  };

  const handleSetAllItems = () => {
    const data = [...prescribedMedicines, prescribedMedicine];
    setPrescribedMedicines(data);
  };

  const handleItemDelete = (index) => {
    const updatedMedicines = prescribedMedicines.filter((_, i) => i !== index);
    setPrescribedMedicines(updatedMedicines);
  };

  const handleClearAll = () => {
    setPrescribedMedicines([]);
  };

  const handleAdviceChange = (e) => {
    setAdvice(e.target.value);
  };

  const handleTestChange = (e) => {
    const { options } = e.target;
    const tests = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        tests.push(options[i].value);
      }
    }
    setSelectedTests(tests);
  };

  const handleFollowUpDateChange = (e) => {
    setFollowUpDate(e.target.value);
  };

  const handleProcessOrder = () => {
    const data = {
      doctor_id: SelectedDoctor.id,
      patient_id: SelectedPatient.id,
      prescribed_medicine: prescribedMedicines,
    };

    axios.post(baseUrl + 'api/PrescribedMedicine/save', data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">
          <strong>Doc Clinic Telemedicine</strong>
        </h1>
        <p>
          <strong>Address:</strong> Dhanmondi, Dhaka, Bangladesh
        </p>
        <p>
          <strong>Contact:</strong> 01675600847
        </p>
      </div>

      {/* Prescription Info */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p>
            <strong>Prescription Number:</strong> PRS-
            {new Date().toISOString().slice(0, 10).replace(/-/g, '')}
            {Math.floor(Math.random() * 100)}
          </p>
          <p>
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-info" onClick={handleProcessOrder}>
            Process
          </button>
          <button className="btn btn-outline-secondary" onClick={() => window.print()}>
            Print
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => alert('CSV functionality not implemented')}
          >
            CSV
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => alert('Email functionality not implemented')}
          >
            Email
          </button>

        </div>
      </div>

      {/* Doctor & Patient Info */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="card-title text-primary">Doctor's Details</h5>
            <select name="doctor" onChange={handleSelectedDoctor} className="form-select mb-2">
              <option value="">Select Doctor</option>
              {doctor.map((data, i) => (
                <option key={i} value={JSON.stringify(data)}>
                  {data.name}
                </option>
              ))}
            </select>

            {SelectedDoctor && (
              <div>
                <p>
                  <strong>Specialization: </strong> {SelectedDoctor.specialization}
                </p>
                <p>
                  <strong>Phone: </strong> {SelectedDoctor.contact_number}
                </p>
                <p>
                  <strong>Email: </strong> {SelectedDoctor.email}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="card-title text-primary">Patient's Details</h5>
            <select name="patient" onChange={handleSelectedPatient} className="form-select mb-2">
              <option value="">Select Patient</option>
              {patient.map((data, i) => (
                <option key={i} value={JSON.stringify(data)}>
                  {data.name}
                </option>
              ))}
            </select>

            {SelectedPatient && (
              <div>
                <p>
                  <strong>Name: </strong> {SelectedPatient.name}
                </p>
                <p>
                  <strong>Gender: </strong> {SelectedPatient.gender}
                </p>
                <p>
                  <strong>Phone: </strong> {SelectedPatient.phone}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

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
                <th>
                  <button className="btn btn-danger" onClick={handleClearAll}>
                    Clear All
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select name="medicine" onChange={handleChange} className="form-select mb-2">
                    <option value="">Select Medicine</option>
                    {medicine?.map((data, i) => (
                      <option key={i} value={JSON.stringify(data)}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td>
                  <select name="dosage" className="form-select mb-2" onChange={handleChange}>
                    <option value="">Select Dosage</option>
                    <option value="250 mg">250 mg</option>
                    <option value="500 mg">500 mg</option>
                    <option value="100 mg">100 mg</option>
                  </select>
                </td>

                <td>
                  <select name="morning" onChange={handleChange}>
                    <option value="1">&#10004;</option>
                    <option value="0">&#10006;</option>
                  </select>
                </td>

                <td>
                  <select name="afternoon" onChange={handleChange}>
                    <option value="1">&#10004;</option>
                    <option value="0">&#10006;</option>
                  </select>
                </td>

                <td>
                  <select name="night" onChange={handleChange}>
                    <option value="1">&#10004;</option>
                    <option value="0">&#10006;</option>
                  </select>
                </td>

                <td>
                  <select name="instructions" className="form-select mb-2" onChange={handleChange}>
                    <option value="">Select Instructions</option>
                    <option value="Before Meal">Before Meal</option>
                    <option value="After Meal">After Meal</option>
                  </select>
                </td>

                <td>
                  <select name="duration" className="form-select mb-2" onChange={handleChange}>
                    <option value="">Select Duration</option>
                    <option value="1 Week">1 Week</option>
                    <option value="2 Week">2 Week</option>
                    <option value="3 Week">3 Week</option>
                  </select>
                </td>

                <th>
                  <button onClick={handleSetAllItems} className="btn btn-primary">
                    Add
                  </button>
                </th>
              </tr>

              {prescribedMedicines.map((medicine, index) => (
                <tr key={index}>
                  <td>{medicine.medicine_name}</td>
                  <td>{medicine.dosage}</td>
                  <td>{medicine.morning == 1 ? '✔' : '✘'}</td>
                  <td>{medicine.afternoon == 1 ? '✔' : '✘'}</td>
                  <td>{medicine.night == 1 ? '✔' : '✘'}</td>
                  <td>{medicine.instructions}</td>
                  <td>{medicine.duration}</td>
                  <td>
                    <button
                      onClick={() => handleItemDelete(index)}
                      className="btn btn-danger"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* Diagnosis Section */}
      <div className="card p-3 mb-4">
        <h5 className="card-title text-primary">Primary Diagnosis & Advice</h5>
        <textarea
          className="form-control"
          value={advice}
          onChange={handleAdviceChange}
          rows="3"
        ></textarea>
      </div>


      {/* Recommended Tests */}
      <div className="card p-3 mb-4">
        <h5 className="card-title text-primary">Recommended Tests</h5>
        <select multiple className="form-select" onChange={handleTestChange}>
          <option value="Blood Test">Blood Test</option>
          <option value="X-Ray">X-Ray</option>
          <option value="MRI">MRI</option>
          <option value="Ultrasound">Ultrasound</option>
          <option value="CT Scan">CT Scan</option>
          <option value="EKG">EKG</option>
          <option value="Stress Test">Stress Test</option>
          <option value="Electrocardiogram">Electrocardiogram</option>
          <option value="Mammogram">Mammogram</option>
        </select>
        <ul>
          {selectedTests.map((test, index) => (
            <li key={index}>{test}</li>
          ))}
        </ul>
      </div>

      {/* Next Follow-Up */}
      <div className="alert alert-info">
        <strong>Next Follow-Up Date:</strong>
        <input
          type="date"
          className="form-control"
          value={followUpDate}
          onChange={handleFollowUpDateChange}
        />
      </div>

      {/* Footer */}
      <div className="text-end mt-5">
        <p className="fw-bold mb-0">Doctor's Signature</p>
        <div
          className="border-top border-primary mt-3"
          style={{ width: '200px', marginLeft: 'auto' }}
        ></div>
      </div>
    </div>
  );
}

export default Prescription;
