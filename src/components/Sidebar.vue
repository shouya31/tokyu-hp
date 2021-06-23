<template>
  <div class="lg:fixed sidebar lg:w-2/12 lg:col-span-1">
    <!-- sp ヘッダー-->
    <!-- <nav class="h-32 lg:hidden">
      <div class="left-nav-content float-left ml-3 w-40">
        <a href="/" class="w-3 md:max-w-xs"><img src="../assets/tokyu-logo.png" alt="東急百貨店"/></a>
        <p class="side-recruitment-title font-weight-900 ml-3 pt-1 tracking-widest">RECRUITMENT</p>
      </div>
      <div class="right-nav-content float-right pt-8">
        <div class="menu h-20 w-20">
          <p><span style="width: 40%;"></span></p>
          <p><span style="width: 40%;"></span></p>
        </div>
      </div>
    </nav> -->
    <!-- sp ヘッダーここまで -->
    <div class="sidebar hidden max-w-full lg:flex lg:col-span-1 p-8">
      <router-link to="/greeting" style="height: 30vh;"
        ><img
          src="../assets/images/tokyu-logo.png"
          alt="東急百貨店"
          width="150"
      /></router-link>
      <div class="menu hidden lg:block ml-6" style="height: 50vh;">
        <p><span style="width: 30%;"></span></p>
        <p><span style="width: 30%;"></span></p>
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
