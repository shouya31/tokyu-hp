<template>
<div style="background-color: rgb(255, 255, 255); z-index: 99; position: relative;">
    <section id="people" class="home-main-content relative py-10">
      <div class="mt-16">
        <HomeSectionTitle :image="titleimage" />
        <div class="content-wrapper">
          <div class="text-content bg-white" style="z-index: 99">
            <p class="section-text mt-16" style="letter-spacing: -0.05em">
              東急百貨店と共に成長する仲間たち。<br class="pc-br">志望動機や現在の仕事内容はもちろん、<br class="pc-br">入社から現在に至るまで記憶に残る<br class="pc-br">エピソードや未来に向けた想いを<br class="pc-br">語っていただきました。
            </p>
          </div>

          <carousel
            :per-page="1"
            :autoplay="true"
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
                          @/assets/images/home-people1.jpg    1x,
                          @/assets/images/home-people1@2x.jpg 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people1_sp.jpg    1x,
                          @/assets/images/home-people1_sp@2x.jpg 2x
                        "
                        width="375px"
                      />
                      <img
                        src="@/assets/images/home-people1.jpg"
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
                          @/assets/images/home-people2.jpg    1x,
                          @/assets/images/home-people2@2x.jpg 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people2_sp.jpg    1x,
                          @/assets/images/home-people2_sp@2x.jpg 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people2.jpg"
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
                          @/assets/images/home-people3.jpg    1x,
                          @/assets/images/home-people3@2x.jpg 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people3_sp.jpg    1x,
                          @/assets/images/home-people3_sp@2x.jpg 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people3.jpg"
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
                          @/assets/images/home-people4.jpg    1x,
                          @/assets/images/home-people4@2x.jpg 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people4_sp.jpg    1x,
                          @/assets/images/home-people4_sp@2x.jpg 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people4.jpg"
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
                          @/assets/images/home-people5.jpg    1x,
                          @/assets/images/home-people5@2x.jpg 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people5_sp.jpg    1x,
                          @/assets/images/home-people5_sp@2x.jpg 2x
                        "
                      />
                      <img
                        src="@/assets/images/home-people5.jpg"
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
                          @/assets/images/home-people6.jpg    1x,
                          @/assets/images/home-people6@2x.jpg 2x
                        "
                      />
                      <source
                        media="(max-width:640px)"
                        srcset="
                          @/assets/images/home-people6_sp.jpg    1x,
                          @/assets/images/home-people6_sp@2x.jpg 2x
                        "
                      />

                      <img
                        src="@/assets/images/home-people6.jpg"
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
      homeimage1: require("@/assets/images/home-people1.jpg"),
      homeimage2: require("@/assets/images/home-people2.jpg"),
      homeimage3: require("@/assets/images/home-people3.jpg"),
      homeimage4: require("@/assets/images/home-people4.jpg"),
      homeimage5: require("@/assets/images/home-people5.jpg"),
      homeimage6: require("@/assets/images/home-people6.jpg"),
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
