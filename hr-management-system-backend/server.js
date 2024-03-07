const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

AWS.config.update({
  region: 'your-region', // replace with your AWS region
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = 'Employees'; // replace with your DynamoDB table name

// Serve the React app
app.use(express.static('build')); // Assuming your React app is built into a 'build' folder

// API endpoint for adding an employee
app.post('/addEmployee', async (req, res) => {
  try {
    const { empId, name, position, contact } = req.body;
    const params = {
      TableName: tableName,
      Item: { empId, name, position, contact },
    };
    await dynamoDB.put(params).promise();
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    console.error('Error adding employee', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for getting employee information
app.get('/getEmployee/:empId', async (req, res) => {
  try {
    const empId = parseInt(req.params.empId);
    const params = {
      TableName: tableName,
      Key: {
        empId,
      },
    };
    const response = await dynamoDB.get(params).promise();

    if (response.Item) {
      res.json(response.Item);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.error('Error getting employee info', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for leave and attendance tracking
app.post('/trackAttendance', async (req, res) => {
  try {
    const { empId, date, status, reason } = req.body;

    if (status === 'Leave') {
      // Leave tracking logic
      console.log(`Leave tracked for Employee ID ${empId} on ${date}: Reason - ${reason || 'N/A'}`);
    } else if (status === 'Present') {
      // Attendance tracking logic
      console.log(`Attendance tracked for Employee ID ${empId} on ${date}: Status - Present`);
    } else {
      res.status(400).json({ error: 'Invalid status. Use either "Leave" or "Present".' });
      return;
    }

    res.status(201).json({ message: 'Attendance/Leave tracked successfully' });
  } catch (error) {
    console.error('Error tracking attendance/leave', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for performance evaluation
app.post('/evaluatePerformance', async (req, res) => {
  try {
    const { empId, rating, feedback } = req.body;

    // Here, you might store performance evaluation information in DynamoDB or any other desired data store.
    // For simplicity, let's just log the information for now.
    console.log(`Performance evaluated for Employee ID ${empId}: Rating - ${rating}, Feedback: ${feedback}`);

    res.status(201).json({ message: 'Performance evaluated successfully' });
  } catch (error) {
    console.error('Error evaluating performance', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for payroll processing
app.post('/processPayroll', async (req, res) => {
  try {
    const { empId, salary, deductions } = req.body;

    // Here, you might process payroll information and update relevant records.
    // For simplicity, let's just log the information for now.
    console.log(`Payroll processed for Employee ID ${empId}: Salary - ${salary}, Deductions: ${deductions}`);

    res.status(201).json({ message: 'Payroll processed successfully' });
  } catch (error) {
    console.error('Error processing payroll', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for document management
app.post('/manageDocument', async (req, res) => {
  try {
    const { empId, documentType, documentURL } = req.body;

    // Here, you might manage documents, store URLs, or update document-related information.
    // For simplicity, let's just log the information for now.
    console.log(`Document managed for Employee ID ${empId}: Type - ${documentType}, URL: ${documentURL}`);

    res.status(201).json({ message: 'Document managed successfully' });
  } catch (error) {
    console.error('Error managing document', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
