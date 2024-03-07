import React, { useState, useEffect, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import styles from './DocumentManagement.module.css';

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const api = generateClient('hrms-dev');

  // Use useCallback to memoize the fetchDocuments function
  const fetchDocuments = useCallback(async () => {
    try {
      const response = await api.listDocuments();
      setDocuments(response.items);
    } catch (error) {
      console.error('Error fetching documents', error);
    }
  }, [api]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadDocument = async () => {
    try {
      await api.createDocument({ input: formData });
      alert('Document uploaded successfully');
      fetchDocuments();
    } catch (error) {
      console.error('Error uploading document', error);
      alert('Error uploading document. Please try again.');
    }
  };

  return (
    <div className={styles['document-management-container']}>
      <h2>Document Management</h2>
      <div className={styles['form-group']}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={uploadDocument} className={styles['submit-button']}>
        Upload Document
      </button>

      <div className={styles['documents-list']}>
        <h3>Documents</h3>
        <ul>
          {documents.map((document) => (
            <li key={document.docId}>
              {`ID: ${document.docId}, Title: ${document.title}, Content: ${document.content}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentManagement;
