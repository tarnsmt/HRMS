<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle navbar-toggle-black"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Navigation</span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login" class="btn">
                Back to login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <h2>Register</h2>
                  <h4>Human Resource Management System</h4>
                </div>
              </div>
              <div class="col-md-4 col-md-offset-4">
                <form method="#" action="#">
                  <div class="card card-plain">
                    <div class="content">
                      <div class="form-group">
                        <input type="email" placeholder="Your First Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Your Last Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Company" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Enter email" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password Confirmation" class="form-control">
                      </div>
                    </div>
                    <div class="footer text-center">
                      <button type="button" class="btn btn-fill btn-danger btn-wd">Create Account</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-transparent"></footer>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/login">
            Back to login?
          </router-link>
        </li>
        <li>
          <router-link to="/admin">
            Dashboard
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
