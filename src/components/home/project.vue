<template>
  <div>
    <section id="recruit" class="hidden pl-52 lg:flex py-10">
      <div class="project-title mt-16 ml-10">
        <HomeSectionTitle :image="titleimage" />
        <div class="flex justify-between content-start p-10">
          <HomeSectionImage :image="homeimage" />
          <div class="vision-left-content w-5/12 m-10 flex">
            <p class="sentence-more text-center m-auto self-center">
              <a href="/greeting">
                <img
                  src="../../assets/images/read-more.svg"
                  alt=""
                  class="mx-auto"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="vision"
      class="lg:hidden relative bg-white"
      style="z-index:99;"
    >
      <div class="pt-16">
        <div class="vision-title w-8/12 mx-auto text-right">
          <img :src="titleimage" />
        </div>
        <div class="vision-right-content mt-8" style="margin-right: 20%;">
          <img :src="homeimage" alt="" />
        </div>
        <p class="sentence-more text-center mt-3">
          <a href="/greeting">
            <img
              src="../../assets/images/read-more.svg"
              alt=""
              class="mx-auto"
            />
          </a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../../components/atom/HomeSectionImage.vue";

export default {
  name: "Project",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
  },
  data() {
    return {
      homeimage: require("@/assets/images/greeting.png"),
      titleimage: require("@/assets/images/top-recruit.svg"),
    };
  },
};
</script>

<style>
.project-title .vision-title img {
  margin-left: 48%;
}
</style>
