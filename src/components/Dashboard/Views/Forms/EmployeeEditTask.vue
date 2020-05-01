<template>
  <!-- individual task table for each employee -->
  <div>
    <div class="card col-sm-8 col-md-offset-2">
      <div class="card-header">
        <!-- add task to employee -->
        <!-- <h4 class="card-title" style="padding-bottom:10px">Task</h4> -->

        <form ref="form" :model="form">
          <div class="row">
            <div class="col-md-12">
              <fg-input type="text" label="Task title" placeholder="Task title" v-model="topic"></fg-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <fg-input
                type="text"
                label="Task description"
                placeholder="Task description"
                v-model="desc"
              ></fg-input>
            </div>
          </div>
          <div class="clearfix"></div>
        </form>
        <el-button class="button-new-tag" size="small" @click="addTask">Add task</el-button>
        <hr />
        <h4 class="card-title">{{projectName}}</h4>
        <!-- <p>{{ projectInfo.description }}</p> -->
        <p class="category">{{projectDes}}</p>
      </div>

      <div class="card-content row">
        <div class="col-sm-12">
          <!-- employee task table -->
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
import { Table, TableColumn, Tag, Input, Button } from "element-ui";

import { jobManagementService } from "src/services/JobManagementService";

Vue.use(Table);
Vue.use(Input);
Vue.use(TableColumn);
export default {
  components: {
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button
  },
  data() {
    return {
      project: "",
      projectId: "",
      projectName: "",
      projectDes: "",
      projectInfo: {
        employee: localStorage.getItem("storageEmployee"),
        project: localStorage.getItem("storageProject")
      },
      topic: "",
      desc: "",
      tags: {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ""
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
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      localStorage.setItem("storageTaskTopic", row.Topic);
      localStorage.setItem("storageTaskDescription", row.Note);
    },
    getTasks(employeeId) {
      console.log(this.project)
      jobManagementService.getTaskByProject(this.projectId).then(result => {
        this.taskData = result;
      });
    },
    addTask() {
      let payload = {
        Topic: this.topic,
        Note: this.desc,
        Status: "complete"
      };
      jobManagementService.addTask(this.projectId, payload).then(() => {
        this.getTasks();
      });
    }
  },

  mounted: function() {
      this.project =JSON.parse(localStorage.getItem("on-project")),
      this.projectId= project.ID,
      this.projectName= project.Name,
      this.projectDes= project.Department,
      this.getTasks();
  }
};
</script>
<style>
</style>
