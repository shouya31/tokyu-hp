<template>
  <div class="flex">
    <div class="side">
      <HomeSideBar />
    </div>
    <div class="main">
      <Fv />
      <Explain />
      <Vision />
      <Project />
      <People />
      <Culture />
    </div>
  </div>
</template>

<script>
import HomeSideBar from "../components/home/HomeSideBar.vue";
import Fv from "../components/home/fv.vue";
import Explain from "../components/home/explain.vue";
import Vision from "../components/home/vision.vue";
import Project from "../components/home/project.vue";
import People from "../components/home/people.vue";
import Culture from "../components/home/culture.vue";

export default {
  name: "Home",
  components: {
    HomeSideBar,
    Fv,
    Explain,
    Vision,
    Project,
    People,
    Culture,
  },
};
</script>

<style>
@import "../assets/style/home.css";

</style>
