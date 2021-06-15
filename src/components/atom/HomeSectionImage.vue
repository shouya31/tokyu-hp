<template>
  <div class="vision-right-content w-8/12 mt-8">
    <img
      :src="image"
      alt=""
      style="width: 100%; height: 500px"
    />
  </div>
</template>

<script>
export default {
    props: ['image'],
}
</script>