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
            <el-table-column prop="name"
                             label="Name">
            </el-table-column>
            <el-table-column prop="job"
                             label="Job Position">
            </el-table-column>
            <el-table-column prop="project"
                             label="Project">
            </el-table-column>
            <el-table-column
              label="Actions">
              <template slot-scope="props">
                <a class="btn btn-simple btn-info btn-xs btn-icon like" @click="handleLike(props.$index, props.row)"><i class="ti-heart"></i></a>
                <a class="btn btn-simple btn-warning btn-xs btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-pencil-alt"></i></a>
                <a class="btn btn-simple btn-danger btn-xs btn-icon remove"  @click="handleDelete(props.$index, props.row)"><i class="ti-close"></i></a>
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
          name: 'Andrew Mike',
          job: 'Develop',
          project: 'Project A'
        }, {
          name: 'John Doe',
          job: 'Design',
          project: 'Project A'
        }, {
          name: 'Alex Mike',
          job: 'Design',
          project: 'Project B'
        }, {
          name: 'Mike Monday',
          job: 'Marketing',
          project: 'Project B'
        },
        {
          name: 'Paul dickens',
          job: 'Communication',
          project: 'Project C'
        }
        ]
      }
    },
    methods: {
      handleLike (index, row) {
        alert(`Your clicked on Like button`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        alert(`Your want to delete ${row.name}`)
      },
      getSummaries (param) {
        const { columns } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total'
          } else if (index < columns.length - 1) {
            sums[index] = ''
          } else {
            let sum = 0
            this.productsTable.forEach((obj) => {
              sum += obj.quantity * obj.price
            })
            sums[index] = `€ ${sum}`
          }
        })
        return sums
      }
    }
  }
</script>
<style>
</style>
