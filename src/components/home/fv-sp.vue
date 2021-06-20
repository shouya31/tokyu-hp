<template>
  <div class="lg:hidden">
    <header class="fixed w-full" style="z-index:999999999;">
      <div class="pl-5 flex justify-between">
        <div class="py-3">
          <a href="#" class=""
            ><img
              src="../../assets/images/tokyu-logo.png"
              alt="東急百貨店"
              width="140"
          /></a>
        </div>
        <div class="menu p-5">
          <p><span style="width: 40px;"></span></p>
          <p><span style="width: 40px;"></span></p>
        </div>
      </div>
    </header>

    <section class="pt-20 pb-16">
      <div class="fv-contents w-11/12 relative left-0">
        <div class="fv-sp-title p-5">
          <img src="../../assets/images/fv-vision.png" alt="" class="w-9/12" />
        </div>
        <div class="fv-left-content">
          <transition name="fade" mode="out-in">
            <img :src="images[index]" :key="images[index]" />
          </transition>
        </div>
      </div>
    </section>
    <div class="fv-right-content absolute right-0">
      <div class="flex justify-end">
        <img
          src="../../assets/images/home-fv2.png"
          alt=""
          class="relative w-2/12"
          style="top: -220px;"
        />
        <img
          src="../../assets/images/home-fv1.png"
          alt=""
          class="relative w-2/12"
          style="top: -330px;"
        />
        <img
          src="../../assets/images/home-fv3.png"
          alt=""
          class="relative w-2/12"
          style="top: -150px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FvSp",
  data() {
    return {
      show: true,
      index: 0,
      images: [
        require("@/assets/images/fv-main1.png"),
        require("@/assets/images/fv-main2.png"),
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
  font-family: serif;
  line-height: 32px;
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
