<template>
  <div class="hidden lg:block">
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
      <div v-on:click="menuOpenOrClose" class="menu p-5">
        <img :src="src" alt="" srcset="" />
      </div>
    </header>
    <modal
      name="hello-world"
      :draggable="true"
      :resizable="true"
      width="100%"
      height="100%"
      @opened="opend"
      @before-close="beforeClose"
      @before-open="beforeOpen"
    >
      <div class="menu-context flex">
        <div class="each-menu flex">
          <div class="menu-line">
            <div class="menu-block">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-vision.svg" />
              </p>
              <ul>
                <li class="menu-list">
                  <a href="/vision">> ビジョンについて</a>
                </li>
              </ul>
            </div>
            <div class="menu-block hidden">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-project.svg" />
              </p>
              <ul class="menu-bottom-line">
                <li class="menu-list"><a href="">> 地域と共に</a></li>
                <li class="menu-list"><a href="">> 新規事業と共に</a></li>
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
                <ul class="border-none">
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
            <div class="menu-block hidden">
              <p class="menu-context-title text-3xl">
                <img src="../assets/images/menu-culture.svg" />
              </p>
              <ul class="menu-bottom-line">
                <li class="menu-list"><a href="">> 若手座談会</a></li>
                <li class="menu-list"><a href="">> 男性社員座談会</a></li>
                <li class="menu-list"><a href="">> 上司×部下対談</a></li>
                <li class="menu-list"><a href="">> メールアンケート</a></li>
              </ul>
            </div>
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
        </div>
      </div>
      <div class="flex justify-between bottom-menu-context">
        <div class="menu-grou-together ml-8">
          <img
            src="@/assets/images/grow-together.png"
            srcset="
              @/assets/images/grow-together.png    1x,
              @/assets/images/grow-together@2x.png 2x
            "
            alt="Grow together 「共に歩む」"
            class="w-10/12"
          />
        </div>
        <div class="menu-entry-btn">
          <a
            href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              src="../assets/images/entry-btn.svg"
              alt=""
              class="w-11/12 mt-10"
            />
          </a>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openBtn: require("../assets/images/open-btn.svg"),
      closeBtn: require("../assets/images/close-menu.svg"),
      src: require("../assets/images/open-btn.svg"),
      ChangeBg: false,
    };
  },
  methods: {
    menuOpenOrClose: function () {
      if (this.src === this.openBtn) {
        this.$modal.show("hello-world");
        this.src = this.closeBtn;
        return;
      }

      if (this.src === this.closeBtn) {
        this.$modal.hide("hello-world");
        this.src = this.openBtn;
        return;
      }
    },
    changeOpenMenu: function () {
      this.src = this.openBtn;
    },
    changeCloseMenu: function () {
      this.src = this.closeBtn;
    },
  },
};
</script>

<style>
@import "../assets/style/home.css";
@import "../assets/style/style.css";

.menu-context {
  padding-top: 50px;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}
.bottom-menu-context {
  max-width: 1100px;
  margin: 0 auto;
}
.vm--container {
  max-width: 1600px;
}
@media screen and (min-width: 1600px) {
.vm--container {
  position: absolute!important;
}
.menu-context {
  margin: 0 auto;
}
.bottom-menu-context {
  margin: 0 auto;
}
}

@media screen and (max-width: 800px) {
  .vm--modal {
    left: 0px !important;
    width: 100% !important;
  }
  .vm--container {
    width: 100vw !important;
  }
  .each-menu {
    padding-top: 100px;
  }
  .menu-list {
    font: normal normal bold 16px/32px Noto Sans;
    letter-spacing: 0px;
    color: #333333;
  }
  .menu-line {
    padding: 0px;
  }
  .menu-block {
    margin-bottom: 0px;
    padding-top: 0px;
  }
  .menu-line .menu-follow {
    margin-top: 0px;
    margin-left: 50px;
  }
  .menu-context-title {
    width: 100px;
    height: 36px;
    margin-bottom: 0px !important;
  }

  .menu-block ul p {
    width: 140px;
    height: 35%;
    font: normal normal bold 14px/32px Noto Sans;
    text-align: center;
  }
  .menu-bottom-line {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 20px !important;
    padding-top: 0px;
  }
  .menu-folow-parts {
    width: 27%;
    margin-left: 60px;
  }
  .menu-entry-btn {
    margin: 40px 0px 40px 57px;
  }
  .menu-grou-together {
    width: 80%;
    margin-left: 37px;
  }
}
</style>
