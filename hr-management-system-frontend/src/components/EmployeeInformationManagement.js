import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api'; // Import the generateClient function
import styles from './EmployeeInformationManagement.module.css';

const EmployeeInformationManagement = () => {
  const [employeeData, setEmployeeData] = useState({});
  const [formData, setFormData] = useState({ empId: '', name: '', position: '', contact: '' });

  const api = generateClient('hrms-dev'); // Replace 'YourAPIName' with your actual API name

  useEffect(() => {
    // Set up subscription for new employee creation
    const subscription = api.onCreateEmployee().subscribe({
      next: (event) => {
        const newEmployee = event.value.data.onCreateEmployee;
        setEmployeeData(newEmployee);
        alert(`New employee created: ${newEmployee.name}`);
      },
      error: (error) => console.error('Error subscribing to new employee creation', error),
    });

    return () => subscription.unsubscribe(); // Cleanup subscription on component unmount
  }, [api]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEmployee = async () => {
    try {
      // Use the generated API client to add employees
      const response = await api.createEmployee({ input: formData });
      console.log('Employee added successfully', response);
      setEmployeeData(response.data.createEmployee);
      alert('Employee added successfully');
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  const getEmployeeInfo = async () => {
    try {
      // Use the generated API client to fetch employee information
      const response = await api.getEmployee({ empId: formData.empId });
      setEmployeeData(response.data.getEmployee);
    } catch (error) {
      console.error('Error getting employee info', error);
      setEmployeeData({});
    }
  };

  return (
    <div className={styles['employee-info-container']}>
      <h2>Employee Information Management</h2>
      <div className={styles['form-group']}>
        <label className={styles.label}>Employee ID:</label>
        <input
          type="text"
          name="empId"
          value={formData.empId}
          onChange={handleInputChange}
          className={styles['input-field']}
        />
      </div>
      <button onClick={getEmployeeInfo} className={styles.button}>
        Get Employee Info
      </button>
      <div className={styles['form-group']}>
        <label className={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={styles['input-field']}
        />
      </div>
      <div className={styles['form-group']}>
        <label className={styles.label}>Position:</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className={styles['input-field']}
        />
      </div>
      <div className={styles['form-group']}>
        <label className={styles.label}>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className={styles['input-field']}
        />
      </div>
      <button onClick={addEmployee} className={styles.button}>
        Add Employee
      </button>
      <div className={styles['employee-info-display']}>
        <h2>Employee Information</h2>
        <pre>{JSON.stringify(employeeData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default EmployeeInformationManagement;
