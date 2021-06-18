<template>
  <div id="fv-main" class="fv w-full pl-60 mb-20 hidden lg:block">
    <div class="fv-header flex p-10 m-8">
      <p
        class="font-NotoSerif relative text-5xl font-thin tracking-wider"
        style="left: -20px; z-index:-2;"
      >
        共に歩む
      </p>
      <p
        class="font-NotoSerif relative text-4xl tracking-wider top-6"
        style="font-family top: 20px; left: -10px; font-size: 60px; z-index:-2;"
      >
        ×
      </p>
      <p
        class="relative text-6xl tracking-widest font-BrandonGrotesque"
        style="font-weight: 600; right: -10px;bottom: -40px; color: #003366; z-index:-2;"
      >
        VISION
      </p>
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
      <div class="fv-right-content absolute right-0">
        <div class="flex justify-end m-10">
          <img
            src="../../assets/images/home-fv2.png"
            alt=""
            class="relative w-3/12"
            style="top: 170px;left: 65px; width: 13vw; z-index:-2;"
          />
          <img
            src="../../assets/images/home-fv1.png"
            alt=""
            class="relative w-3/12"
            style="top: -140px; left: 30px; width: 13vw; z-index:-2;"
          />
          <img
            src="../../assets/images/home-fv3.png"
            alt=""
            class="relative w-3/12"
            style="bottom: -280px; width: 13vw; z-index:-2;"
          />
        </div>
      </div>
    </div>

    <div class="lg:hidden">
      <header>
        <div class="px-2 ml-4 flex justify-between">
          <div class="py-3">
            <a href="#" class=""
              ><img
                src="../../assets/tokyu-logo-gray.png"
                alt="東急百貨店"
                width="100"
            /></a>
            <p class="text-sm pt-1 tracking-wide">RECRUITMENT</p>
          </div>
          <div class="py-6 px-2">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </div>
        </div>
      </header>

      <section>
        <!-- <div class="fv-header">
                    <p class="bg-white px-4 py-1 text-2xl font-thin tracking-wider" style="font-family: serif;">共に歩む</p>
                    <p class="bg-white px-4 py-1 text-2xl tracking-wider w-1/12 mx-auto" style="font-size: 30px;">×</p>
                    <p class="bg-white px-4 py-1 text-2xl tracking-widest text-right" style="font-family: emoji; font-weight: 600; color: #003366;">VISION</p>
                </div> -->
        <div class="fv-contents w-11/12 mx-auto">
          <div class="fv-left-content">
            <img
              src="https://i.pinimg.com/originals/95/35/ef/9535efedcf312e1b90845f27a7e815c8.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFvSection",
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
.font-BrandonGrotesque{
  font-family: Brandon Grotesque;
}
.font-NotoSerif{
  font-family: Noto Serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  z-index:-3;
}
.explain-text {
  font-size: 18px;
  font-family: serif;
  line-height: 32px;
  z-index:-3;
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

