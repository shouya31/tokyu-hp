<template>
  <div
    v-bind:class="{ change_bg: ChangeBg }"
    class="side-bar p-8 fixed hidden lg:block"
  >
    <div class="side-bar-content max-w-full col-span-1">
      <router-link to="/"
        ><img
          src="../../assets/images/tokyu-logo.svg"
          alt="東急百貨店"
          width="150"
      /></router-link>

      <div v-on:click="menuOpenOrClose" class="menu hidden lg:block py-40 ml-8">
        <img :src="src" alt="" srcset="" />
      </div>
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
        <div class="sidebar_menu-context flex">
          <div class="each-menu flex">
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-vision.svg" />
                </p>
                <ul>
                  <li class="menu-list">
                    <a href="/vision">> ビジョンについて</a>
                  </li>
                </ul>
              </div>
              <div class="menu-block hidden">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-project.svg" />
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
                  <img src="../../assets/images/menu-people.svg" />
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
                  <img src="../../assets/images/menu-culture.svg" />
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
                  <img src="../../assets/images/menu-system.svg" />
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
                  <img src="../../assets/images/menu-recruit.svg" />
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
        <div class="flex justify-between sidebar_bottom-menu-context">
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
                src="../../assets/images/entry-btn.svg"
                alt=""
                class="w-11/12 mt-10"
              />
            </a>
          </div>
        </div>
      </modal>
      <ul>
        <li
          v-on:mouseover="mouseoverVision"
          v-on:mouseleave="mouseleaveVision"
          class="menu-context-title tracking-wider font-BrandonGrotesque"
        >
          <a href="/#vision" style="color: gray"
            ><img :src="visionText" alt=""
          /></a>
        </li>
        <li
          v-on:mouseover="mouseoverPeople"
          v-on:mouseleave="mouseleavePeople"
          class="menu-context-title tracking-wider font-BrandonGrotesque"
        >
          <a href="/#people" style="color: gray"
            ><img :src="peopleText" alt=""
          /></a>
        </li>
        <li
          v-on:mouseover="mouseoverRecruit"
          v-on:mouseleave="mouseleaveRecruit"
          class="menu-context-title tracking-wider font-BrandonGrotesque"
        >
          <a href="/#recruit" style="color: gray"
            ><img :src="recruitText" alt=""
          /></a>
        </li>
      </ul>
      <div class="">
        <button class="mt-16">
          <p style="width: 80px">
            <a
              href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="@/assets/images/side-entry-btn.svg" alt="" />
            </a>
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visionText: require("../../assets/images/side-vision.svg"),
      projectText: require("../../assets/images/side-project.svg"),
      peopleText: require("../../assets/images/side-people.svg"),
      recruitText: require("../../assets/images/side-recruit.svg"),
      openBtn: require("../../assets/images/open-btn.svg"),
      closeBtn: require("../../assets/images/close-menu.svg"),
      src: require("../../assets/images/open-btn.svg"),
      ChangeBg: false,
    };
  },
  methods: {
    menuOpenOrClose: function() {
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
    changeOpenMenu: function() {
      this.src = this.openBtn;
    },
    changeCloseMenu: function() {
      this.src = this.closeBtn;
    },
    mouseoverVision: function() {
      this.visionText = require("../../assets/images/hover-side-vision.svg");
      window.location.href = "#vision";
    },
    mouseleaveVision: function() {
      this.visionText = require("../../assets/images/side-vision.svg");
    },
    mouseoverProject: function() {
      this.projectText = require("../../assets/images/hover-side-project.svg");
      window.location.href = "#project";
    },
    mouseleaveProject: function() {
      this.projectText = require("@/assets/images/side-project.svg");
    },
    mouseoverPeople: function() {
      this.peopleText = require("../../assets/images/hover-side-people.svg");
      window.location.href = "#people";
    },
    mouseleavePeople: function() {
      this.peopleText = require("@/assets/images/side-people.svg");
    },
    mouseoverRecruit: function() {
      this.recruitText = require("../../assets/images/hover-side-recruit.svg");
      window.location.href = "#recruit";
    },
    mouseleaveRecruit: function() {
      this.recruitText = require("../../assets/images/side-recruit.svg");
    },
    beforeOpen: function() {
      this.ChangeBg = true;
    },
    opend: function() {
      this.src = this.closeBtn;
    },
    beforeClose: function() {
      this.ChangeBg = false;
      this.src = this.openBtn;
    },
  },
};
</script>

<style>
@import "../../assets/style/home.css";
@import "../../assets/style/style.css";

.sidebar_menu-context {
  padding-top: 50px;
  justify-content: center;
  max-width: 1100px;
  margin: 0;
}
.sidebar_bottom-menu-context {
  max-width: 1100px;
  margin: 0;
}

.side-bar {
  z-index: 9999;
  max-width: 180px;
  background-color: #fff;
}

.menu-close {
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin-left: 50px;
}
.menu-line {
  padding: 80px 20px 0px 20px;
}
.menu-block {
  padding: 30px;
  margin-bottom: 30px;
}
.menu-block ul {
  padding: 10px;
}

.menu-block ul ul {
  padding: 10px;
}
.menu-context-title {
  height: 26px;
  margin-bottom: 8px;
}
.menu-context-title:hover {
}

.side-bar-content .vm--container {
  width: 100%;
  right: 0;
  left: 180px;
}

.menu-list {
  font-family: Noto Sans;
  line-height: 28px;
  font-size: 14px;
}
.menu-follow {
  margin-top: 100px;
  margin-left: 30px;
}
.menu-folow-parts {
  width: 60%;
  margin-left: 30px;
  margin-top: 20px;
}
.change_bg {
  width: 100vw;
  height: 100vh;
  background: white !important;
}
.vm--overlay {
  background: none !important;
}

.vm--modal{
  box-shadow: none !important;
}
</style>
