import axios from 'axios'


axios.defaults.headers.common = { 'Authorization': 'bearer ' + localStorage.getItem("user-token")}

class SalaryManagementService {
    base_Url
    constructor() {
        this.base_Url = process.env.url + "/salary-management"
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

    getPayrollById(employee_id) {
        let url = this.base_Url + "/payroll/" + employee_id + "?role=admin"
        return axios.get(url).then(
            response => {
                return response.data
            }
        )
    }

    getPaymentById(employee_id){
        let url = this.base_Url + "/payroll/" + employee_id + "/payment?role=admin"
        return axios.get(url).then(
            response => {
                return response.data
            }
        )
    }


}

export const salaryManagementService = new SalaryManagementService()