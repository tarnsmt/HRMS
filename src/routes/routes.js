import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'
import User from 'src/components/Dashboard/Views/Dashboard/User.vue'

// Pages
import UserAdd from 'src/components/Dashboard/Views/Pages/UserAdd.vue'
import UserEdit from 'src/components/Dashboard/Views/Pages/UserEdit.vue'
import EachTaskEdit from 'src/components/Dashboard/Views/Pages/EachTaskEdit.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'

// Forms pages
import TaskForms from 'src/components/Dashboard/Views/Forms/TaskForms.vue'
import EditTaskForms from 'src/components/Dashboard/Views/Forms/EditTaskForms.vue'
import EmployeeEditTask from 'src/components/Dashboard/Views/Forms/EmployeeEditTask.vue'
import AddAccountForms from 'src/components/Dashboard/Views/Forms/AddAccountForms.vue'


// TableList pages
import SalaryTables from 'src/components/Dashboard/Views/Tables/SalaryTables.vue'
import JobManageTables from 'src/components/Dashboard/Views/Tables/JobManageTables.vue'
import InfoTables from 'src/components/Dashboard/Views/Tables/InfoTables.vue'
import TaskTables from 'src/components/Dashboard/Views/Tables/TaskTables.vue'

// Calendar
import Calendar from 'src/components/Dashboard/Views/Calendar/CalendarRoute.vue'

let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/task',
  children: [
    {
      path: 'task',
      name: 'Task Forms',
      component: TaskForms
    },
    {
      path: 'addaccount',
      name: 'Add account for an employee',
      component: AddAccountForms
    }
  ]
}


let taskMenu = {
  path: '/jobManagement',
  component: DashboardLayout,
  children: [
    {
      path: 'project/:projectId/employee/:employeeId',
      name: 'Task Edit Forms',
      component: EditTaskForms,
      props: true
    },
    {
      path: 'project/employeeEditTask',
      name: 'Task Edit Forms For Employee',
      component: EmployeeEditTask,
      props: true
    },
    {
      path: 'project/:projectId',
      name: 'Task Tables',
      component: TaskTables,
      props: true
    }
  ]
}

let salaryMenu = {
  path: '/salaryManagement',
  component: DashboardLayout,
  children: [
    {
      path: ':employeeId',
      name: 'Salary Employee',
      component: SalaryTables,
      props: true
    },
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  children: [
    {
      path: 'salaryManagement',
      name: 'Salary Tables',
      component: SalaryTables
    },
    {
      path: 'jobManagement',
      name: 'Job Management',
      component: JobManageTables,
    },
    {
      path: 'info',
      name: 'Employee Information',
      component: InfoTables
    },
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/useredit',
  children: [
    {
      path: 'useredit/:employeeId',
      name: 'Edit Employee Information',
      component: UserEdit,
      props: true
    },
    {
      path: 'useradd',
      name: 'Add Employee Information',
      component: UserAdd,
    },
    {
      path: 'eachtaskedit',
      name: 'Edit task of the project',
      component: EachTaskEdit
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      }
    ]
  },
  formsMenu,
  tablesMenu,
  salaryMenu,
  pagesMenu,
  taskMenu,
  loginPage,
  registerPage,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User Information',
        component: User
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes