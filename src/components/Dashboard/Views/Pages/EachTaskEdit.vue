<template>
  <div class= "card col-sm-8 col-md-offset-2">
    <div class="card-header">
      <h4 class="title">Edit Task</h4>
    </div>
    <div class="card-content">
      <form>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label= "Task title"
                      placeholder="Task title"
                      v-model="task.taskTopic">
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label= "Task description"
                      placeholder="Task description"
                      v-model="task.taskDescription">
            </fg-input>
          </div>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  import { jobManagementService } from "src/services/JobManagementService"

  export default {
    data () {
      return {
        task: {
          taskTopic: localStorage.getItem("storageTaskTopic"),
          taskDescription: localStorage.getItem('storageTaskDescription')
        }
      }
    },
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
