import React, { useState, useEffect, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import styles from './LeaveAttendance.module.css';

const LeaveAttendance = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [formData, setFormData] = useState({ empId: '', startDate: '', endDate: '' });

  const api = generateClient('YourAPIName');

  // Use useCallback to memoize the fetchLeaveRequests function
  const fetchLeaveRequests = useCallback(async () => {
    try {
      const response = await api.listLeaves();
      setLeaveRequests(response.items);
    } catch (error) {
      console.error('Error fetching leave requests', error);
    }
  }, [api]);

  useEffect(() => {
    fetchLeaveRequests();
  }, [fetchLeaveRequests]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitLeaveRequest = async () => {
    try {
      await api.createLeave({ input: formData });
      alert('Leave request submitted successfully');
      fetchLeaveRequests();
    } catch (error) {
      console.error('Error submitting leave request', error);
      alert('Error submitting leave request. Please try again.');
    }
  };

  return (
    <div className={styles['leave-attendance-container']}>
      <h2>Leave and Attendance Tracking</h2>
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
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles['form-group']}>
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={submitLeaveRequest} className={styles['submit-button']}>
        Submit Leave Request
      </button>

      <div className={styles['leave-requests-list']}>
        <h3>Leave Requests</h3>
        <ul>
          {leaveRequests.map((request) => (
            <li key={request.leaveId}>
              {`ID: ${request.leaveId}, Employee ID: ${request.empId}, Start Date: ${request.startDate}, End Date: ${request.endDate}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaveAttendance;
