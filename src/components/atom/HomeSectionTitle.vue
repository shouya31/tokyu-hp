<template>
  <div class="section-title mb-10">
    <img :src="image">
    <!-- <div class="flex"> -->
      <!-- <p
        class="relative text-5xl font-thin tracking-wider font-NotoSerif"
        style="z-index:-2;"
      >
        共に歩む
      </p>
      <span
        class="relative text-4xl tracking-wider font-NotoSerif"
        style=" font-size: 60px; z-index:-2;"
        >×</span
      >
    </div>
    <p
      class="relative text-8xl mt-5 ml-16 tracking-widest font-BrandonGrotesque"
      style="font-weight: 600; color: #003366; z-index:-2;"
    >
      {{ title }}
    </p> -->
  </div>
</template>

<script>
export default {
  props: ["image"],
  data(){
    return{
        people: require("@/assets/images/top-people.svg"),
        culture: require("@/assets/images/top-culture.svg"),
    }
  }
};
</script>
<style>
.section-title img {
  height: 125px;
}
@media (max-width: 940px) {
.section-title {
    padding: 0 10px;
  }
}

@media screen and (max-width: 640px) {
  .section-title img {
  height: 80px;
}
}
</style>
