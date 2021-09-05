<template>
  <div>
    <div id="fv-main" class="fv w-full mb-20 hidden lg:block">
      <div class="fv-header flex items-start my-8 pt-10">
        <img src="../../assets/images/fv-title.svg" class="fv-title"/>
        <transition name="fade" mode="out-in">
          <img
            :src="titleImages[index]"
            :key="titleImages[index]"
            class="ml-7 mt-10 fv-thema"
            style="z-index:-2;"
          />
        </transition>
      </div>
      <div class="fv-contents flex relative">
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
        <div class="fv-right-content absolute right-0">
          <div class="flex justify-end m-10">
            <a href="/people/3">
              <img
                src="../../assets/images/home-fv3.png"
                alt=""
                class="fv-person-animation2"
                style="top: 170px;left: 65px; max-width: 200px; z-index:-2;;"
              />
            </a>
            <a href="/people/1">
              <img
                src="../../assets/images/home-fv1.png"
                class="fv-person-animation1"
                style="top: -140px; left: 30px; max-width: 200px; z-index:-2;;"
              />
            </a>

            <a href="/people/6">
              <img
                src="../../assets/images/home-fv6.png"
                alt=""
                class="fv-person-animation3"
                style="bottom: -280px; max-width: 200px; z-index:-2;;"
              />
            </a>
          </div>
          <div class="flex justify-end mt-20">
            <a href="/people/2">
              <img
                src="../../assets/images/home-fv2.png"
                alt=""
                class="fv-person-animation5"
                style="top: 280px;left: 65px; max-width: 200px; z-index:-2;;"
              />
            </a>

            <a href="/people/4">
              <img
                src="../../assets/images/home-fv4.png"
                alt=""
                class="fv-person-animation4"
                style="left: 30px; max-width: 200px; z-index:-2;;"
              />
            </a>

            <a href="/people/5">
              <img
                src="../../assets/images/home-fv5.png"
                alt=""
                class="fv-person-animation6"
                style="bottom: -420px; max-width: 200px; z-index:-2;;"
              />
            </a>
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
        require("@/assets/images/fv-vision.svg"),
        require("@/assets/images/fv-project.svg"),
        require("@/assets/images/fv-people.svg"),
        require("@/assets/images/fv-culture.svg"),
      ],
    };
  },
  methods: {
    animationPaused: function() {
      console.log(123);
    },
  },
  mounted() {
    setInterval(() => {
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    }, 3000);
  },
};
</script>

<style>
.fv-header {
  width: 100%;
  z-index: 9;
  position: relative;
}
.fv-title {
  width: 200px;
}
.fv-thema {
  height: 80px;
}


.fv-person-animation1 {
  animation: person_moveY1 18s linear infinite;
}

@keyframes person_moveY1 {
  0% {
    transform: scaleY(1) translateY(360px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1360px);
  }
}

.fv-person-animation2 {
  animation: person_moveY2 18s linear infinite;
}

@keyframes person_moveY2 {
  0% {
    transform: scaleY(1) translateY(650px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1050px);
  }
}

.fv-person-animation3 {
  animation: person_moveY3 18s linear infinite;
}

@keyframes person_moveY3 {
  0% {
    transform: scaleY(1) translateY(800px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-900px);
  }
}

.fv-person-animation4 {
  animation: person_moveY4 18s linear infinite;
}

@keyframes person_moveY4 {
  0% {
    transform: scaleY(1) translateY(500px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1260px);
  }
}

.fv-person-animation5 {
  animation: person_moveY5 18s linear infinite;
}

@keyframes person_moveY5 {
  0% {
    transform: scaleY(1) translateY(750px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-950px);
  }
}

.fv-person-animation6 {
  animation: person_moveY6 18s linear infinite;
}

@keyframes person_moveY6 {
  0% {
    transform: scaleY(1) translateY(800px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-500px);
  }
}

a .fv-person-animation1:hover {
  animation-play-state: paused !important;
  cursor: pointer;
}
a .fv-person-animation2:hover {
  animation-play-state: paused !important;
  cursor: pointer;
}
a .fv-person-animation3:hover {
  animation-play-state: paused !important;
  cursor: pointer;
}
a .fv-person-animation4:hover {
  animation-play-state: paused !important;
  cursor: pointer;
}
a .fv-person-animation5:hover {
  animation-play-state: paused !important;
  cursor: pointer;
}
a .fv-person-animation6:hover {
  animation-play-state: paused !important;
  cursor: pointer;
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
