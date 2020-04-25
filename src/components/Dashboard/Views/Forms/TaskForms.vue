<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <legend>Create a project</legend>
        </div>

        <div class="row">
          <label class="col-sm-2 control-label" style="text-align:right; padding-right:0px; padding-top: 12px;">Collaborator</label>
          <div class="col-md-10">
          
            <el-tag
              :key="tag"
              v-for="tag in tags.dynamicTags"
              type="primary"
              :closable="true"
              :close-transition="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>

            <input
              type="text"
              placeholder="Add collaborator"
              class="form-control input-new-tag"
              v-model="tags.inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
          </div>
        </div>
   

        <div class="card-content">
          <form method="get" action="/" class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Due</label>
                <div class="col-sm-10">
                  <el-date-picker
                    v-model="dateTimePicker"
                    type="datetime"
                    placeholder="select date and time"
                    :picker-options="pickerOptions1"
                  ></el-date-picker>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Project</label>
                <div class="col-sm-3">
                  <input type="text" placeholder="project name" class="form-control" style="background-color: #ffff;"/>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Department</label>
                <div class="col-sm-10">
                  <el-select
               
                    size="large"
                    placeholder="select department"
                    v-model="selects.simple"

                  >
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
            <button class="btn btn-info btn-fill btn-wd">Create a project</button>
          </form>
        </div>
      </div><!-- end card -->
    </div><!-- end col-md-12 -->
  </div>
</template>
<script>
  import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
  export default {
    components: {
      [DatePicker.name]: DatePicker,
      [TimeSelect.name]: TimeSelect,
      [Slider.name]: Slider,
      [Tag.name]: Tag,
      [Input.name]: Input,
      [Button.name]: Button,
      [Option.name]: Option,
      [Select.name]: Select
    },
    data () {
      return {

        sliders: {
          simple: 30,
          rangeSlider: [20, 50]
        },
        selects: {
          simple: '',
          department: [{value: 'Financial Department', label: 'Financial Department'},
            {value: 'Marketing Department', label: 'Marketing Department'}],
          multiple: 'ARS'
        },
        tags: {
          dynamicTags: ['Admin'],
          inputVisible: false,
          inputValue: ''
        },
        pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        datePicker: '',
        dateTimePicker: '',
        timePicker: ''
      }
    },
    methods: {
      handleClose (tag) {
        this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1)
      },

      showInput () {
        this.tags.inputVisible = true
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm () {
        let inputValue = this.tags.inputValue
        if (inputValue) {
          this.tags.dynamicTags.push(inputValue)
        }
        this.tags.inputVisible = false
        this.tags.inputValue = ''
      }
    }
  }
</script>