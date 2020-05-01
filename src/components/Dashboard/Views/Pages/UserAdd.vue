<template>
  <div class="card col-lg-8 col-md-7 col-md-offset-2">
    <div class="card-header">
      <h4 class="title">Add Employee</h4>
    </div>

    <div class="card-content">
      <form v-on:keydown.enter.prevent="preventSubmit">
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Name" placeholder="Name" v-model="user.name"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="number" label="ID" placeholder="Employee ID" v-model="user.id"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="Address" placeholder="Address" v-model="user.address"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="Tel" placeholder="Tel" v-model="user.tel"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Date Of Birth"
              placeholder="Date Of Birth"
              v-model="user.date_of_birth"
            ></fg-input>
          </div>
          <div class="col-md-6">
            <label>Gender</label>
            <br />
            <el-radio v-model="user.gender" label="male">Male</el-radio>
            <el-radio v-model="user.gender" label="female">Female</el-radio>
            <br />
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
            @click.prevent="addProfile"
            style="margin-top:15px"

          >Add Profile</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import { employeeInformationService } from "src/services/EmployeeInformationService";
import {
  Tag,
  Input,
  Button,
  Radio,
  DatePicker,
  TimeSelect,
  Option,
  Select
} from "element-ui";

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button,
    [Radio.name]: Radio,
    [Option.name]: Option,
    [Select.name]: Select
  },
  data() {
    return {
      user: {
        id:"",
        name: "",
        address: "",
        tel: "",
        date_of_birth: "",
        gender: "male",
        department: ""
      },
      datePicker: "",
      ss: "",
      timePicker: "",
      tags: {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ""
      }
    };
  },
  methods: {
    preventSubmit() {},
    addProfile() {
      alert("Add: " + JSON.stringify(this.user));
      this.addEmployee();
    },

    addEmployee() {
      let genderNumber = (this.user === "male") ? 1 : 2;
      let roles = []
      for (let pos in this.tags.dynamicTags)
          roles.push(pos)
      let payload = {
        employee_id: this.user.id,
        name: this.user.name,
        date_of_birth: this.user.date_of_birth,
        gender: genderNumber,
        address: this.user.address,
        department: this.user.department,
        tel: this.user.tel,
        roles: roles,
        status: 1,
       
      };
      employeeInformationService.createEmployee(payload).then(result => {
          this.$router.push({name: 'Edit Employee Information',params: {employeeId:this.user.id}});
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
  mounted() {}
};
</script>
<style>
</style>
