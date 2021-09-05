<template>
  <div class="">
    <div class="img-content">
      <img :src="image" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style>
.img-content {
    max-width: 767px;
    margin-right: 40px;
}
</style>