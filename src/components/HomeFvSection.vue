<template>
  <div id="fv-main" class="fv w-full  hidden lg:block">
    <div class="fv-header flex p-10 m-8">
      <p
        class="relative text-5xl font-thin tracking-wider"
        style="left: -20px; font-family: serif;"
      >
        共に歩む
      </p>
      <p
        class="relative text-4xl tracking-wider top-6"
        style="font-family top: 20px; left: -10px; font-size: 60px; font-family: serif;"
      >
        ×
      </p>
      <p
        class="relative text-6xl tracking-widest"
        style="font-family: emoji; font-weight: 600; right: -10px;bottom: -40px; color: #003366;"
      >
        VISION
      </p>
    </div>
    <div class="fv-contents flex">
      <div class="fv-left-content w-11/12">
        <transition name="fade" mode="out-in">
          <img
            :src="images[index]"
            :key="images[index]"
            alt=""
            width="800"
            height="550"
            style="height:550px;"
          />
        </transition>
      </div>
      <div class="fv-right-content absolute right-0">
        <div class="flex justify-end m-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-VliuBzfhMkFESbIx1mThj2Ay9Ll-UnYhQ&usqp=CAU"
            alt=""
            class="relative w-3/12"
            style="top: 170px;left: 65px; height: 180px;"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-VliuBzfhMkFESbIx1mThj2Ay9Ll-UnYhQ&usqp=CAU"
            alt=""
            class="relative w-3/12"
            style="top: -140px; left: 30px; height: 180px;"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UfL29AEE6YkXLWVYUqixiR9AM-kt3UBrAA&usqp=CAU"
            alt=""
            class="relative w-3/12"
            style="bottom: -280px; height: 180px;"
          />
        </div>
      </div>
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
        "https://i.pinimg.com/originals/95/35/ef/9535efedcf312e1b90845f27a7e815c8.jpg",
        "https://contents.oricon.co.jp/special/img/55000/55338/detail/img660/1603497089912.jpg",
        "https://www.bunkamura.co.jp/museum/exhibition/17_kyosai/topics/assets_c/2017/03/20170306165143-thumb-500x345-17692.jpg",
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
