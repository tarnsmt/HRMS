<template>
  <tr>
    <td>
      <label class="checkbox">
        <input type="checkbox" value="" data-toggle="checkbox">
      </label>
    </td>
    <td>{{task.Project.Name}}</td>
    <td class="td-actions text-right">
      <div class="table-icons">
        <router-link to="/jobManagement/project/employeeEditTask">
          <button type="button"
                  rel="tooltip"
                  title="Edit Task"
                  class="btn btn-info btn-simple btn-xs"
                  @click="handleEditClick">
            <i class="ti-pencil-alt"></i>     
          </button>
        </router-link>
      </div>
    </td>
    <td>
      <label class="checkbox">
        <input type="checkbox" value="" data-toggle="checkbox">
      </label>
    </td>
  </tr>
</template>
<script>
  export default {
    props: {
      task: {
        type: Object,
      },
      index: Number,
    },
    methods: {
      handleEditClick () {
        localStorage.setItem('on-project',JSON.stringify(this.task.Project))
        this.$emit('on-edit', this.index)
      }
    },
  }
</script>
<style>
</style>
