<template>
  <div class="fixed sidebar col-span-1">
    <!-- sp ヘッダー-->
    <nav class="flex hidden pl-24 pt-8 mx-auto">
      <a href="/" class="max-w-xl md:max-w-xs"
        ><img src="../assets/tokyu-logo.png" alt="東急百貨店"
      /></a>
    </nav>
    <!-- sp ヘッダーここまで -->
    <div class="hidden max-w-full lg:block lg:col-span-1 p-8">
      <router-link to="/people">
        <img src="../../public/tokyu-logo.png" alt="東急百貨店" width="150" />
      </router-link>
      <p class="hidden lg:block font-weight-900 ml-3 pt-1 tracking-widest">
        RECRUITMENT
      </p>
      <div class="menu hidden lg:block py-48 ml-8">
        <p><span style="width: 30%;"></span></p>
        <p><span style="width: 30%;"></span></p>
      </div>
      <button class="bg-blue-900 ml-3 mt-28 px-2 tracking-widest">
        <p class="text-white">ENTRY</p>
      </button>
    </div>
  </div>
</template>

<script>
// ここにJSを実装する
</script>

<style>
@import "../assets/style/style.css";
</style>
