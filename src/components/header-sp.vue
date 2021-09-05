<template>
  <div class="lg:hidden">
    <header>
      <h1>
        <router-link to="/">
          <img
            src="@/assets/images/header-logo.svg"
            alt="東急百貨店のリクルートサイト"
            style="width: 120px"
          />
        </router-link>
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
                  <a href="/vision">> ビジョンについて</a>
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
                  <a href="/careerfield">> キャリアフィールド</a>
                </li>
                <p
                  class="mt-8"
                  style="background: #333333; color: white; padding: 5px"
                >
                  社員紹介
                </p>
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
                    <a href="/people/5">> 事業戦略部 顧客サービス部</a>
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
                  <a href="/workstyle">> 働き方について</a>
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
                  <router-link to="/greeting" class="menu-list"
                    >> 人事部長メッセージ</router-link
                  >
                </li>
                <li class="menu-list"><a href="/faq">> FAQ</a></li>
                <li class="menu-list">
                  <a href="/recruit">> 会社概要＆募集要項</a>
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
                    src="@/assets/images/entry-btn.svg"
                    alt=""
                    class="w-11/12 mt-10"
                    style="width: 200px"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex justify-between">
        <!-- <div class="menu-entry-btn">
            <img src="../assets/images/entry-btn.svg" alt="" />
          </div> -->
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
      this.src = this.closeBtn;
    },
    beforeClose: function() {
      this.src = this.openBtn;
    },
  },
};
</script>
