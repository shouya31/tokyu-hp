<template>
  <div>
    <section id="recruit" class="home-main-content lg:flex py-10">
      <div class="mt-16">
        <HomeSectionTitle :image="titleimage" />
        <div class="content-wrapper">
          <HomeSectionImage :image="homeimage" />
          <div class="text-content">
            <p class="section-text">
              採用に関する情報をご覧いただけます。
            </p>
            <ul class="recruit-link">
              <li><a href="/greeting">人事部長メッセージ</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/recruit">募集要項＆会社概要</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- <section
      id="vision"
      class="lg:hidden relative bg-white"
      style="z-index:99;"
    >
      <div class="pt-16">
        <div class="section-title mx-auto text-right">
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
    </section> -->
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
