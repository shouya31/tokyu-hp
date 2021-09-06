<template>
  <div style="background-color: rgb(255, 255, 255); z-index: 99; position: relative;">
    <section
      id="vision"
      class="home-main-content lg:flex pt-16"
      style="z-index: 99"
    >
      <div class="">
        <HomeSectionTitle :image="titleimage" />
        <div class="content-wrapper">
          <div class="text-content bg-white" style="z-index: 99">
            <p class="section-text">
              東急グループの中でリテール関連事業の中核を担う東急百貨店。<br />東急百貨店がこれまでどのような信念を持ち、歩み続けてきたのか、これからどのようなビジョンと共に歩んでいくのかをお伝えします。
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

