<template>
  <div>
    <div id="fv-main" class="fv w-full pl-60 mb-20 hidden lg:block">
      <div class="fv-header flex items-start m-8 pt-10">
        <img src="../../assets/images/fv-title.png" />
        <transition name="fade" mode="out-in">
          <img
            :src="titleImages[index]"
            :key="titleImages[index]"
            class="ml-7 mt-10"
            style="z-index:-2;"
          />
        </transition>
      </div>
      <div class="fv-contents flex">
        <div class="fv-left-content w-11/12" style="z-index:-3;">
          <transition name="fade" mode="out-in">
            <img
              :src="images[index]"
              :key="images[index]"
              alt=""
              width="800"
              height="550"
              style="height:550px; z-index:-3;"
            />
          </transition>
        </div>
        <div class="fv-right-content absolute right-0 fv-person-animation">
          <div class="flex justify-end m-10">
            <img
              src="../../assets/images/home-fv2.png"
              alt=""
              class="relative w-3/12"
              style="top: 170px;left: 65px; width: 13vw; z-index:-2;;"
            />
            <img
              src="../../assets/images/home-fv1.png"
              alt=""
              class="relative w-3/12"
              style="top: -140px; left: 30px; width: 13vw; z-index:-2;;"
            />
            <img
              src="../../assets/images/home-fv3.png"
              alt=""
              class="relative w-3/12"
              style="bottom: -280px; width: 13vw; z-index:-2;;"
            />
          </div>
          <div class="flex justify-end mt-96">
            <img
              src="../../assets/images/home-fv5.png"
              alt=""
              class="relative w-3/12"
              style="top: 280px;left: 65px; width: 13vw; z-index:-2;;"
            />
            <img
              src="../../assets/images/home-fv4.png"
              alt=""
              class="relative w-3/12"
              style="left: 30px; width: 13vw; z-index:-2;;"
            />
            <img
              src="../../assets/images/home-fv6.png"
              alt=""
              class="relative w-3/12"
              style="bottom: -420px; width: 13vw; z-index:-2;;"
            />
          </div>
        </div>
      </div>
    </div>
    <FvSp />
  </div>
</template>

<script>
import FvSp from "./fv-sp.vue";

export default {
  name: "HomeFvSection",
  components: {
    FvSp,
  },
  data() {
    return {
      show: true,
      index: 0,
      images: [
        require("@/assets/images/fv-main1.png"),
        require("@/assets/images/fv-main2.png"),
        require("@/assets/images/fv-main1.png"),
        require("@/assets/images/fv-main2.png"),
      ],
      titleImages: [
        require("@/assets/images/fv-vision.png"),
        require("@/assets/images/fv-project.png"),
        require("@/assets/images/fv-people.png"),
        require("@/assets/images/fv-culture.png"),
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    }, 3000);
  },
};
</script>

<style>
.fv-person-animation {
  animation: person_moveY 14s linear 0s infinite;
  z-index: -2;
}
@keyframes person_moveY {
  0% {
    transform: scaleY(1) translateY(500px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1200px);
  }
}

.font-BrandonGrotesque {
  font-family: Brandon Grotesque;
}
.font-NotoSerif {
  font-family: "Noto Serif JP", serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  z-index: -3;
}
.explain-text {
  font-size: 18px;
  font-family: "Noto Sans Japanese", sans-serif;
  line-height: 32px;
  z-index: -3;
  font-weight: 300;
}

@keyframes anim {
  0% {
    transform: translateY(-80px);
    display: none;
  }

  100% {
    transform: translateY(-700px);
  }
}
</style>
