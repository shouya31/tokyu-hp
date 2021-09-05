<template>
  <div>
    <div class="to-pagetop">
      <a href="#">
        <img src="../../assets/images/pagetop-btn.svg" alt="PAGETOP" />
      </a>
    </div>
    <footer class="bg-white text-center mt-30 lg:block hidden">
      <a href=""
        ><img
          src="../../assets/images/footer-logo.svg"
          alt="東急百貨店"
          width="180"
          class="mx-auto bg-white"
      /></a>
      <p class="text-xs lg:text-sm mt-5">
        <small
          >Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights
          Reserved.</small
        >
      </p>
    </footer>
    <footer class="bg-white text-center mt-30 lg:hidden">
      <a href=""
        ><img
          src="../../assets/images/footer-logo.svg"
          alt="東急百貨店"
          width="180"
          class="mx-auto bg-white w-4/12"
      /></a>
      <p class="text-xs p-5">
        <small
          >Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights
          Reserved.</small
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
/* footer */
.to-pagetop {
  display: inline-block;
  position: fixed;
  right: 5%;
  bottom: 20px;
  z-index: 9999;
}
</style>
