<template>
<!-- individual task table for each employee -->
  <div>
    <div class="card col-sm-8 col-md-offset-2">
      <div class="card-header">
        <!-- add task to employee -->
        <h4 class="card-title" style="padding-bottom:10px">Task</h4>
        <el-tag
          :key="tag"
          v-for="tag in tags.dynamicTags"
          type="primary"
          :closable="true"
          :disable-transitions="false"
          @close="handleClose(tag)"
        >{{tag}}</el-tag>
        <input
          type="text"
          placeholder="Add task"
          class="form-control input-new-tag"
          v-model="tags.inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button class="button-new-tag" size="small" @click="updateProject">save</el-button>
        <hr />
        <h4 class="card-title">{{ projectInfo.employee }}'s task in {{ projectInfo.project }}</h4>
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
import { Table, TableColumn, Tag, Input, Button } from "element-ui";

import { jobManagementService } from "src/services/JobManagementService";

Vue.use(Table);
Vue.use(TableColumn);
export default {
  components: {
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button
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
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      localStorage.setItem("storageTaskTopic", row.Topic);
      localStorage.setItem("storageTaskDescription", row.Note);
    },
    getTasks(employeeId) {
      jobManagementService. getTasksByEmployeeId(this.projectId,this.employeeId).then(
        result => {
          this.taskData = result
        }
      )
    },
    // tag function
    handleClose(tag) {
      this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.tags.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.tags.inputValue;
      if (inputValue) {
        this.tags.dynamicTags.push(inputValue);
      }
      this.tags.inputVisible = false;
      this.tags.inputValue = "";
    }
  },
  
  mounted: function(){
    this.getTasks()
  }
};
</script>
<style>
</style>
