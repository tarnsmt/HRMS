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
    name: 'Forms',
    icon: 'ti-clipboard',
    children: [{
      name: 'Task Forms',
      path: '/forms/task'
    },
    {
      name: 'Account Forms',
      path: '/forms/addaccount'
    }
    ]
  },
  {
    name: 'Tasks',
    icon: 'ti-view-list-alt',
    path: '/table-list/jobManagement'
  },
  {
    name: 'Employee',
    icon: 'ti-user',
    collapsed: true,
    children: [{
      name: 'Information',
      path: '/table-list/info'
    }
    ]
  },
  {
    name: 'Calendar',
    icon: 'ti-calendar',
    path: '/calendar'
  }
]
