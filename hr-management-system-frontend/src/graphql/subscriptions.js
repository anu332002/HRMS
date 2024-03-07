/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
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
export const onCreateLeave = /* GraphQL */ `
  subscription OnCreateLeave($filter: ModelSubscriptionLeaveFilterInput) {
    onCreateLeave(filter: $filter) {
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
export const onUpdateLeave = /* GraphQL */ `
  subscription OnUpdateLeave($filter: ModelSubscriptionLeaveFilterInput) {
    onUpdateLeave(filter: $filter) {
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
export const onDeleteLeave = /* GraphQL */ `
  subscription OnDeleteLeave($filter: ModelSubscriptionLeaveFilterInput) {
    onDeleteLeave(filter: $filter) {
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
export const onCreateAttendance = /* GraphQL */ `
  subscription OnCreateAttendance(
    $filter: ModelSubscriptionAttendanceFilterInput
  ) {
    onCreateAttendance(filter: $filter) {
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
export const onUpdateAttendance = /* GraphQL */ `
  subscription OnUpdateAttendance(
    $filter: ModelSubscriptionAttendanceFilterInput
  ) {
    onUpdateAttendance(filter: $filter) {
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
export const onDeleteAttendance = /* GraphQL */ `
  subscription OnDeleteAttendance(
    $filter: ModelSubscriptionAttendanceFilterInput
  ) {
    onDeleteAttendance(filter: $filter) {
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
export const onCreatePerformanceReview = /* GraphQL */ `
  subscription OnCreatePerformanceReview(
    $filter: ModelSubscriptionPerformanceReviewFilterInput
  ) {
    onCreatePerformanceReview(filter: $filter) {
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
export const onUpdatePerformanceReview = /* GraphQL */ `
  subscription OnUpdatePerformanceReview(
    $filter: ModelSubscriptionPerformanceReviewFilterInput
  ) {
    onUpdatePerformanceReview(filter: $filter) {
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
export const onDeletePerformanceReview = /* GraphQL */ `
  subscription OnDeletePerformanceReview(
    $filter: ModelSubscriptionPerformanceReviewFilterInput
  ) {
    onDeletePerformanceReview(filter: $filter) {
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
export const onCreatePayroll = /* GraphQL */ `
  subscription OnCreatePayroll($filter: ModelSubscriptionPayrollFilterInput) {
    onCreatePayroll(filter: $filter) {
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
export const onUpdatePayroll = /* GraphQL */ `
  subscription OnUpdatePayroll($filter: ModelSubscriptionPayrollFilterInput) {
    onUpdatePayroll(filter: $filter) {
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
export const onDeletePayroll = /* GraphQL */ `
  subscription OnDeletePayroll($filter: ModelSubscriptionPayrollFilterInput) {
    onDeletePayroll(filter: $filter) {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onCreateDocument(filter: $filter) {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onUpdateDocument(filter: $filter) {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onDeleteDocument(filter: $filter) {
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
