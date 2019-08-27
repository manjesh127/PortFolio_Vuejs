<template>
  <div class="footer">
    <p>© 2018 DevGenesis Private Limited. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style  scoped>
.footer {
  background-image: linear-gradient(
    152deg,
    rgb(70, 167, 183) 0%,
    rgb(69, 181, 88) 47%,
    rgb(67, 69, 125) 100%
  );
  /* position: absolute;
  bottom: 0; */
  width: 100%;
}
.footer p {
  padding-block-start: 10px;
  color: white;
  margin: 0;
}
</style>