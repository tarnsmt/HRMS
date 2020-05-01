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
            <fg-input type="text" label="Salary" placeholder="Salary" v-model="user.salary"></fg-input>
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
      }
    };
  },
  methods: {
    preventSubmit() {},
    updateProfile() {
      alert("Update: " + JSON.stringify(this.user));
      this.updatetEmployee();
    },
    // example response
    //  {
    //     "employee_id": "00000000",
    //     "name": "admin@admin",
    //     "date_of_birth": "2020-04-19T00:00:00.000Z",
    //     "gender": 1,
    //     "department": "HR",
    //     "address": "Thailand",
    //     "tel": "000-0000-000",
    //     "status": 1,
    //     "roles": [
    //         {
    //             "id": 30,
    //             "role": "admin"
    //         },
    //         {
    //             "id": 31,
    //             "role": "employee"
    //         }
    //     ]
    // }
    getEmployee() {
      employeeInformationService.getEmployeeById(this.id).then(result => {
        this.user = result;
      });
    },
    updatetEmployee() {
      //config later
      let payload = {
        name: "Nutthapat Phoomara",
        roles: ["admin", "employee"],
        date_of_birth: "22/02/1999",
        gender: 1,
        address: "USA",
        tel: "0817592466",
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
