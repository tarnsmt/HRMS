<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navigation-example-2"
            @click="toggleNavbar"
          >
            <span class="sr-only">Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin">Human Resourece Management System</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/admin/overview" tag="li">
              <a>Dashboard</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div
        class="full-page login-page"
        data-color
        data-image="static/img/background/background-2.jpg"
      >
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form>
                  <div class="card" data-background="color" data-color="blue">
                    <div class="card-header">
                      <h3 class="card-title">Login</h3>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          placeholder="Enter email"
                          class="form-control input-no-border"
                          v-model="email"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          class="form-control input-no-border"
                          v-model="password"
                        />
                      </div>
                    </div>
                    <div class="card-footer text-center">
                      <button
                        type="submit"
                        class="btn btn-fill btn-wd"
                        v-on:click="authentication"
                      >Log in</button>
                      <div class="forgot">
                        <router-link to="/register">Forgot your password?</router-link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-transparent"></footer>
        <div
          class="full-page-background"
          style="background-image: url(static/img/background/background-2.jpg) "
        ></div>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/admin/overview" tag="li">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { authenticationService } from "src/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      document.body.classList.remove("off-canvas-sidebar");
    },
    authentication() {
      let payload = {
        email: this.email,
        password: this.password
      };
      authenticationService.login(payload).then(
        response => {
          this.$router.push({name: 'Overview'});
        },
        error => {
          alert("Email or Password Invalid");
        }
      );
    }
  },
  beforeDestroy() {
    this.closeMenu();
  }
};
</script>
<style>
</style>
