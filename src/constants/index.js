/* eslint-disable no-useless-escape */
const CONSTANTS = {
  STATE_LIST: [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ],
  SKILL_LIST: [
    { displayName: 'Java', name: 'java' },
    { displayName: 'Python', name: 'python' },
    { displayName: 'Javascript', name: 'javascript' },
    { displayName: 'Vue.js', name: 'vue.js' },
    { displayName: 'Node.js', name: 'node.js' },
    { displayName: 'Nuxt.js', name: 'nuxt.js' }
  ],
  DEPARTMENT_LIST: [
    'Quality Analyst',
    'Product Developer',
    'Bussiness Analyst',
    'DevOps',
    'Human Resources'
  ],
  POSITION_LIST: [
    'Manager',
    'Assistant Manager',
    'Team Leader',
    'Employee'
  ],
  EMPLOYEE_TYPE_LIST: [
    'Full Time',
    'Part Time'
  ],
  EMPLOYEE_DETAIL: {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    address: {
      current: '',
      permanent: ''
    },
    city: '',
    state: '',
    zipCode: '',
    mobile: '',
    email: '',
    employeeDetails: {
      department: '',
      position: '',
      type: '',
      skills: [],
      salary: '',
      isContract: false,
      contract: {
        startDate: '',
        endDate: ''
      },
      csvFile: {
        id: '',
        fileName: '',
        contentType: '',
        base64URL: '',
        size: 0
      }
    },
    bankDetails: {
      bank: '',
      branch: '',
      accountNumber: '',
      ifsc: ''
    }
  },
  EMPLOYEE_FORM_RULES: {
    firstName: [
      { required: true, message: 'First Name is required', trigger: 'blur' }
    ],
    lastName: [
      { required: true, message: 'Last Name is required', trigger: 'blur' }
    ],
    dob: [
      { required: true, message: 'Date of Birth is required' }
    ],
    gender: [
      { required: true, message: 'Gender is required', trigger: 'change' }
    ],
    'address.current': [
      { required: true, message: 'Current Address is required', trigger: 'blur' }
    ],
    'address.permanent': [
      { required: true, message: 'Permanent Address is required', trigger: 'blur' }
    ],
    city: [
      { required: true, message: 'City is required', trigger: 'blur' }
    ],
    state: [
      { required: true, message: 'State is required', trigger: 'change' }
    ],
    zipCode: [
      { required: true, message: 'Zipcode is required', trigger: 'blur' },
      { pattern: /^(\d{6})$/, message: 'Enter a valid zipcode', trigger: 'blur' },
    ],
    mobile: [
      { required: true, message: 'Mobile number is required', trigger: 'blur' },
      { pattern: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/, message: 'Enter a Valid Number', trigger: 'blur' },
    ],
    email: [
      { required: true, message: 'Email is required', trigger: 'blur' },
      { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Enter a Valid Email {for example abc@gmail.com}', trigger: 'blur' }
    ],
    'employeeDetails.department': [
      { required: true, message: 'Department is required', trigger: 'change' }
    ],
    'employeeDetails.position': [
      { required: true, message: 'Position is required', trigger: 'change' }
    ],
    'employeeDetails.type': [
      { required: true, message: 'Employee Type is required', trigger: 'change' }
    ],
    'employeeDetails.skills': [
      { required: true, type: 'array', message: 'Atleast select one skill', trigger: 'change' }
    ],
    'employeeDetails.salary': {
      required: true, type: 'number', message: 'Salary is required', trigger: 'blur'
    },
    'bankDetails.bank': [
      { required: true, message: 'Bank Name is required', trigger: 'blur' }
    ],
    'bankDetails.branch': [
      { required: true, message: 'Branch Name is required', trigger: 'blur' }
    ],
    'bankDetails.accountNumber': [
      { required: true, type: 'number', message: 'Account Number is required', trigger: 'blur' },
      { pattern: /^\d{9,18}$/, message: 'Enter a valid account number', trigger: 'blur' }
    ],
    'bankDetails.ifsc': [
      { required: true, message: 'IFSC Code is required', trigger: 'blur' },
      { pattern: /^[A-Z]{4}0[A-Z0-9]{6}$/, message: 'Enter a valid IFSC Code', trigger: 'blur' }
    ]
  }
}
export default CONSTANTS