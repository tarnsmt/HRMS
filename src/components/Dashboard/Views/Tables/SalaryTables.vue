<template>
  <div class="row">
        <div class="col-md-4 card">
      <div class="card-header"></div>
      <div class="card-content row">
        <div class="col-sm-6">
          <h4 class="card-title">{{employeeId}}</h4>
          <p class="category">Base_salary: {{base_salary}} </p>
          <p class="category">Base_hours {{base_hours}}</p>
          <p class="category">Overtime_rate {{overtime_rate}} </p>
          <p class="category">Bank_account {{bank_account}}</p>
          <br>
        </div>
      </div>
    </div>

    <div class="col-md-7 card" style="margin-left:20px">
      <div class="card-content row">
        <div class="col-sm-12">
          <el-table class="table-striped" border style="width: 100%" :data="tableData">
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
          prop: "date",
          label: "Date",
          minWidth: 130
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
      tableData: users,
      base_salary: '',
      base_hours:'',
      overtime_rate:'',
      bank_account:''
    };
  },
  methods: {
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
    getPayroll() {
      salaryManagementService
        .getPayrollById(this.employeeId)
        //config for show Information
        .then(result => {
          this.base_salary = result.base_salary
          this.base_hours = result.base_hours
          this.overtime_rate = result.overtime_rate
          this.bank_account = result.bank_account
        });
    },

    getPayment(){
      salaryManagementService.getPaymentById(this.employeeId).then(
        result => {
          let list = []
          for(let data of result){
              data.date = new Date(data.date).toLocaleString()
              list.push(data)
          }
          this.tableData = result
        }
      )
    }
  },
  mounted() {
    this.getPayroll();
    this.getPayment();
  }
};
</script>
<style>
</style>
