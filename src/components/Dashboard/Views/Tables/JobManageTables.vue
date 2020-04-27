<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">List of projects</h4>
        <p class="category">Each employee has to complete the task within the due date</p>
      </div>
      <div class="card-content row">
        <div class="col-sm-12">
          <el-table :data="tableData">
            <el-table-column type="index">

            </el-table-column>
            <el-table-column prop="project"
                             label="Project">
            </el-table-column>
            <el-table-column prop="description"
                  label="Description"
                  width="305">
            </el-table-column>
            <el-table-column prop="start"
                  label="Start">
            </el-table-column>
            <el-table-column prop="due"
                  label="End">
            </el-table-column>
            <el-table-column
              label="More info">
              <template slot-scope="props">
                <router-link to="/table-list/task">
                  <a class="btn btn-simple btn-warning btn-xs btn-icon edit" @click="handleInputConfirm(props.$index, props.row)">
                    <i class="ti-clipboard"></i>
                  </a>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column label="Active" class="text-right" style="text-align:right">
              <template slot-scope="props" class="text-right" style="text-align:right">
                <p-switch v-model="props.row.active" style="text-align:right"></p-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default{
    components: {
      PSwitch
    },
    data () {
      return {
        tableData: [{
          project: 'Project A',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          active: true,
          start: '9/1/2563',
          due: '9/2/2563'
        }, {
          project: 'Project B',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          active: false,
          start: '9/1/2563',
          due: '9/2/2563'
        }, {
          project: 'Project C',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          active: false,
          start: '9/1/2563',
          due: '9/2/2563'
        }, {
          project: 'Project D',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          active: true,
          start: '9/1/2563',
          due: '9/2/2563'
        },
        {
          project: 'Project E',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          active: false,
          start: '9/1/2563',
          due: '9/2/2563'
        }
        ]
      }
    },
    methods: {
      handleInputConfirm (index, row) {
        localStorage.setItem('storageProject', row.project)
        localStorage.setItem('storageDescription', row.description)
        localStorage.setItem('storageStart', row.start)
        localStorage.setItem('storageDue', row.due)
      }
    }
  }
</script>
<style>
</style>
