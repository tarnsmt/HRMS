<template>
  <tr>
    <td>
      <label class="checkbox">
        <input type="checkbox" value="" data-toggle="checkbox">
      </label>
    </td>
    <td>{{task.project}}</td>
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
        default: () => {
          return {
            project: ''
          }
        }
      },
      index: Number
    },
    methods: {
      handleEditClick () {
        this.$emit('on-edit', this.index)
      }
    }
  }
</script>
<style>
</style>
