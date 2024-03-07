import React from 'react';
import EmployeeInformationManagement from './components/EmployeeInformationManagement.js';
import LeaveAttendance from './components/LeaveAttendance.js';
import PerformanceEvaluation from './components/PerformanceEvaluation.js';
import PayrollProcessing from './components/PayrollProcessing.js';
import DocumentManagement from './components/DocumentManagement.js';
import './App.css'; // Import global styles if needed

function App() {
  return (
    <div className="app-container">
      <h1>HR Management System</h1>
      
      {/* Employee Information Management */}
      <EmployeeInformationManagement />

      {/* Leave and Attendance Tracking */}
      <LeaveAttendance />

      {/* Performance Evaluation */}
      <PerformanceEvaluation />

      {/* Payroll Processing */}
      <PayrollProcessing />

      {/* Document Management */}
      <DocumentManagement />
    </div>
  );
}

export default App;
