<template>
<div style="background-color: rgb(255, 255, 255); z-index: 99; position: relative;">
    <section id="people" class="home-main-content relative py-10">
      <div class="mt-16">
        <HomeSectionTitle :image="titleimage" />
        <div class="content-wrapper">
          <div class="text-content bg-white" style="z-index: 99">
            <p class="section-text mt-16">
              東急百貨店と共に成長する仲間たち。
              志望動機や現在の仕事内容はもちろん、入社から現在に至るまで
              記憶に残るエピソードや未来に向けた想いを語っていただきました。
            </p>
          </div>

          <carousel
            :per-page="1"
            :autoplay="false"
            :loop="true"
            :mouse-drag="true"
            :speed="300"
          >
            <slide>
              <div class="employee-image-box">
                <a href="/people/1">
                  <div class="">
                    <picture>
                      <source
                        media="(min-width:641px)"
                        srcset="
                          @/assets/images/home-people1.png    1x,
                          @/assets/images/home-people1@2x.png 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people1_sp.png    1x,
                          @/assets/images/home-people1_sp@2x.png 2x
                        "
                        width="375px"
                      />
                      <img
                        src="@/assets/images/home-people1.png"
                        alt="働く仲間と共に"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="employee-image-box">
                <a href="/people/2">
                  <div class="">
                    <picture>
                      <source
                        media="(min-width:641px)"
                        srcset="
                          @/assets/images/home-people2.png    1x,
                          @/assets/images/home-people2@2x.png 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people2_sp.png    1x,
                          @/assets/images/home-people2_sp@2x.png 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people2.png"
                        alt="催事と共に"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="employee-image-box">
                <a href="/people/3">
                  <div class="">
                    <picture>
                      <source
                        media="(min-width:641px)"
                        srcset="
                          @/assets/images/home-people3.png    1x,
                          @/assets/images/home-people3@2x.png 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people3_sp.png    1x,
                          @/assets/images/home-people3_sp@2x.png 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people3.png"
                        alt="お取引先様と共に"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="employee-image-box">
                <a href="/people/4">
                  <div class="">
                    <picture>
                      <source
                        media="(min-width:641px)"
                        srcset="
                          @/assets/images/home-people4.png    1x,
                          @/assets/images/home-people4@2x.png 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people4_sp.png    1x,
                          @/assets/images/home-people4_sp@2x.png 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people4.png"
                        alt="「ありがとう」と共に"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="employee-image-box">
                <a href="/people/5">
                  <div class="">
                    <picture>
                      <source
                        media="(min-width:641px)"
                        srcset="
                          @/assets/images/home-people5.png    1x,
                          @/assets/images/home-people5@2x.png 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people5_sp.png    1x,
                          @/assets/images/home-people5_sp@2x.png 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people5.png"
                        alt="食と共に"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </slide>
            <slide>
              <div class="employee-image-box">
                <a href="/people/6">
                  <div class="">
                    <picture>
                      <source
                        media="(min-width:641px)"
                        srcset="
                          @/assets/images/home-people6.png    1x,
                          @/assets/images/home-people6@2x.png 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people6_sp.png    1x,
                          @/assets/images/home-people6_sp@2x.png 2x
                        "
                      />

                      <img
                        src="@/assets/images/home-people6.png"
                        alt="東急線沿線と共に"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </slide>
          </carousel>
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
  max-width: 1100px;
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
text-align: center;
    padding-left: 0 !important;
    margin-top: 0 !important;
  }
  .VueCarousel-dot {
    width: 30px !important;
    padding: 0 8px !important;
  }
  .employee-image-box {
    margin-left: 40px;
  }
  .employee-image-box img {
    margin-left: auto;
    width: 100%;
  }
}
</style>
