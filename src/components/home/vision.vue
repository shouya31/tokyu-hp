<template>
  <div style="background-color: rgb(255, 255, 255);
    z-index: 99;">
    <section
      id="vision"
      class="home-main-content lg:flex pt-16"
      style="z-index: 99"
    >
      <div class="">
        <HomeSectionTitle :image="titleimage" />
        <div class="content-wrapper">
          <HomeSectionText
            text="東急グループの中でリテール関連事業の中核を担う東急百貨店。東急百貨店がこれまでどのような信念を持ち、歩み続けてきたのか、これからどのようなビジョンと共に歩んでいくのかをお伝えします。"
            src="/vision"
          />
          <HomeSectionImage :image="homeimage" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../../components/atom/HomeSectionImage.vue";
import HomeSectionText from "../../components/atom/HomeSectionText.vue";
export default {
  name: "Vision",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
    HomeSectionText,
  },
  data() {
    return {
      homeimage: require("@/assets/images/home-vision@2x.png"),
      titleimage: require("@/assets/images/top-vision.svg"),
    };
  },
};
</script>

