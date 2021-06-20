<template>
  <div>
    <section id="project" class="hidden pl-52 lg:flex py-10">
      <div class="project-title mt-16 ml-10">
        <HomeSectionTitle :image="titleimage" />
        <div class="flex justify-between p-10">
          <HomeSectionImage :image="homeimage" />
          <HomeSectionText
            text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
        </div>
      </div>
    </section>

    <section id="vision" class="lg:hidden">
      <div class="mt-16">
        <div class="visoion-title w-8/12 mx-auto">
          <img :src="titleimage" />
        </div>
        <div class="vision-right-content mt-8" style="margin-left: 20%;">
          <img :src="homeimage" alt="" />
        </div>
        <div class="vision-left-content" style="margin-left: 20%;">
          <p class="section-text text-sm py-5 pr-8">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <p class="sentence-more text-center mt-3">
          <img src="../../assets/images/read-more.png" alt="" class="mx-auto" />
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../../components/atom/HomeSectionImage.vue";
import HomeSectionText from "../../components/atom/HomeSectionText.vue";

export default {
  name: "Project",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
    HomeSectionText,
  },
  data() {
    return {
      homeimage: require("@/assets/images/home-project.png"),
      titleimage: require("@/assets/images/top-project.png"),
    };
  },
};
</script>

<style>
.project-title .visoion-title img {
  margin-left: 48%;
}
</style>
