import axios from 'axios'

axios.defaults.headers.common = { 'Authorization': 'bearer ' + process.env.jwtToken }

class SalaryManagementService {
    base_Url
    constructor() {
        this.base_Url = "/salary-management"
    }

    getAllPayroll() {
        let url = this.base_Url + "/payroll?role=admin"
        return axios.get(url).then(
            response => {
                for (let payroll of response.data) {
                    payroll.id = payroll.employee_id
                    payroll.salary = payroll.base_salary
                }
                return response.data
            }
        )
    }

    getPayroll(employee_id) {
        let url = this.base_Url + "/payroll/" + employee_id + "?role=admin"
    }


}

export const salaryManagementService = new SalaryManagementService()