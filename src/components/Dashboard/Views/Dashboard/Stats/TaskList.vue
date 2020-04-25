<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Tasks</h4>
      <p class="category">Lists of tasks for projects</p>
    </div>
    <div class="card-content">
      <div class="table-full-width table-tasks">
        <table class="table">
          <tbody>
          <task v-for="(task, index) in tasks"
                :key="task.title"
                :task="task"
                :index="index"
                @on-edit="handleTaskEdit"
                @on-delete="handleTaskDelete">

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

  export default {
    components: {
      Task
    },
    data () {
      return {
        tasks: [
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'Lorem ipsum'
          }
        ]
      }
    },
    methods: {
      handleTaskEdit (index) {
        alert(`You want to edit task: ${JSON.stringify(this.tasks[index])}`)
      },
      handleTaskDelete (index) {
        alert(`You want to delete task: ${JSON.stringify(this.tasks[index])}`)
      }
    }
  }
</script>
<style>
</style>
