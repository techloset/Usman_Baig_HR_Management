export type EMPLOYEE_PERSONAL_DATA = {
  [key: string]: string;
  photoURL: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAddress: string;
  dateOfBirth: string;
  address: string;
  city: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  state: string;
  zipCode: string;
};
export type EMPLOYEE_PROFESSIONAL_DATA = {
  [key: string]: string;
  employeeId: string;
  userName: string;
  employmentType: string;
  email: string;
  department: string;
  designation: string;
  workingDays: string;
  joiningDate: string;
  officeLocation: string;
};
export type EMPLOYEE_DOCUMENTS_DATA = {
  appointmentLetter: string;
  salarySlip: string;
  relivingLetter: string;
  experienceLetter: string;
};
export type EMPLOYEE_ACCOUNT_ACCESS_DATA = {
  [key: string]: string;
  email: string;
  slackId: string;
  skypeId: string;
  githubId: string;
};
