/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        empId
        name
        position
        contact
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLeave = /* GraphQL */ `
  query GetLeave($id: ID!) {
    getLeave(id: $id) {
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
export const listLeaves = /* GraphQL */ `
  query ListLeaves(
    $filter: ModelLeaveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAttendance = /* GraphQL */ `
  query GetAttendance($id: ID!) {
    getAttendance(id: $id) {
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
export const listAttendances = /* GraphQL */ `
  query ListAttendances(
    $filter: ModelAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        attendanceId
        empId
        date
        status
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPerformanceReview = /* GraphQL */ `
  query GetPerformanceReview($id: ID!) {
    getPerformanceReview(id: $id) {
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
export const listPerformanceReviews = /* GraphQL */ `
  query ListPerformanceReviews(
    $filter: ModelPerformanceReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerformanceReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPayroll = /* GraphQL */ `
  query GetPayroll($id: ID!) {
    getPayroll(id: $id) {
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
export const listPayrolls = /* GraphQL */ `
  query ListPayrolls(
    $filter: ModelPayrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayrolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
