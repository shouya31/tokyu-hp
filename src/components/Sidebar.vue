<template>
  <div class="lg:fixed sidebar lg:w-2/12 lg:col-span-1">
    <!-- sp ヘッダー-->
    <nav class="h-32 lg:hidden">
      <div class="left-nav-content float-left ml-3 w-40">
        <a href="/" class="w-3 md:max-w-xs"><img src="../assets/tokyu-logo.png" alt="東急百貨店"/></a>
        <p class="side-recruitment-title font-weight-900 ml-3 pt-1 tracking-widest">RECRUITMENT</p>
      </div>
      <div class="right-nav-content float-right pt-8">
        <div class="menu h-20 w-20">
          <p><span style="width: 30%;"></span></p>
          <p><span style="width: 30%;"></span></p>
        </div>
      </div>
    </nav>
    <!-- sp ヘッダーここまで -->
    <div class="hidden max-w-full lg:block lg:col-span-1 p-8">
      <router-link to="/people">
        <img src="../../public/tokyu-logo.png" alt="東急百貨店" width="150" />
      </router-link>
      <p class="side-recruitment-title hidden lg:block font-weight-900 ml-3 pt-1 tracking-widest">
        RECRUITMENT
      </p>
      <div class="menu hidden lg:block py-48 ml-8">
        <p><span style="width: 30%;"></span></p>
        <p><span style="width: 30%;"></span></p>
      </div>

      <modal name="hello-world" :draggable="true" :resizable="true">
        <div class="modal-header">
          <h2>Modal title</h2>
        </div>
        <div class="modal-body">
          <p>you're reading this text in a modal!</p>
          <button v-on:click="hide">閉じる</button>
        </div>  
      </modal>

      <button class="ml-3 mt-28 px-2 tracking-widest" style="background:#16344F;">
        <p class="text-white">ENTRY</p>
      </button>
    </div>
  </div>
</template>

<script>


</script>

<style>
@import "../assets/style/style.css";
</style>
