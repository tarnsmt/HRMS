<template>
  <div>
    <div class="card col-sm-8 col-md-offset-2">
      <div class="card-header">
        <h4 class="title">{{ projectInfo.employee }}'s task in {{ projectInfo.project }}</h4>
        <!-- <p>{{ projectInfo.description }}</p> -->
        <p class="category">{{ projectInfo.description }}</p>
      </div>
      <div class="card-content row">
        <div class="col-sm-12">
          <el-table :data="taskData">
            <el-table-column type="index" width="60"></el-table-column>
            <el-table-column prop="Topic" label="Task" width="300"></el-table-column>
            <el-table-column :min-width="120" fixed="right" label="Edit">
              <template slot-scope="props">
                <router-link to="/pages/eachtaskedit">
                  <a
                    class="btn btn-simple btn-xs btn-warning btn-icon edit"
                    @click="handleEdit(props.$index, props.row)"
                  >
                    <i class="ti-pencil-alt"></i>
                  </a>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn } from "element-ui";
import PSwitch from "src/components/UIComponents/Switch.vue";
import { jobManagementService } from "src/services/JobManagementService";

Vue.use(Table);
Vue.use(TableColumn);
export default {
  components: {
    PSwitch
  },
  props: {
    employeeId: {
      type: String
    },
    projectId: {
      type: String
    }
  },
  data() {
    return {
      projectInfo: {
        employee: localStorage.getItem("storageEmployee"),
        project: localStorage.getItem("storageProject")
      },
      taskData: [
        {
          Topic: "Task1 for employee A1"
        },
        {
          Topic: "Task2 for employee A1"
        },
        {
          Topic: "Task3 for employee A1"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      localStorage.setItem("storageTaskDescription", row.taskTopic);
    },
    getTasks(employeeId) {
      jobManagementService. getTasksByEmployeeId(this.projectId,this.employeeId).then(
        result => {
          this.taskData = result
        }
      )
    }
  },
  mounted: function(){
    this.getTasks()
  }
};
</script>
<style>
</style>
