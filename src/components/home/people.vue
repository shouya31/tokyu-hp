<template>
  <div>
    <section id="people" class="hidden relative pl-52 lg:flex py-10">
      <div class="mt-16 ml-10">
        <HomeSectionTitle :image="titleimage" />
        <div class="">
          <div class="absolute">
            <div
              class="vision-left-content w-4/12 m-10 relative bg-white"
              style="z-index: 99"
            >
              <p class="section-text mt-16">
                東急百貨店と共に成長する仲間たち。
                志望動機や現在の仕事内容はもちろん、入社から現在に至るまで
                記憶に残るエピソードや未来に向けた想いを語っていただきました。
              </p>
            </div>
          </div>

          <carousel
            :per-page="1"
            :autoplay="true"
            :loop="true"
            :mouse-drag="true"
            :speed="300"
          >
            <slide>
              <div class="flex relative employee-image-box">
                <a href="/people/1">
                  <div class="vision-right-content mt-8">
                    <img
                      src="../../assets/images/home-people1.png"
                      srcset="
                        ../../assets/images/home-people1.png    1x,
                        ../../assets/images/home-people1@2x.png 2x,
                        ../../assets/images/home-people1_sp@2x.png 320w
                      "
                      alt="働く仲間と共に"
                      width="1080"
                      height="475"
                    />
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/2">
                  <div class="vision-right-content mt-8">
                    <img
                      src="../../assets/images/home-people2.png"
                      srcset="
                        ../../assets/images/home-people2.png    1x,
                        ../../assets/images/home-people2@2x.png 2x,
                        ../../assets/images/home-people2_sp@2x.png 320w
                      "
                      width="1080"
                      height="475"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/3">
                  <div class="vision-right-content mt-8">
                    <img
                      src="../../assets/images/home-people3.png"
                      srcset="
                        ../../assets/images/home-people3.png    1x,
                        ../../assets/images/home-people3@2x.png 2x,
                        ../../assets/images/home-people3_sp@2x.png 320w
                      "
                      width="1080"
                      height="475"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/4">
                  <div class="vision-right-content mt-8">
                    <img
                      src="../../assets/images/home-people4.png"
                      srcset="
                        ../../assets/images/home-people4.png    1x,
                        ../../assets/images/home-people4@2x.png 2x,
                        ../../assets/images/home-people4_sp@2x.png 320w
                      "
                      width="1080"
                      height="475"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/5">
                  <div class="vision-right-content mt-8">
                    <img
                      src="../../assets/images/home-people5.png"
                      srcset="
                        ../../assets/images/home-people5.png    1x,
                        ../../assets/images/home-people5@2x.png 2x,
                        ../../assets/images/home-people5_sp@2x.png 320w
                      "
                      width="1080"
                      height="475"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <a href="/people/6">
                  <div class="vision-right-content mt-8">
                    <img
                      src="../../assets/images/home-people6.png"
                      srcset="
                        ../../assets/images/home-people6.png    1x,
                        ../../assets/images/home-people6@2x.png 2x,
                        ../../assets/images/home-people6_sp@2x.png 320w
                      "
                      width="1080"
                      height="475"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <section id="vision" class="lg:hidden">
      <div class="mt-16">
        <div class="vision-title w-8/12 mx-auto">
          <img :src="titleimage" />
        </div>
        <div class="vision-right-content mt-8">
          <carousel :per-page="1" :autoplay="true" :loop="true">
            <slide>
              <div class="flex relative">
                <div class="vision-right-content mt-8">
                  <img
                    :src="homeimage1"
                    alt=""
                    srcset="../../assets/images/home-people1.png    1x,
                        ../../assets/images/home-people1@2x.png 2x,
                        ../../assets/images/home-people1_sp@2x.png 640w
                      "
                  />
                </div>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <div class="vision-right-content mt-8">
                  <img
                    :src="homeimage2"
                    alt=""
                    srcset="../../assets/images/home-people2.png    1x,
                        ../../assets/images/home-people2@2x.png 2x,
                        ../../assets/images/home-people2_sp@2x.png 640w
                      "
                  />
                </div>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <div class="vision-right-content mt-8">
                  <img
                    :src="homeimage3"
                    alt=""
                    srcset="../../assets/images/home-people3.png    1x,
                        ../../assets/images/home-people3@2x.png 2x,
                        ../../assets/images/home-people3_sp@2x.png 640w
                      "
                  />
                </div>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <div class="vision-right-content mt-8">
                  <img
                    :src="homeimage4"
                    alt=""
                    srcset="../../assets/images/home-people4.png    1x,
                        ../../assets/images/home-people4@2x.png 2x,
                        ../../assets/images/home-people4_sp@2x.png 640w
                      "
                  />
                </div>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <div class="vision-right-content mt-8">
                  <img
                    :src="homeimage5"
                    alt=""
                    srcset="../../assets/images/home-people5.png    1x,
                        ../../assets/images/home-people5@2x.png 2x,
                        ../../assets/images/home-people5_sp@2x.png 640w
                      "
                  />
                </div>
              </div>
            </slide>
            <slide>
              <div class="flex relative">
                <div class="vision-right-content mt-8">
                  <img
                    :src="homeimage6"
                    alt=""
                    srcset="../../assets/images/home-people6.png    1x,
                        ../../assets/images/home-people6@2x.png 2x,
                        ../../assets/images/home-people6_sp@2x.png 640w
                      "
                  />
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="vision-left-content">
          <p class="section-text text-sm py-5 pl-8">
            東急百貨店と共に成長する仲間たち。<br />
            志望動機や現在の仕事内容はもちろん、入社から現在に至るまで<br />
            記憶に残るエピソードや未来に向けた想いを語っていただきました。<br />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "People",
  components: {
    HomeSectionTitle,
    Carousel,
    Slide,
  },
  data() {
    return {
      homeimage1: require("@/assets/images/home-people1.png"),
      homeimage2: require("@/assets/images/home-people2.png"),
      homeimage3: require("@/assets/images/home-people3.png"),
      homeimage4: require("@/assets/images/home-people4.png"),
      homeimage5: require("@/assets/images/home-people5.png"),
      homeimage6: require("@/assets/images/home-people6.png"),
      titleimage: require("@/assets/images/top-people.svg"),
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
  width: 100%;
  padding-left: 10%;
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
  width: 70% !important;
}

@media screen and (max-width: 640px) {
  .VueCarousel-pagination {
    width: 100% !important;
    padding-left: 0;
    margin-left: 0;
  }
  .VueCarousel-dot-container {
    left: 20px;
    text-align: right;
  }
  .VueCarousel-dot {
    width: 30px !important;
    padding: 0 8px !important;
  }
}
</style>
