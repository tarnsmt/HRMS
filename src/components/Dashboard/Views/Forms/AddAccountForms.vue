<template>
  <div class="card col-lg-8 col-md-offset-2">
    <div class="card-header">
      <h4 class="title">Add account</h4>
    </div>
    <div class="card-content">
      <form>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="ID" placeholder="ID" v-model="id"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="email" label="E-mail" placeholder="Email" v-model="email"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Password" placeholder="Password" v-model="password"></fg-input>
          </div>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="btn btn-fill btn-wd"
            @click.prevent="addAccount"
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
import { authenticationService } from "src/services/AuthenticationService";

export default {
  components: {
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button
  },
  data() {
    return {
      id: '',
      email: '',
      password: ''
    };
  },
  methods: {
    addAccount() {
      let payload = {
        employee_id: this.id,
        email: this.email,
        password: this.password
      }
      authenticationService.register(payload).then(
        response => {
          alert("Add success");
        },
        error => {
          if(error.statusCode == 400){
            alert("Please fullfill all field");
            return
          }
          alert("You are not admin");
        }
      );
    }
  }
};
</script>
<style>
</style>
