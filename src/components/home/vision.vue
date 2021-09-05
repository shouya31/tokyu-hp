<template>
  <div>
    <section
      id="vision"
      class="home-main-content lg:flex bg-white relative"
      style="z-index: 99"
    >
      <div class="mt-16">
        <HomeSectionTitle :image="titleimage" />
        <div class="w-full flex justify-between flex-row-reverse">
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

