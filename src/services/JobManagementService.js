import axios from 'axios'

axios.defaults.headers.common = { 'Authorization': 'bearer ' + process.env.jwtToken }

class JobManagementService {
    base_Url
    constructor() {
        this.base_Url = "/job-management/"
    }

    getAllProjects() {
        let url = this.base_Url + "projects?role=admin"
        return axios.get(url).then(
            response => {
                let projects = []
                for (let element of response.data) {
                    console.log(element)
                    let result = {
                        id: element.ID,
                        project: element.Name,
                        description:
                            element.Department,
                        active: true,
                        start: this.formatDate(new Date(element.Start_date)),
                        due: this.formatDate(new Date(element.Due_date)),
                    }
                    projects.push(result)
                }
                return projects
            }
        ).catch(error => {
            console.log(error)
        })
    }

    getProjectById(projectId) {
        let url = this.base_Url + "projects/" + projectId + "?role=admin"
        return axios.get(url).then(
            response => {
                let taskInfo = []
                let employeeList = response.data.Members
                for (let employee of employeeList) {
                    console.log(employee)
                    taskInfo.push({
                        employee: employee.Employee_ID
                    })
                }
                return taskInfo
            }
        )
    }

    createProject(payload) {
        let members = []
        for (let element of payload.Members) {
            members.push(String(element).toLocaleLowerCase())
        }
        payload.Members = members

        let start_date = this.formatDate(new Date())
        payload.Start_date = start_date

        payload.Due_date = this.formatDate(new Date(payload.Due_date))
        payload.Status = "active"
        let url = this.base_Url + "projects?role=admin"
        return axios.post(url, payload).then(
            response => {
                return String(response.data.ID)
            }
        )
    }

    getTasksByEmployeeId(projectId, employeeId) {
        let url = this.base_Url + "employee/" + employeeId + "/projects/" + projectId + "?role=admin"
        return axios.get(url).then(
            response => {
                let tasks = []
                for(let task of response.data)
                    tasks.push(task)
                return tasks
            }
        )
    }



    formatDate(date) {
        return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
    }
}

export const jobManagementService = new JobManagementService()