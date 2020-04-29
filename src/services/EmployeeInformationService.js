import axios from 'axios'

axios.defaults.headers.common = { 'Authorization': 'bearer ' + process.env.jwtToken }

class EmployeeInformationService {
    base_Url
    constructor() {
        this.base_Url = "/employee-information"
    }

    getAllEmployee() {
        let url = this.base_Url + "?role=admin"
        return axios.get(url).then(
            response => {
                for(let employee of response.data){
                    employee.id = employee.employee_id
                }
                console.log(response.data)
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }
    getEmployeeById(employeeId){
        let url = this.base_Url + "/employee/"+ employeeId +"?role=admin"
        return axios.get(url).then(
            response => {
                    response.data.id = response.data.employee_id
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }

    updateEmployeeById(employeeId,payload){
        let url = this.base_Url + "/employee/"+ employeeId +"?role=admin"
        return axios.put(url,payload).then(
            response => {
                    response.data.id = response.data.employee_id
                return response.data
            }
        ).catch(error => {
            console.log(error)
        })
    }

    craeteEmployeeById(payload){
        let url = this.base_Url + "?role=admin"
        return axios.post(url,payload).then(
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