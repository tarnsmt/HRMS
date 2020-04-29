<template>
  <div class="row">
    <div class="col-md-12">
      <p class="category">Information of all employees in the company</p>
    </div>
    <div class="col-md-12 card">
      <div class="card-header"></div>
      <div class="card-content row">
        <div class="col-sm-6">
          <el-select class="select-default" v-model="pagination.perPage" placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in pagination.perPageOptions"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <label>
              <input
                type="search"
                class="form-control input-sm"
                placeholder="Search records"
                v-model="searchQuery"
                aria-controls="datatables"
              />
            </label>
          </div>
        </div>
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
        <div class="col-sm-6 pagination-info">
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
        </div>
        <div class="col-sm-6">
          <p-pagination
            class="pull-right"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="pagination.total"
          ></p-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn, Select, Option } from "element-ui";
import PPagination from "src/components/UIComponents/Pagination.vue";
import users from "./users";
import { salaryManagementService } from "src/services/SalaryManagementService";

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
export default {
  components: {
    PPagination
  },
  computed: {
    pagedData() {
      return this.tableData.slice(this.from, this.to);
    },
    /***
     * Searches through table data and returns a paginated array.
     * Note that this should not be used for table with a lot of data as it might be slow!
     * Do the search and the pagination on the server and display the data retrieved from server instead.
     * @returns {computed.pagedData}
     */
    queriedData() {
      if (!this.searchQuery) {
        this.pagination.total = this.tableData.length;
        return this.pagedData;
      }
      let result = this.tableData.filter(row => {
        let isIncluded = false;
        for (let key of this.propsToSearch) {
          let rowValue = row[key].toString();
          if (rowValue.includes && rowValue.includes(this.searchQuery)) {
            isIncluded = true;
          }
        }
        return isIncluded;
      });
      this.pagination.total = result.length;
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      this.pagination.total = this.tableData.length;
      return this.tableData.length;
    }
  },
  data() {
    return {
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      searchQuery: "",
      propsToSearch: ["name", "position"],
      tableColumns: [
        {
          prop: "id",
          label: "Id",
          minWidth: 30
        },
        {
          prop: "name",
          label: "Name",
          minWidth: 200
        },
        {
          prop: "position",
          label: "Position",
          minWidth: 120
        },
        {
          prop: "salary",
          label: "Salary",
          minWidth: 100
        }
      ],
      tableData: users
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
    // 
    // "employee_id": "60090022",
    // "base_salary": 50000,
    // "base_hours": 160,
    // "overtime_rate": 100,
    // "bank_account": "4223475"
    getAllPayroll() {
      salaryManagementService.getAllPayroll().then(result => {
        this.tableData = result;
      });
    }
  },
  mounted() {
    this.getAllPayroll();
  }
};
</script>
<style>
</style>
