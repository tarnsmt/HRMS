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
                      :disabled="true"
                      placeholder="Name"
                      v-model="user.name">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Nickname"
                      :disabled="true"
                      placeholder="Nickname"
                      v-model="user.nickname">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Email"
                      :disabled="true"
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
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
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
          nickname: localStorage.getItem('storageNickname'),
          email: localStorage.getItem('storageEmail'),
          salary: localStorage.getItem('storageSalary'),
          position: localStorage.getItem('storagePosition'),
          comment: ``
        }
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

</style>
