<template>
  <div class="row">
        <div class="col-md-4 card">
      <div class="card-header"></div>
      <div class="card-content row">
        <div class="col-sm-6">
          <h4 class="card-title">Employee_id</h4>
          <p class="category">Base_salary </p>
          <p class="category">Base_hours </p>
          <p class="category">Overtime_rate </p>
          <p class="category">Bank_account </p>
          <br>
        </div>
      </div>
    </div>

    <div class="col-md-7 card" style="margin-left:20px">
      <div class="card-content row">
        <div class="col-sm-12">
          <el-table class="table-striped" :data="queriedData" border style="width: 100%">
            <el-table-column
              v-for="column in tableColumns"
              :key="column.label"
              :min-width="column.minWidth"
              :prop="column.prop"
              :label="column.label"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn, Select, Option } from "element-ui";
import users from "./users";
import { salaryManagementService } from "src/services/SalaryManagementService";

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
export default {
  computed: {
    pagedData() {
      return this.tableData.slice(this.from, this.to);
    }
  },
  props: {
    employeeId: {
      type: String
    }
  },
  data() {
    return {
      tableColumns: [
        {
          prop: "employee_id",
          label: "ID",
          minWidth: 120
        },
        {
          prop: "tax",
          label: "Tax",
          minWidth: 140
        },
        {
          prop: "total_salary",
          label: "Total",
          minWidth: 100
        }
      ],
      tableData: users
    };
  },
  methods: {
    getEmployee() {
      employeeInformationService.getEmployeeById(this.id).then(result => {
        this.user = result;
      });
    },
    handleLike(index, row) {
      alert(`Your want to like ${row.name}`);
    },
    handleEdit(index, row) {
      alert(`Your want to edit ${row.name}`);
    },
    handleDelete(index, row) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === row.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    },
    // "employee_id": "60090022",
    // "base_salary": 50000,
    // "base_hours": 160,
    // "overtime_rate": 100,
    // "bank_account": "4223475"
    getPayroll() {
      salaryManagementService
        .getPayrollById(this.employeeId)
        //config for show Information
        .then(result => {});
    },

    getPayment(){
      salaryManagementService.getPaymentById(this.employeeId).then(
        result => {
          this.tableData = result
        }
      )
    }
  },
  mounted() {
    this.getPayroll();
    this.getPayment();
    this.getEmployee();
  }
};
</script>
<style>
</style>
