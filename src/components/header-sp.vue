<template>
  <div class="sm:hidden">
    <header>
      <h1>
        <a href="/">
          <img
            src="@/assets/images/header-logo.svg"
            alt="東急百貨店のリクルートサイト"
            style="width: 120px"
          />
        </a>
      </h1>
      <div v-on:click="menuOpenOrClose" class="menu">
        <img :src="src" alt="" srcset="" />
      </div>
    </header>
    <modal
      name="hello-world-sp"
      height="100%"
      @opened="opend"
      @before-close="beforeClose"
    >
      <div class="menu-context">
        <div class="each-menu">
          <div class="menu-line">
            <div class="menu-block">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-vision.svg" />
              </p>
              <ul class="menu-bottom-line">
                <li class="menu-list">
                  <a href="/vision">ビジョンについて</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu-line">
            <div class="menu-block">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-people.svg" />
              </p>
              <ul class="menu-bottom-line">
                <li class="menu-list">
                  <a href="/careerfield">キャリアフィールド</a>
                </li>
                <ul>
                  <li class="menu-list">
                    <a href="/people/1">> たまプラーザ店 営業統括部</a>
                  </li>
                  <li class="menu-list">
                    <a href="/people/2">> 専門店事業部</a>
                  </li>
                  <li class="menu-list">
                    <a href="/people/3">> ファッション・雑貨統括部</a>
                  </li>
                  <li class="menu-list">
                    <a href="/people/4">> 営業推進部 顧客サービス部</a>
                  </li>
                  <li class="menu-list">
                    <a href="/people/5">> 事業戦略室 事業開発部</a>
                  </li>
                  <li class="menu-list">
                    <a href="/people/6">> 営業推進部 営業企画部</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div class="menu-line">
            <div class="menu-block">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-system.svg" />
              </p>
              <ul class="menu-bottom-line">
                <li class="menu-list">
                  <a href="/workstyle">働き方について</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu-line">
            <div class="menu-block">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-recruit.svg" />
              </p>
              <ul class="menu-bottom-line">
                <li>
                  <a href="/greeting" class="menu-list"
                    >人事部長メッセージ</a
                  >
                </li>
                <li class="menu-list"><a href="/faq">FAQ</a></li>
                <li class="menu-list">
                  <a href="/recruit">募集要項＆会社概要</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu-line">
            <div class="menu-block">
              <p>
                <a
                  href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block"
                >
                  <img
                    src="@/assets/images/side-entry-btn.svg"
                    alt=""
                    class="w-11/12 mt-10 mx-auto"
                    style="width: 160px"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex justify-between">
        <div class="menu-grou-together">
          <img
            src="@/assets/images/grow-together.png"
            srcset="
              @/assets/images/grow-together.png    1x,
              @/assets/images/grow-together@2x.png 2x
            "
            alt="Grow together 「共に歩む」"
          />
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      src: require("@/assets/images/open-btn.svg"),
      openBtn: require("@/assets/images/open-btn.svg"),
      closeBtn: require("@/assets/images/close-menu.svg"),
    };
  },
  mounted() {
    setInterval(() => {
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    }, 3000);
  },
  methods: {
    menuOpenOrClose: function() {
      this.$modal.show("hello-world-sp");

      if (this.src === this.openBtn) {
        this.$modal.show("hello-world-sp");
        this.src = this.closeBtn;
        return;
      }

      if (this.src === this.closeBtn) {
        this.$modal.hide("hello-world-sp");
        this.src = this.openBtn;
        return;
      }
    },
    changeOpenMenu: function() {
      this.src = this.openBtn;
    },
    changeCloseMenu: function() {
      this.src = this.closeBtn;
    },
    opend: function() {
      document.querySelector('body').setAttribute('style', 'overflow: hidden;')
      this.src = this.closeBtn;
    },
    beforeClose: function() {
      document.querySelector('body').removeAttribute('style', 'overflow: hidden;')
      this.src = this.openBtn;
    },
  },
};
</script>
