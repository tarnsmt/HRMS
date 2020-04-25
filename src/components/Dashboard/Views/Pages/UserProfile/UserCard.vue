<template>
  <div class="card card-user">
    <div class="image">
      <img src="static/img/background.jpg" alt="...">
    </div>
    <div class="card-content">
      <div class="author">
        <img class="avatar border-white" src="static/img/faces/face-2.jpg" alt="...">
        <h4 class="title">Tarnnybunny
          <br>
            <small>Department?</small>
        </h4>
      </div>
      <p class="description text-center">
        "Lorem ipsum dolor sit
        <br>amet, consectetu"
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        details: [
          {
            title: 'Designer',
            subTitle: 'Position'
          },
          {
            title: '1000$',
            subTitle: 'Salary'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        const remainder = index % 2
        if (remainder === 0) {
          return 'col-md-4 col-md-offset-2'
        } else {
          return 'col-md-4'
        }
      }
    }
  }

</script>
<style>

</style>
