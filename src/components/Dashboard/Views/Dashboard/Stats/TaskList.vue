<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-project">Tasks</h4>
      <p class="category">Lists of tasks for projects</p>
    </div>
    <div class="card-content">
      <div class="table-full-width table-tasks">
        <table class="table">
          <tbody>
          <task v-for="(task, index) in tableData"
                :key="task.Name"
                :task="task"
                :index="index"
                @on-edit="handleTaskEdit">
          </task>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer">
      <hr>
      <div class="stats">
        <i class="fa fa-history"></i> Updated 3 minutes ago
      </div>
    </div>
  </div>
</template>
<script>
  import Task from './Task.vue'
  import { jobManagementService } from "src/services/JobManagementService";

  export default {
    components: {
      Task
    },
    data () {
      return {
        tableData: [
          {
            project: 'Project A'
          },
          {
            project: 'Project B'
          },
          {
            project: 'Project C'
          },
          {
            project: 'Project D'
          }
        ]
      }
    },
    methods: {
      handleTaskEdit (index) {
        alert(`You want to edit task: ${JSON.stringify(this.tasks[index])}`)
      },
      getProject(){
        jobManagementService.getProject().then(
          result => {
            this.tableData = []
            for (let project of result)
              this.tableData.push(project)
          }
        )
      }
    },
    mounted(){
      this.getProject()
    }
  }
</script>
<style>
</style>
