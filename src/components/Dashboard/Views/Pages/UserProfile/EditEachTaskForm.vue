<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Task</h4>
    </div>
    <div class="card-content">
      <form>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label= "Name"
                      placeholder="Name"
                      v-model="task.taskDescription">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-fill btn-wd" @click.prevent="updateTask" style="margin-top:15px">
            Update Task
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        task: {
          taskDescription: localStorage.getItem('storageTaskDescription')
        }
      }
    },
    methods: {
      updateTask () {
        alert('Update: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>
  .el-select__tags-text{
    color: white
  }

  .el-input__inner{
    background-color: #F3F2EE;
    border: 1px solid #e8e7e3;
    border-radius: 4px;
    color: #66615b;
    font-size: 14px;
    padding: 7px 18px;
    height: 40px;
    -webkit-box-shadow: none;
    box-shadow: none;
    height: 40px;
  }

  .el-tag, .el-tag.el-tag--info {
      background-color: #66615B !important;
      color: white;
  }

  .el-tag.el-tag--info .el-tag__close {
    color: white;
  }
</style>
