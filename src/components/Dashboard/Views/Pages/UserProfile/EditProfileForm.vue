<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Profile</h4>
      <router-link :to="`/salaryManagement/${this.id}`">
        <el-button class="button-new-tag" size="large">Salary Employee</el-button>
      </router-link>
    </div>
    <div class="card-content">
      <form v-on:keydown.enter.prevent="preventSubmit">
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Name" placeholder="Name" v-model="user.name"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Address" placeholder="Address" v-model="user.address"></fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Tel" placeholder="Tel" v-model="user.tel"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Salary" placeholder="Salary" v-model="user.date_of_birth"></fg-input>
          </div>
          <div class="col-md-6">
            <label>Department</label>
            <br />
            <!-- <el-select v-model="valueDepartment" placeholder="Select">
              <el-option
                v-for="item in department"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>-->
            <fg-input type="text" placeholder="Department" v-model="user.department"></fg-input>
          </div>
        </div>

        <div class="row">
          <label style="margin-left:15px">Position</label>
          <br />
          <el-tag
            :key="tag"
            v-for="tag in tags.dynamicTags"
            type="primary"
            :closable="true"
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <input
            type="text"
            style="margin-left:15px"
            placeholder="Add position"
            class="form-control input-new-tag"
            v-model="tags.inputValue"
            ref="saveTagInput"
            size="mini"
            @keydown.enter.prevent="handleInputConfirm"
            @blur="handleInputConfirm"
          />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="btn btn-fill btn-wd"
            @click.prevent="updateProfile"
            style="margin-top:15px"
          >Update Profile</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import { employeeInformationService } from "src/services/EmployeeInformationService";
import { Tag, Input, Button } from "element-ui";

export default {
  components: {
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      user: {},
      tags: {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ""
      },
      isAdmin: Boolean
    };
  },
  methods: {
    preventSubmit() {},
    updateProfile() {
      if(this.isAdmin == false){
        alert("You are not admin");
        return
      }
      alert("Update: " + JSON.stringify(this.user));
      this.updatetEmployee();
    },
    getEmployee() {
      employeeInformationService.getEmployeeById(this.id).then(result => {
        this.isAdmin = result.isAdmin
        result.date_of_birth = new Date(result.date_of_birth).toDateString('en-GB')
        this.user =[]
        this.tags.dynamicTags = []
        this.user = result;
        let resultRole = []
        for(let role of result.roles){
          resultRole.push(role.role)
        }
        this.tags.dynamicTags = resultRole
      });
    },
    updatetEmployee() {
      //config later
      let payload = {
        name: this.user.name,
        roles: this.tags.dynamicTags,
        date_of_birth:this.user.date_of_birth,
        gender: this.user.gender,
        address: this.user.address,
        tel: this.user.tel,
        status: 1
      };
      employeeInformationService
        .updateEmployeeById(this.id, payload)
        .then(result => {
          this.user = result;
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
      this.tags.inputValue = "";
    }
  },
  mounted() {
    this.getEmployee();
  }
};
</script>
<style>
</style>
