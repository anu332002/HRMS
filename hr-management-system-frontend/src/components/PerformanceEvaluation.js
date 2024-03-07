import React, { useState, useEffect, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import styles from './PerformanceEvaluation.module.css';

const PerformanceEvaluation = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [formData, setFormData] = useState({ empId: '', rating: '', feedback: '' });

  const api = generateClient('hrms-dev');

  // Use useCallback to memoize the fetchPerformanceEvaluations function
  const fetchPerformanceEvaluations = useCallback(async () => {
    try {
      const response = await api.listPerformanceReviews();
      setEvaluations(response.items);
    } catch (error) {
      console.error('Error fetching performance evaluations', error);
    }
  }, [api]);

  useEffect(() => {
    fetchPerformanceEvaluations();
  }, [fetchPerformanceEvaluations]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitPerformanceEvaluation = async () => {
    try {
      await api.createPerformanceReview({ input: formData });
      alert('Performance evaluation submitted successfully');
      fetchPerformanceEvaluations();
    } catch (error) {
      console.error('Error submitting performance evaluation', error);
      alert('Error submitting performance evaluation. Please try again.');
    }
  };

  return (
    <div className={styles['performance-evaluation-container']}>
      <h2>Performance Evaluation</h2>
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
        <label>Rating:</label>
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Feedback:</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={submitPerformanceEvaluation} className={styles['submit-button']}>
        Submit Performance Evaluation
      </button>

      <div className={styles['evaluations-list']}>
        <h3>Performance Evaluations</h3>
        <ul>
          {evaluations.map((evaluation) => (
            <li key={evaluation.reviewId}>
              {`ID: ${evaluation.reviewId}, Employee ID: ${evaluation.empId}, Rating: ${evaluation.rating}, Feedback: ${evaluation.feedback}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerformanceEvaluation;
