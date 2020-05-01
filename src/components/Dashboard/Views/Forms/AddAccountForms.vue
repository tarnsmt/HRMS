<template>
  <div class="card col-lg-8 col-md-offset-2">
    <div class="card-header">
      <h4 class="title">Add account</h4>
    </div>
    <div class="card-content">
      <form>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="ID" placeholder="ID" ></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="E-mail" placeholder="Email" v-model="user.name"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Passwork" placeholder="Passwork" v-model="user.name"></fg-input>
          </div>
        </div>
        
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-fill btn-wd"
            @click.prevent="updateProfile"
            style="margin-top:15px"
          >Add account</button>
        </div>
        
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import { Tag, Input, Button } from "element-ui";

export default {
  components: {
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button
  },
  data() {
    return {
      user: {
      }
    };
  }
};
</script>
<style>
</style>
