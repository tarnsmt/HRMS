<template>
  <div>
    <div class="card col-sm-8 col-md-offset-2">
      <div class="card-header">
        <!-- add employee to project -->
        <h4 class="card-title" style="padding-bottom:10px">Team</h4>
        <el-tag
          :key="tag"
          v-for="tag in tags.dynamicTags"
          type="primary"
          :closable="true"
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <input
          type="text"
          placeholder="Add collaborator"
          class="form-control input-new-tag"
          v-model="tags.inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <hr>
        <h4 class="card-title">{{ projectInfo.project }}</h4>
        <!-- <p>{{ projectInfo.description }}</p> -->
        <p class="category">{{ projectInfo.description }} </p>
      </div>

      <div class="card-content row">
        <div class="col-sm-12">
          <el-table :data="taskInfo">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p class="category">{{ props.row.task }}</p>
              </template>
            </el-table-column>
            <el-table-column type="index" width="60"></el-table-column>
            <el-table-column prop="employee" label="Employee" width="300"></el-table-column>
            <el-table-column :min-width="120" fixed="right" label="Edit">
              <template slot-scope="props">
                <router-link :to="`${current_path}/employee/${employeeId}`">
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
      <p class="category" style="text-align:right;">
        <i class="el-icon-time"></i>
        Peoject due: {{ projectInfo.due }}
        <br />
        <br />
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn, Tag, Input, Button } from "element-ui";
import PSwitch from "src/components/UIComponents/Switch.vue";
import { jobManagementService } from "src/services/JobManagementService";

Vue.use(Table);
Vue.use(TableColumn);
export default {
  components: {
    PSwitch,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button
  },
  props: {
    projectId: {
      type: String
    }
  },
  data() {
    return {
      projectInfo: {
        team: localStorage.getItem("storageTeam"),
        start: localStorage.getItem("storageStart"),
        due: localStorage.getItem("storageDue"),
        project: localStorage.getItem("storageProject"),
        description: localStorage.getItem("storageDescription")
      },
      tags: {
        dynamicTags: ["Admin"],
        inputVisible: false,
        inputValue: ""
      },
      taskInfo: [
        {
          employee: "Employee A",
          task: [
            "Task1 for employee A1",
            "Task2 for employee A1",
            "Task3 for employee A1"
          ]
        },
        {
          employee: "Employee B",
          task: ["Task1 for employee A2", "Task2 for employee A2"]
        },
        {
          employee: "Employee C",
          task: "Task for employee C"
        },
        {
          employee: "Employee D",
          task: "Task for employee C"
        },
        {
          employee: "Employee E",
          task: "Task for employee D"
        }
      ],
      employeeId: String,
      current_path: String
    };
  },
  methods: {
    handleEdit(index, row) {
      alert(`Your want to edit ${row.employee}'s task in this project`);
      localStorage.setItem("storageEmployee", row.employee);
      localStorage.setItem("storageTask", row.task);
      this.employeeId = row.employee
    },
    getProject() {
      jobManagementService.getProjectById(this.projectId).then(result => {
        this.taskInfo = result;
      });
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
      this.tags.inputValue = '';
    }
  },

  mounted: function() {
    this.current_path = this.$route.path
    this.getProject();
  }
};
</script>
<style>

</style>
