<template>
  <div class="lg:fixed sidebar lg:w-2/12 lg:col-span-1">
    <div class="sidebar hidden max-w-full lg:flex lg:col-span-1 p-8">
      <router-link to="/greeting" style="height: 30vh;"
        ><img
          src="../assets/images/tokyu-logo.png"
          alt="東急百貨店"
          width="150"
      /></router-link>
      <div class="menu hidden lg:block ml-8" style="height: 50vh;">
        <p><span class="w-10"></span></p>
        <p><span class="w-10"></span></p>
      </div>

      <a class="tracking-widest ml-4">
        <img
          src="../assets/images/side-entry-btn.png"
          alt=""
          srcset=""
        />
      </a>
    </div>
  </div>
</template>

<script></script>

<style>
@import "../assets/style/style.css";
.sidebar {
  display: flex;
  flex-direction: column;
}
</style>
