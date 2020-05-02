import axios from 'axios'

axios.defaults.headers.common = { 'Authorization': 'bearer ' + localStorage.getItem("user-token") }

class JobManagementService {
    base_Url
    constructor() {
        this.base_Url = "/job-management/"
    }
    getProject() {
        let url = this.base_Url + "projects"
        return axios.get(url).then(
            response => {
                return response.data
            }
        )
    }

    getTaskByProject(projectId) {
        let url = this.base_Url + "projects/" + projectId
        return axios.get(url).then(
            response => {
                return response.data
            }
        )
    }

    getAllProjects() {
        let url = this.base_Url + "projects?role=admin"
        return axios.get(url).then(
            response => {
                let projects = []
                for (var element of response.data) {
                    if (element.Employee_ID != undefined) {
                        projects.push({
                            id: element.Project.ID,
                            project: element.Project.Name,
                            description: element.Project.Department,
                            active: true,
                            start: this.formatDate(new Date(element.Project.Start_date)),
                            due: this.formatDate(new Date(element.Project.Due_date)),
                        })
                    }
                    else {
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
                    if (employee.Role != "inactive")
                        taskInfo.push({
                            employee: employee.Employee_ID
                        })
                }
                response.data.taskInfo = taskInfo
                return response.data
            }
        )
    }

    createProject(payload) {
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

    updateProject(projectId, payload) {
        let members = []
        for (let employee of payload.Members) {
            members.push(employee)
        }
        let url = this.base_Url + "projects/" + projectId + "?role=admin"
        return axios.put(url, payload).then(
            response => {
                console.log(response.data)
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }

    getTasksByEmployeeId(projectId, employeeId) {
        let url = this.base_Url + "employee/" + employeeId + "/projects/" + projectId + "?role=admin"
        return axios.get(url).then(
            response => {
                let tasks = []
                for (let task of response.data)
                    tasks.push(task)
                return tasks
            }
        )
    }

    updateEachTask(projectId, employeeId, taskId) {
        let url = this.base_Url + "employee/" + employeeId + "/projects/" + projectId + "?role=admin"
    }

    addTask(projectId, payload) {
        let url = this.base_Url + "projects/" + projectId
        return axios.post(url, payload).then(
            response => {
                console.log(response.data)
                return response.data
            }
        )
    }


    formatDate(date) {
        return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
    }
}

export const jobManagementService = new JobManagementService()