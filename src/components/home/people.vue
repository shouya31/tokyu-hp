<template>
  <div>
    <section id="people" class="hidden pl-52 lg:flex py-10">
      <div class="mt-16 ml-10">
        <HomeSectionTitle :image="titleimage" />
        <div class="">
          <div class="absolute">
            <div class="vision-left-content w-4/12 m-10">
              <p class="section-text mt-16">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p class="sentence-more text-center mt-12">
                <img
                  src="../../assets/images/read-more.png"
                  alt=""
                  class="mx-auto"
                />
              </p>
            </div>
          </div>

          <carousel :per-page="1" :autoplay="true" :loop="true">
            <slide>
              <div class="flex relative employee-image-box">
                <a href="/people/1">
                  <HomeSectionImage :image="homeimage1" />
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/2">
                  <HomeSectionImage :image="homeimage2" />
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/3">
                  <HomeSectionImage :image="homeimage3" />
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/4">
                  <HomeSectionImage :image="homeimage4" />
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/5">
                  <HomeSectionImage :image="homeimage5" />
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/6">
                  <HomeSectionImage :image="homeimage6" />
                </a>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <section id="vision" class="lg:hidden">
      <div class="mt-16">
        <div class="visoion-title w-8/12 mx-auto">
          <img :src="titleimage" />
        </div>
        <div class="vision-right-content mt-8" style="margin-right: 20%;">
          <carousel :per-page="1" :autoplay="true" :loop="true">
            <slide>
              <div class="flex relative">
                <HomeSectionImage :image="homeimage1" />
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <HomeSectionImage :image="homeimage2" />
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <HomeSectionImage :image="homeimage3" />
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <HomeSectionImage :image="homeimage4" />
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <HomeSectionImage :image="homeimage5" />
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <HomeSectionImage :image="homeimage6" />
              </div>
            </slide>
          </carousel>
        </div>
        <div class="vision-left-content" style="margin-right: 20%;">
          <p class="section-text text-sm py-5 pl-8">
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
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "People",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
    HomeSectionText,
    Carousel,
    Slide,
  },
  data() {
    return {
      homeimage1: require("@/assets/images/person1-message.png"),
      homeimage2: require("@/assets/images/person2-message.png"),
      homeimage3: require("@/assets/images/person3-message.png"),
      homeimage4: require("@/assets/images/person4-message.png"),
      homeimage5: require("@/assets/images/person5-message.png"),
      homeimage6: require("@/assets/images/person6-message.png"),

      titleimage: require("@/assets/images/top-people.png"),
    };
  },
};
</script>

<style>
.VueCarousel-dot {
  border-radius: 0px !important;
  width: 50px !important;
  height: 6px !important;
}
.VueCarousel {
  width: 90%;
  position: relative;
  z-index: -30;
  margin-left: 10%;
}
.VueCarousel-wrapper,
.VueCarousel-inner,
.VueCarousel-slide {
  height: 100% !important;
}
.VueCarousel-slide .slider-inner {
  height: 100%;
  background-color: #62caaa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  font-size: 30px;
  border-radius: 10px;
}
.VueCarousel-dot-container {
  width: 100%;
  left: 20px;
  text-align: left;
  padding-left: 40px !important;
}
.employee-image-box {
  overflow: visible !important;
}
.employee-message {
  /* position: absolute; */
  overflow: visible !important;
  left: -100px;
}
.VueCarousel-pagination {
  margin-left: 30%;
}
</style>
