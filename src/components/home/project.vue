<template>
  <div>
    <section id="recruit" class="hidden pl-52 lg:flex py-10">
      <div class="project-title mt-16 ml-10">
        <HomeSectionTitle :image="titleimage" />
        <div class="flex justify-between p-10">
          <HomeSectionImage :image="homeimage" />
          <div class="vision-left-content w-5/12 m-10">
            <p class="sentence-more text-center mt-12">
              <img
                src="../../assets/images/read-more.png"
                alt=""
                class="mx-auto"
              />
            </p>
          </div>
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

export default {
  name: "Project",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
  },
  data() {
    return {
      homeimage: require("@/assets/images/greeting.png"),
      titleimage: require("@/assets/images/RECRUIT_title@2x.png"),
    };
  },
};
</script>

<style>
.project-title .visoion-title img {
  margin-left: 48%;
}
</style>
