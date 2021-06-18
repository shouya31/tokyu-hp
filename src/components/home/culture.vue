<template>
    <section id="culture" class="pl-52 lg:flex py-10">
        <div class="mt-16 ml-10">
          <HomeSectionTitle title="CULTURE" />
          <div class="flex justify-between p-10">
            <HomeSectionImage 
              :image=image
            />
            <HomeSectionText 
              text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            />
          </div>
        </div>
    </section>  
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../../components/atom/HomeSectionImage.vue";
import HomeSectionText from "../../components/atom/HomeSectionText.vue";

export default ({
    name: "Culture",
    components: {
        HomeSectionTitle,
        HomeSectionImage,
        HomeSectionText,
    },
  data() {
      return {
          image: require("@/assets/images/home-culture.png"),
      }
  }
})
</script>