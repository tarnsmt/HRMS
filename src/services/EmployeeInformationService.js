import axios from 'axios'

axios.defaults.headers.common = { 'Authorization': 'bearer ' + localStorage.getItem("user-token") }

class EmployeeInformationService {
    base_Url
    constructor() {
        this.base_Url = process.env.url + "/employee-information"
    }

    getAllEmployee() {
        let url = this.base_Url + "?role=admin"
        return axios.get(url).then(
            response => {
                if (response.data.employee_id != undefined) {
                    response.data.isAdmin = false
                    return [response.data]
                }
                for (let employee of response.data) {
                    employee.id = employee.employee_id
                }
                response.data.isAdmin = true
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }
    getEmployeeById(employeeId) {
        let url = this.base_Url + "/employee/" + employeeId + "?role=admin"
        return axios.get(url).then(
            response => {
                response.data.id = response.data.employee_id
                return response.data
            }
        ).catch(error => {
            let url = this.base_Url
            return axios.get(url).then(
                response => {
                    response.data.isAdmin = false
                    return response.data
                })
        })
    }

    updateEmployeeById(employeeId, payload) {
        let url = this.base_Url + "/employee/" + employeeId + "?role=admin"
        return axios.put(url, payload).then(
            response => {
                response.data.id = response.data.employee_id
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }

    createEmployee(payload) {
        let url = this.base_Url + "?role=admin"
        return axios.post(url, payload).then(
            response => {
                response.data.id = response.data.employee_id
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }


}

export const employeeInformationService = new EmployeeInformationService()