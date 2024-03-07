import React, { useState, useEffect, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import styles from './PayrollProcessing.module.css';

const PayrollProcessing = () => {
  const [payrollData, setPayrollData] = useState([]);
  const [formData, setFormData] = useState({ empId: '', salary: '', deductions: '' });

  const api = generateClient('hrms-dev');

  // Use useCallback to memoize the fetchPayrollData function
  const fetchPayrollData = useCallback(async () => {
    try {
      if (api.listPayrolls) {
        const response = await api.listPayrolls();
        setPayrollData(response.items);
      } else {
        console.error('listPayrolls function is not available in the API client');
      }
    } catch (error) {
      console.error('Error fetching payroll data', error);
    }
  }, [api]);

  useEffect(() => {
    fetchPayrollData();
  }, [fetchPayrollData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const processPayroll = async () => {
    try {
      if (api.createPayroll) {
        await api.createPayroll({ input: formData });
        alert('Payroll processed successfully');
        fetchPayrollData();
      } else {
        console.error('createPayroll function is not available in the API client');
      }
    } catch (error) {
      console.error('Error processing payroll', error);
      alert('Error processing payroll. Please try again.');
    }
  };

  return (
    <div className={styles['payroll-processing-container']}>
      <h2>Payroll Processing</h2>
      <div className={styles['form-group']}>
        <label>Employee ID:</label>
        <input
          type="text"
          name="empId"
          value={formData.empId}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Salary:</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Deductions:</label>
        <input
          type="text"
          name="deductions"
          value={formData.deductions}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={processPayroll} className={styles['submit-button']}>
        Process Payroll
      </button>

      <div className={styles['payroll-data-list']}>
        <h3>Payroll Data</h3>
        <ul>
          {payrollData.map((payroll) => (
            <li key={payroll.payrollId}>
              {`ID: ${payroll.payrollId}, Employee ID: ${payroll.empId}, Salary: ${payroll.salary}, Deductions: ${payroll.deductions}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PayrollProcessing;
