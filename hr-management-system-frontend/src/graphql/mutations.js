/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      empId
      name
      position
      contact
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      empId
      name
      position
      contact
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      empId
      name
      position
      contact
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLeave = /* GraphQL */ `
  mutation CreateLeave(
    $input: CreateLeaveInput!
    $condition: ModelLeaveConditionInput
  ) {
    createLeave(input: $input, condition: $condition) {
      leaveId
      empId
      startDate
      endDate
      reason
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLeave = /* GraphQL */ `
  mutation UpdateLeave(
    $input: UpdateLeaveInput!
    $condition: ModelLeaveConditionInput
  ) {
    updateLeave(input: $input, condition: $condition) {
      leaveId
      empId
      startDate
      endDate
      reason
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLeave = /* GraphQL */ `
  mutation DeleteLeave(
    $input: DeleteLeaveInput!
    $condition: ModelLeaveConditionInput
  ) {
    deleteLeave(input: $input, condition: $condition) {
      leaveId
      empId
      startDate
      endDate
      reason
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAttendance = /* GraphQL */ `
  mutation CreateAttendance(
    $input: CreateAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    createAttendance(input: $input, condition: $condition) {
      attendanceId
      empId
      date
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAttendance = /* GraphQL */ `
  mutation UpdateAttendance(
    $input: UpdateAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    updateAttendance(input: $input, condition: $condition) {
      attendanceId
      empId
      date
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAttendance = /* GraphQL */ `
  mutation DeleteAttendance(
    $input: DeleteAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    deleteAttendance(input: $input, condition: $condition) {
      attendanceId
      empId
      date
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPerformanceReview = /* GraphQL */ `
  mutation CreatePerformanceReview(
    $input: CreatePerformanceReviewInput!
    $condition: ModelPerformanceReviewConditionInput
  ) {
    createPerformanceReview(input: $input, condition: $condition) {
      reviewId
      empId
      year
      rating
      comments
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePerformanceReview = /* GraphQL */ `
  mutation UpdatePerformanceReview(
    $input: UpdatePerformanceReviewInput!
    $condition: ModelPerformanceReviewConditionInput
  ) {
    updatePerformanceReview(input: $input, condition: $condition) {
      reviewId
      empId
      year
      rating
      comments
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePerformanceReview = /* GraphQL */ `
  mutation DeletePerformanceReview(
    $input: DeletePerformanceReviewInput!
    $condition: ModelPerformanceReviewConditionInput
  ) {
    deletePerformanceReview(input: $input, condition: $condition) {
      reviewId
      empId
      year
      rating
      comments
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPayroll = /* GraphQL */ `
  mutation CreatePayroll(
    $input: CreatePayrollInput!
    $condition: ModelPayrollConditionInput
  ) {
    createPayroll(input: $input, condition: $condition) {
      payrollId
      empId
      month
      year
      salary
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePayroll = /* GraphQL */ `
  mutation UpdatePayroll(
    $input: UpdatePayrollInput!
    $condition: ModelPayrollConditionInput
  ) {
    updatePayroll(input: $input, condition: $condition) {
      payrollId
      empId
      month
      year
      salary
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePayroll = /* GraphQL */ `
  mutation DeletePayroll(
    $input: DeletePayrollInput!
    $condition: ModelPayrollConditionInput
  ) {
    deletePayroll(input: $input, condition: $condition) {
      payrollId
      empId
      month
      year
      salary
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      docId
      empId
      title
      description
      url
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
      docId
      empId
      title
      description
      url
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
      docId
      empId
      title
      description
      url
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
