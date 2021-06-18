<template>
  <section id="vision" class="pl-52 lg:flex py-10">
    <div class="mt-16 ml-10">
      <HomeSectionTitle title="VISION" />
      <div class="flex justify-between">
        <HomeSectionText
          text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        />
        <HomeSectionImage :image="image" />
      </div>
    </div>
  </section>
</template>

<script>
import HomeSectionTitle from "../../components/atom/HomeSectionTitle.vue";
import HomeSectionImage from "../../components/atom/HomeSectionImage.vue";
import HomeSectionText from "../../components/atom/HomeSectionText.vue";
export default {
  name: "Vision",
  components: {
    HomeSectionTitle,
    HomeSectionImage,
    HomeSectionText,
  },
  data() {
    return {
      image: require("@/assets/images/home-vision.png"),
    };
  },
};
</script>
