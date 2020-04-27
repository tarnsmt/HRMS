<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ projectInfo.project }}</h3>
        <p>{{ projectInfo.description }}</p>
        <p class="category"><i class="el-icon-time"></i> Peoject due: {{ projectInfo.due }}</p>
      </div>
      <div class="card-content row">
        <div class="col-sm-12">
          <el-table :data="taskInfo">
            <el-table-column type="index" width="60">

            </el-table-column>
            <el-table-column prop="employee"
                             label="Employee">
            </el-table-column>
            <el-table-column prop="task"
                  label="Task">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default{
    components: {
      PSwitch
    },
    data () {
      return {
        projectInfo: {
          team: localStorage.getItem('storageTeam'),
          start: localStorage.getItem('storageStart'),
          due: localStorage.getItem('storageDue'),
          project: localStorage.getItem('storageProject'),
          description: localStorage.getItem('storageDescription')
        },
        taskInfo: [{
          employee: 'Employee A',
          task: 'Task for employee A'
        }, {
          employee: 'Employee B',
          task: 'Task for employee B'
        }, {
          employee: 'Employee C',
          task: 'Task for employee C'
        }, {
          employee: 'Employee D',
          task: 'Task for employee C'
        },
        {
          employee: 'Employee E',
          task: 'Task for employee D'
        }
        ]
      }
    }
  }
</script>
<style>
</style>
