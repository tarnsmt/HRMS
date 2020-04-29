<template>
  <div class="row">
    <div class="col-lg-8 col-md-7 col-md-offset-2">
      <edit-profile-form :id="`${employeeId}`">

      </edit-profile-form>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'

  export default {
    components: {
      EditProfileForm
    },
    props:{
      employeeId:{
        type: String
      }
    }
  }

</script>
<style>

</style>
