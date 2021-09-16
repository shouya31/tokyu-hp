<template>
  <div style="background-color: rgb(255, 255, 255); z-index: 99; position: relative;">
    <section
      id="vision"
      class="home-main-content lg:flex pt-36 pb-16"
      style="z-index: 99"
    >
      <div class="">
        <HomeSectionTitle :image="titleimage" />
        <div class="content-wrapper">
          <div class="text-content bg-white" style="z-index: 99">
            <p class="section-text">
              東急グループの中でリテール<br class="pc-br">関連事業の中核を担う東急百貨店。<br class="pc-br">東急百貨店がこれまでどのような<br class="pc-br">信念を持ち、歩み続けてきたのか、<br class="pc-br">これからどのようなビジョンと共に<br class="pc-br">歩んでいくのかをお伝えします。
            </p>
            <p class="sentence-more">
              <a href="/vision">
                <img
                  src="../../assets/images/read-more.svg"
                  alt="Read more"
                />
              </a>
            </p>
          </div>
          <HomeSectionImage :image="homeimage" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../../components/atom/HomeSectionImage.vue";
export default {
  name: "Vision",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
  },
  data() {
    return {
      homeimage: require("@/assets/images/home-vision@2x.png"),
      titleimage: require("@/assets/images/top-vision.svg"),
    };
  },
};
</script>

