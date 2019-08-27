<template>
  <nav
    class="navbar navbar-expand-lg navbar-light mb-5"
    style="background-image: linear-gradient(152deg, rgb(70, 167, 183) 0%, rgb(69, 181, 88) 47%, rgb(67, 69, 125) 100%);"
  >
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <!-- <a class="navbar-brand" href="#">Hidden brand</a> -->
      <router-link class="nav-link" to="/">
        <img src="@/assets/dev.png" alt />
      </router-link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <router-link class="nav-link change" to="/">Home</router-link>
        <router-link class="nav-link change" to="/portfolio">Portfolio</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.change {
  color: white !important;
}
.change:hover {
  color: rgb(67, 69, 125) !important;
}
img {
  width: 260px;
}
</style>
