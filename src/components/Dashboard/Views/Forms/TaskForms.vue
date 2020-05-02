<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <legend>Create a project</legend>
        </div>

        <div class="card-content">
          <form  class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Due</label>
                <div class="col-sm-10">
                  <el-date-picker
                    v-model="dateTimePicker"
                    type="datetime"
                    placeholder="select date and time"
                  ></el-date-picker>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Project</label>
                <div class="col-sm-3">
                  <input
                    type="text"
                    placeholder="project name"
                    class="form-control"
                    style="background-color: #ffff;"
                    v-model="projectName"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Department</label>
                <div class="col-sm-10">
                  <el-select size="large" placeholder="select department" v-model="selects.simple">
                    <el-option
                      v-for="option in selects.department"
                      class="select-primary"
                      :value="option.value"
                      :label="option.label"
                      :key="option.label"
                    ></el-option>
                  </el-select>
                </div>
              </div>
            </fieldset>
            <button class="btn btn-info btn-fill btn-wd" v-on:click="createProject">Create a project</button>
          </form>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end col-md-12 -->
  </div>
</template>
<script>
import {
  DatePicker,
  TimeSelect,
  Slider,
  Input,
  Button,
  Select,
  Option
} from "element-ui";

import {jobManagementService} from "src/services/JobManagementService";

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Slider.name]: Slider,
    [Input.name]: Input,
    [Button.name]: Button,
    [Option.name]: Option,
    [Select.name]: Select
  },
  data() {
    return {
      sliders: {
        simple: 30,
        rangeSlider: [20, 50]
      },
      selects: {
        simple: "",
        department: [
          { value: "Financial Department", label: "Financial Department" },
          { value: "Marketing Department", label: "Marketing Department" }
        ],
        multiple: "ARS"
      },
      pickerToday: {
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          }
        ]
      },
      datePicker: "",
      dateTimePicker: "",
      timePicker: "",
      projectName:"",
      projectId: String
    };
  },
  methods: {
    createProject(){
      console.log("Creating....")
      let payload = {
        Name: this.projectName,
        Due_date: this.dateTimePicker,
        Members: [],
        Department: this.selects.simple
      }
      jobManagementService.createProject(payload).then(
        id => {
          console.log(id)
          this.$router.push({name: 'Task Tables',params: {projectId:id}});
        },
        error => {
          alert ('You are not admin')
        }
      )
      
    }
  }
};
</script>