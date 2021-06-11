<template>
    <div class="container-fuild grid grid-cols-1 lg:grid-cols-4 gap-9 lg:gap-7">
        <sidebar></sidebar>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'PeoplePage',
  components: {
    Sidebar
  },
}
</script>

<style>
  @import "../assets/style/style.css";
</style>
