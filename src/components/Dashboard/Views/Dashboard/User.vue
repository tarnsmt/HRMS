<template>
  <div class="row">
    <div class="col-lg-4 col-md-5">
      <user-card>

      </user-card>
      <members-card>

      </members-card>
    </div>
    <div class="col-md-7">
      <task-list>

      </task-list>
    </div>
  </div>
</template>
<script>
  import TaskList from './Stats/TaskList'
  import UserCard from 'src/components/Dashboard/Views/Pages/UserProfile/UserCard.vue'

  export default {
    components: {
      TaskList,
      UserCard
    }
  }
</script>
<style>
</style>
