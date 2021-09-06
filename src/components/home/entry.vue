<template>
  <div>
    <section class="hidden lg:block p-52">
      <div class="grou-together">
        <img
          src="@/assets/images/grow-together.png"
          srcset="
            @/assets/images/grow-together.png    1x,
            @/assets/images/grow-together@2x.png 2x
          "
          alt="Grow together 「共に歩む」"
          class="mx-auto"
        />
      </div>
      <div class="entry-btn mt-12">
        <a
          href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <img src="../../assets/images/entry-btn.svg" alt="" class="mx-auto" />
        </a>
      </div>
    </section>
    <section class="lg:hidden py-40">
      <div class="grou-together">
        <img
          src="@/assets/images/grow-together.png"
          srcset="
            @/assets/images/grow-together.png    1x,
            @/assets/images/grow-together@2x.png 2x
          "
          alt="Grow together 「共に歩む」"
          class="mx-auto w-9/12"
        />
      </div>
      <div class="entry-btn mt-6">
        <a
          href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <img
            src="../../assets/images/entry-btn.svg"
            alt=""
            class="mx-auto w-4/12"
          />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Entry",
};
</script>
