<template>
  <div class="flex">
    <div>
      <HomeSideBar />
    </div>
    <div class="">
      <section class="hidden lg:flex" style="padding: 20px 20px 80px 20px;">
        <HomeFvSection />
      </section>

      <section class="explain lg:flex py-10" style="background-color: #add5d4;">
        <HomeExplainSection />
      </section>

      <section class="explain pl-52 lg:flex py-10">
        <div class="mt-16 ml-10">
          <HomeSectionTitle title="VISION" />
          <div class="flex justify-between">
            <HomeSectionText
              text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            />
            <HomeSectionImage 
              :image=images[0]
            />
          </div>
        </div>
      </section>

      <section class="project pl-52 lg:flex py-10">
        <div class="mt-16 ml-10">
          <HomeSectionTitle title="PROJECT" />
          <div class="flex justify-between p-10">
            <HomeSectionImage 
              :image=images[1]
            />
            <HomeSectionText 
              text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            />
          </div>
        </div>
      </section>

      <section class="people-section pl-52 lg:flex py-10">
        <div class="mt-16 ml-10">
          <HomeSectionTitle title="PEOPLE" />
          <div class="flex justify-between">
            <HomeSectionText 
              text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            />
            <HomeSectionImage 
              :image=images[2]
            />
          </div>
        </div>
      </section>

      <section class="project pl-52 lg:flex py-10">
        <div class="mt-16 ml-10">
          <HomeSectionTitle title="CULTURE" />
          <div class="flex justify-between p-10">
            <HomeSectionImage 
              :image=images[3]
            />
            <HomeSectionText 
              text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            />
          </div>
        </div>
      </section>
    </div>    
   

    <div class="lg:hidden">
      <header>
        <div class="px-2 ml-4 flex justify-between">
          <div class="py-3">
            <a href="#" class=""
              ><img
                src="../assets/tokyu-logo-gray.png"
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
import HomeSideBar from "../components/HomeSideBar.vue";
import HomeFvSection from "../components/HomeFvSection.vue";
import HomeExplainSection from "../components/HomeExplainSection.vue";
import HomeSectionTitle from "../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../components/atom/HomeSectionImage.vue";
import HomeSectionText from "../components/atom/HomeSectionText.vue";

export default {
  name: "HomePage",
  components: {
    HomeSideBar,
    HomeFvSection,
    HomeExplainSection,
    HomeSectionTitle,
    HomeSectionImage,
    HomeSectionText,
  },
  data() {
      return {
          images: [
                require("@/assets/images/home-vision.png"),
                require("@/assets/images/home-project.png"),
                require("@/assets/images/home-people1.png"),
                require("@/assets/images/home-culture.png"),

          ]
      }
  }
};
</script>

<style>
@import "../assets/style/home.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.explain-text {
  font-size: 18px;
  font-family: serif;
  line-height: 32px;
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
