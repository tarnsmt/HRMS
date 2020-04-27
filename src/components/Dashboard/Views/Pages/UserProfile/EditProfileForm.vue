<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Profile</h4>
    </div>
    <div class="card-content">
      <form>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label= "Name"
                      placeholder="Name"
                      v-model="user.name">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Salary"
                      placeholder="Salary"
                      v-model="user.salary">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Position"
                      placeholder="Position"
                      v-model="user.position">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Comment</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Comment on the employee"
                        v-model="user.comment">

              </textarea>
            </div>
          </div>
        </div>

        <!-- <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Department"
                      placeholder="Department"
                      v-model="user.department">
            </fg-input>
          </div>
        </div> -->

        <div class="row">
          <label style="margin-left:15px">Department</label>
          <el-select v-model="value" 
          multiple placeholder="Department" 
          size="large"
          class="col-md-12">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-fill btn-wd" @click.prevent="updateProfile" style="margin-top:15px">
            Update Profile
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
        user: {
          name: localStorage.getItem('storageName'),
          department: localStorage.getItem('storageDepartment'),
          email: localStorage.getItem('storageEmail'),
          salary: localStorage.getItem('storageSalary'),
          position: localStorage.getItem('storagePosition'),
          comment: ``
        },
        departments: [{
          value: 'marketing',
          label: 'marketing'
        }, {
          value: 'finance',
          label: 'finance'
        }, {
          value: 'editorial',
          label: 'editorial'
        }],
        value: ''
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
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
