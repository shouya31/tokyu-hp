<template>
  <div>
    <section id="vision" class="hidden pl-52 lg:flex py-10 bg-white relative" style="z-index: 99;">
      <div class="mt-16 ml-10">
        <HomeSectionTitle :image="titleimage" />
        <div class="flex justify-between flex-row-reverse">
          <HomeSectionText
            text="東急グループの中でリテール関連事業の中核を担う東急百貨店。東急百貨店がこれまでどのような信念を持ち、歩み続けてきたのか、これからどのようなビジョンと共に歩んでいくのかをお伝えします。"
            src='/vision'
          />
          <HomeSectionImage :image="homeimage" />
        </div>
      </div>
    </section>

    <section id="vision" class="lg:hidden relative bg-white" style="z-index:99;">
      <div class="pt-16">
        <div class="vision-title w-8/12 mx-auto text-right">
          <img :src="titleimage" />
        </div>
        <div class="vision-right-content mt-8" style="margin-right: 20%;">
          <img :src="homeimage" alt="" />
        </div>
        <div class="vision-left-content" style="margin-right: 20%;">
          <p class="section-text text-sm py-5 pl-8 ">
            東急グループの中でリテール関連事業の中核を担う東急百貨店。<br />
            東急百貨店がこれまでどのような信念を持ち、歩み続けてきたのか、<br />
            これからどのようなビジョンと共に歩んでいくのかをお伝えします。
          </p>
        </div>
        <p class="sentence-more text-center mt-3">
          <a href="/vision">
            <img src="../../assets/images/read-more.png" alt="" class="mx-auto" />
          </a>
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
  name: "Vision",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
    HomeSectionText,
  },
  data() {
    return {
      homeimage: require("@/assets/images/home-vision.png"),
      titleimage: require("@/assets/images/top-vision.png"),
    };
  },
};
</script>


<style>
#vision {
    max-width: 1500px;
}

#vision .vision-title img {
    margin-left: auto;
}
</style>
