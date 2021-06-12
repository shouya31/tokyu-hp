<template>
    <div>
        <div class="hidden lg:flex">
            <div class="side-bar w-2/12  hidden lg:block">
                <div class="max-w-full col-span-1 px-2 ml-4">
                    <a href="#" class="lg:ml-3"><img src="../assets/tokyu-logo-gray.png" alt="東急百貨店" width="150"></a>
                    <p class="hidden lg:block font-weight-900 ml-3 pt-1 tracking-widest">RECRUITMENT</p>
                    <div class="hidden lg:block py-40 ml-6">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                        </svg>
                    </div>
                    <ul>
                        <li class="menu-title tracking-wider">VISION</li>
                        <li class="menu-title tracking-wider">PROJECT</li>
                        <li class="menu-title tracking-wider">PEOPLE</li>
                        <li class="menu-title tracking-wider">CULTURE</li>
                    </ul>
                    <div class="w-11/12 mx-auto">
                        <button class="mt-16 px-2" style="background: #003366;">
                            <p class="text-2xl text-white tracking-widest">ENTRY</p>
                        </button>
                    </div>
                </div>
            </div>

            <section id="fv-main" class="fv w-full  hidden lg:block">
                <div class="fv-header flex p-10 m-8">
                    <p class="relative text-5xl font-thin tracking-wider" style="left: -20px; font-family: serif;">共に歩む</p>
                    <p class="relative text-4xl tracking-wider top-6" style="font-family top: 20px; left: -10px; font-size: 60px;">×</p>
                    <p class="relative text-6xl tracking-widest" style="font-family: emoji; font-weight: 600; right: -10px;bottom: -40px; color: #003366;">VISION</p>
                </div>
                <div class="fv-contents flex">
                    <div class="fv-left-content w-11/12">
                        <transition name="fade" mode="out-in">
                            <img :src="images[index]" :key="images[index]" alt="" width="800" height="550" style="height:550px;">
                        </transition>
                    </div> 
                    <div class="fv-right-content absolute right-0">
                        <div class="flex justify-end m-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-VliuBzfhMkFESbIx1mThj2Ay9Ll-UnYhQ&usqp=CAU" alt="" class="relative w-3/12" style="top: 170px;left: 65px; height: 180px;">
                            <img src="data:image/jpeg;base64,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" alt="" class="relative w-3/12" style="top: -140px; left: 30px; height: 180px;">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UfL29AEE6YkXLWVYUqixiR9AM-kt3UBrAA&usqp=CAU" alt="" class="relative w-3/12" style="bottom: -280px; height: 180px;">
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="lg:hidden">
            <header>
                <div class="px-2 ml-4 flex justify-between">
                    <div class="py-3">
                        <a href="#" class=""><img src="../assets/tokyu-logo-gray.png" alt="東急百貨店" width="100"></a>
                        <p class="text-sm pt-1 tracking-wide">RECRUITMENT</p>
                    </div>
                    <div class="py-6 px-2">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
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
                        <img src="https://i.pinimg.com/originals/95/35/ef/9535efedcf312e1b90845f27a7e815c8.jpg">
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default{
  data() {
    return{
        show: true,
        index: 0,
        images: [
            "https://i.pinimg.com/originals/95/35/ef/9535efedcf312e1b90845f27a7e815c8.jpg",
            "https://contents.oricon.co.jp/special/img/55000/55338/detail/img660/1603497089912.jpg",
            "https://www.bunkamura.co.jp/museum/exhibition/17_kyosai/topics/assets_c/2017/03/20170306165143-thumb-500x345-17692.jpg"
        ]
    }
  },
   mounted() {
    setInterval(() => {
        this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    }, 3000);
  },
}

</script>

<style>
@import "../assets/style/home.css";

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
