export default [
  {
    name: 'Dashboard',
    icon: 'ti-panel',
    collapsed: false,
    children: [{
      name: 'Overview',
      path: '/admin/overview'
    },
    {
      name: 'User',
      path: '/admin/user'
    }]
  },
  {
    name: 'Employee',
    icon: 'ti-user',
    path: '/pages/useredit/${employeeId}'
  }
]
