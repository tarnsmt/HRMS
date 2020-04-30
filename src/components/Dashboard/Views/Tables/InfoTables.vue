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
          <!-- search filter for employee info -->
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
          <!-- add employee button -->
          <div class="pull-right">
            <router-link :to="`/pages/useradd`">
            <el-button 
              style="margin-right:10px"
              class="button-new-tag" 
              size="large" 
              @click="updateAddEmployee">
              Add employee
            </el-button>
            </router-link>
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
            <el-table-column label="Status">
              <template slot-scope="props">
                <p-switch v-model="props.row.status" onText="active" value="1" width="130"></p-switch>
              </template>
            </el-table-column>
            <el-table-column :min-width="100" fixed="right" label="Actions">
              <template slot-scope="props">
                <router-link :to="`/pages/useredit/${employeeId}`">
                  <a
                    class="btn btn-simple btn-xs btn-warning btn-icon edit"
                    @click="handleEdit(props.$index, props.row)"
                  >
                    <i class="ti-pencil-alt"></i>
                  </a>
                </router-link>
                <a
                  class="btn btn-simple btn-xs btn-danger btn-icon remove"
                  @click="handleDelete(props.$index, props.row)"
                >
                  <i class="ti-close"></i>
                </a>
              </template>
            </el-table-column>
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
import { Table, TableColumn, Select, Option, Button } from "element-ui";
import PSwitch from "src/components/UIComponents/Switch.vue";
import PPagination from "src/components/UIComponents/Pagination.vue";
import { employeeInformationService } from "src/services/EmployeeInformationService";
import users from "./users";

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
export default {
  components: {
    PPagination, PSwitch, [Button.name]: Button
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
      propsToSearch: ["name", "email"],
      tableColumns: [
        {
          prop: "employee_id",
          label: "Id",
          minWidth: 120
        },
        {
          prop: "name",
          label: "Name",
          minWidth: 140
        },
        {
          prop: "address",
          label: "Address",
          minWidth: 130
        },
        {
          prop: "tel",
          label: "Tel",
          minWidth: 130
        }
      ],
      searchVal: Array,
      tableData: users,
      employeeId: String
    };
  },
  methods: {
    handleEdit(index, row) {
      alert(`Your want to edit ${row.name}`);
      this.employeeId = row.id
    },
    handleDelete(index, row) {
      alert(`Your want to delete ${row.name}`);
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === row.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    },
    // example response
    //  {
    //     "employee_id": "00000000",
    //     "name": "admin@admin",
    //     "date_of_birth": "2020-04-19T00:00:00.000Z",
    //     "gender": 1,
    //     "department": "HR",
    //     "address": "Thailand",
    //     "tel": "000-0000-000",
    //     "status": 1,
    //     "roles": [
    //         {
    //             "id": 30,
    //             "role": "admin"
    //         },
    //         {
    //             "id": 31,
    //             "role": "employee"
    //         }
    //     ]
    // }
    getAllEmployee() {
      employeeInformationService.getAllEmployee().then(result => {
        this.tableData = result;
      });
    }
  },
  mounted: function() {
    this.getAllEmployee();
  }
};
</script>
<style>
</style>
